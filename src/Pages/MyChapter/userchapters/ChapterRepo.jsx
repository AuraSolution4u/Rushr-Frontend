 
import React, { useState, useEffect } from "react";
import { MoreVertical, X } from "lucide-react";
import list from "../../../assets/svgIcons/list.svg"
import UploadModal from "../../Modals/UploadModal";
import { Strings } from "../../../Strings/Strings";
import axios from 'axios';
import Image from "../../../assets/image.png"
import Video from "../../../assets/video.png";
import Pdf from "../../../assets/pdf.png";
import { useLocation } from "react-router-dom";
import { getChapterRepoListByChapterId } from "../../../features/users/uploadFile";
import LoadingSpinner from "../../../utils/loading/LoadingSpinner";

// import { getChapterRepoListByChapterId } from "../../features/users/uploadFile";
 
// const saveFormData= localStorage.getItem("saveFormData");
// const userId= saveFormData.userId;
 
const ViewModal = ({ isOpen, onClose, file }) => {
  if (!isOpen || !file) return null;
 
  const getContentByFileType = () => {
    const type = file.type.toLowerCase();
   
    if (type.includes('pdf')) {
      return (
        <iframe
          src={file.fileUrl}
          className="w-full h-full"
          title="PDF Viewer"
        />
      );
    } else if (type.match(/\.(jpg|jpeg|png|gif)$/)) {
      return (
        <img
          src={file.fileUrl}
          alt={file.fileName}
          className="max-w-full max-h-full object-contain"
        />
      );
    } else if (type.match(/\.(mp4|mov|avi|wmv)$/)) {
      return (
        <video
          controls
          className="max-w-full max-h-full"
          autoPlay
        >
          <source src={file.fileUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return <div>Unsupported file type</div>;
  };
 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg w-[80vw] h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">{file.fileName}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
       
        {/* Content */}
        <div className="flex-1 p-4 overflow-auto flex items-center justify-center">
          {getContentByFileType()}
        </div>
      </div>
    </div>
  );
};
 
const DropdownButton = ({ itemId, openDropdown, setOpenDropdown, setConfirmDelete, onDownload, onView }) => {
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
 
  return (
    <div className="relative">
      <button
        className="flex-shrink-0 p-1.5 hover:bg-gray-100 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown(itemId);
        }}
      >
        <MoreVertical size={16} className="text-gray-400" />
      </button>
      {openDropdown === itemId && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1 text-sm text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onDownload(itemId);
                setOpenDropdown(null);
              }}
            >
              {Strings.Download}
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onDownload(itemId);
                setOpenDropdown(null);
              }}
            >
              {Strings.View}
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setConfirmDelete(itemId)}
            >
              {Strings.Delete}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
 
const ConfirmationModal = ({ onCancel, onConfirm }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <div className="flex items-center gap-2 text-black text-lg font-medium">
        ⚠️ <span>{Strings.are_you_sure}</span>
      </div>
      <p className="text-gray-600 mt-2">{Strings.you_want_to_delete_this_document}</p>
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-2 border rounded-md" onClick={onCancel}>{Strings.Cancel}</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={onConfirm}>{Strings.Delete}</button>
      </div>
    </div>
  </div>
);
 
const ChapterRepo = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isListView, setIsListView] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [viewingFile, setViewingFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const location = useLocation();
  useEffect(() => {
    const fetchChapterRepoList = async () => {
      try {
        setIsLoading(true);
        setError(null);
 
        // Get data from localStorage
        const saveFormData = localStorage.getItem("saveFormData");
        if (!saveFormData) {
          console.error("No saveFormData found in localStorage");
          setError("User data not found");
          setIsLoading(false);
          return;
        }
 
        const parsedData = JSON.parse(saveFormData);
        const userId = parsedData?.userId;
        const chapterId = parsedData?.chapterDetails?.chapterId;
 
        if (!userId || !chapterId) {
          console.error("Missing userId or chapterId");
          setError("Missing required data");
          setIsLoading(false);
          return;
        }
 
        const getRequestBody = {
          userId: userId,
          chapterId: chapterId,
        };
 
        console.log("Fetching with params:", getRequestBody);
        let response ;
         response = await getChapterRepoListByChapterId(
          JSON.stringify(getRequestBody)
        );
 
        if (location.state?.refresh) {
         response=await getChapterRepoListByChapterId(JSON.stringify(getRequestBody)); // Call API again if refresh flag is set
        }
        console.log("API Response:", response);
 
        if (!response?.data?.responseObject) {
          throw new Error("Invalid response format");
        }
 
       
        const transformedDocuments = response.data.responseObject.map(file => {
          // Get the full filename from URL
          const fullFileName = decodeURIComponent(file.url.split('/').pop());
         
          // Split filename by last period to separate name and extension
          const lastDotIndex = fullFileName.lastIndexOf('.');
          const fileName = lastDotIndex !== -1 ? fullFileName.substring(0, lastDotIndex) : fullFileName;
          const fileExtension = lastDotIndex !== -1 ? fullFileName.substring(lastDotIndex + 1) : '';
       
          return {
            id: file.url,
            type: fileExtension,
            section: file.uploadedByYou ? "Uploaded by You" : "Uploaded by Members",
            fileUrl: file.url,
            fileName: fileName, // Only the name part without extension
            uploadedByYou: file.uploadedByYou
          };
        });
 
        console.log("Transformed documents:", transformedDocuments);
        setDocuments(transformedDocuments);
      } catch (error) {
        console.error("Error fetching chapter repo list:", error);
        setError(error.message || "Failed to load documents");
      } finally {
        setIsLoading(false);
      }
    };
 
    fetchChapterRepoList();
 
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("click", handleClickOutside);
 
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [location.state]);
 
  const handleDelete = () => {
    setDocuments(documents.filter(doc => doc.id !== confirmDelete));
    setConfirmDelete(null);
  };
 
  const handleUpload = (newDoc) => {
    const fileUrl = newDoc.file ? URL.createObjectURL(newDoc.file) : null;
    const updatedDoc = {
      ...newDoc,
      section: "Uploaded by You",
      fileUrl: fileUrl,
      fileName: newDoc.file ? newDoc.file.name : newDoc.type,
      uploadedByYou: true
    };
    setDocuments([updatedDoc, ...documents]);
  };
 
  const handleDownload = (docId) => {
    const documentToDownload = documents.find(doc => doc.id === docId);
    if (documentToDownload?.fileUrl) {
      window.open(documentToDownload.fileUrl, '_blank');
    }
  };
 
  const handleView = (docId) => {
    const fileToView = documents.find(doc => doc.id === docId);
    setViewingFile(fileToView);
  };
 
  const getFileIcon = (fileType) => {
    if (!fileType) return <img src={Pdf} alt="Default file" className="w-[43px] h-[46px]" />;
   
    const type = fileType.toLowerCase();
    if (type.includes('pdf')) {
      return <img src={Pdf} alt="PDF file" className="w-[43px] h-[46px]" />;
    } else if (type.match(/jpg|jpeg|png|gif/)) {
      return <img src={Image} alt="Image file" className="w-[43px] h-[46px]" />;
    } else if (type.match(/mp4|mov|avi|wmv/)) {
      return <img src={Video} alt="Video file" className="w-[43px] h-[46px]" />;
    }
    return <img src={Pdf} alt="Default file" className="w-[43px] h-[46px]" />;
  };
 
  const renderDocumentSection = (sectionTitle, sectionDocuments) => {
    if (!sectionDocuments || sectionDocuments.length === 0) return null;
 
    return (
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-4">{sectionTitle}</p>
        <div className={`grid ${isListView ? "grid-cols-1" : "grid-cols-3"} gap-4`}>
          {sectionDocuments.map((doc) => (
            <div
              key={doc.id}
              className={`bg-white rounded-full p-4 flex items-center gap-3 shadow-sm ${isListView ? "flex-row" : ""}`}
              style={isListView ? { maxWidth: '100%' } : {}}
            >
              {getFileIcon(doc.type)}
              <div className="flex-grow min-w-0">
                <p className="text-sm text-gray-700 truncate">{doc.fileName}</p>
                <p className="text-xs text-gray-400">{doc.size}</p>
              </div>
              <DropdownButton
                itemId={doc.id}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                setConfirmDelete={setConfirmDelete}
                onDownload={handleDownload}
                onView={handleView}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
 
  if (isLoading) {
    return (
      // <div className=" bg-gray-50 flex flex-col w-full pt-[100px] items-center justify-center">
      //   <p>Loading documents...</p>
      // </div>
      <LoadingSpinner/>
    );
  }
 
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col ml-[300px] pt-[100px] items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }
 
  return (
    <div className="h-[100vh] w-full overflow-scroll scrollbar-hide flex flex-col pt-[120px] ">
      <div className="p-4 border-b bg-white flex flex-row gap-[22rem] justify-between">
        <h1 className="text-lg font-normal">{Strings.document_repository}</h1>
        <div className="flex items-center gap-2 right-0">
          <button className="p-2" onClick={() => setIsListView(!isListView)}>
            <img src={list} alt="List view" className="w-[20px] h-[20px]" />
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm"
            onClick={() => setIsUploadModalOpen(true)}
          >
            {Strings.upload_new_document}
          </button>
        </div>
      </div>
 
      <div className="p-6 w-full -ml-6">
        {documents.length === 0 ? (
          <p className="text-center text-gray-500">No documents found</p>
        ) : (
          <>
            {renderDocumentSection(
              "Uploaded by You",
              documents.filter(doc => doc.uploadedByYou)
            )}
            {renderDocumentSection(
              "Uploaded by Members",
              documents.filter(doc => !doc.uploadedByYou)
            )}
          </>
        )}
      </div>
     
      {confirmDelete !== null && (
        <ConfirmationModal
          onCancel={() => setConfirmDelete(null)}
          onConfirm={handleDelete}
        />
      )}
 
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
      />
 
      {viewingFile && (
        <ViewModal
          isOpen={true}
          onClose={() => setViewingFile(null)}
          file={viewingFile}
        />
      )}
    </div>
  );
};
 
export default ChapterRepo;

