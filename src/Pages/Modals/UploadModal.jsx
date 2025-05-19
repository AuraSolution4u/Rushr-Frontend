import { useState } from "react";
import { X, Link as LinkIcon, Upload, Trash2 } from "lucide-react";
import Image from "../../assets/image.png";
import Video from "../../assets/video.png";
import Pdf from "../../assets/pdf.png";
import { Strings } from "../../Strings/Strings";
import { getChapterRepoListByChapterId, uploadChapterRepo } from "../../features/users/uploadFile";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
// Status Popup Component
export const StatusPopup = ({ message, onClose, isError }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg  p-6 w-[320px]">
      <div className=" flex justify-center items-center my-2">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="text-center mb-6">
        <p className={`text-lg ${isError ? "text-red-600" : "text-black"}`}>
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        OK
      </button>
    </div>
  </div>
);

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes

const UploadModal = ({ isOpen, onClose, onUpload , adminChapterId}) => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate= useNavigate()

  const saveFormData = localStorage.getItem("saveFormData");
  const userId = saveFormData && JSON.parse(saveFormData).userId;
  const chapterId= adminChapterId===undefined ? (saveFormData && JSON.parse(saveFormData).chapterDetails.chapterId): adminChapterId
 // const chapterId = saveFormData ? JSON.parse(saveFormData).chapterDetails.chapterId || adminChapterId : adminChapterId;
//  const chapterId =saveFormData && JSON.parse(saveFormData).chapterDetails.chapterId || adminChapterId;
//  console.log(adminChapterId)

  const validateFile = (file) => {
    const fileType = file.type.toLowerCase();
    const fileSize = file.size;

    if (fileSize > MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: "File size must be less than 25MB",
      };
    }

    if (
      !fileType.includes("pdf") &&
      !fileType.includes("image/") &&
      !fileType.includes("video/")
    ) {
      return {
        isValid: false,
        error: "Only PDF, image, and video files are allowed",
      };
    }

    return { isValid: true, error: null };
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validation = validateFile(selectedFile);
      if (validation.isValid) {
        setFile(selectedFile);
        setUploadError(null);
      } else {
        setUploadError(validation.error);
        setFile(null);
      }
    }
  };

  const getFileIcon = (file) => {
    if (!file) return null;
    const type = file.type.toLowerCase();
    if (type.includes("pdf")) {
      return <img src={Pdf} alt="PDF file" className="w-6 h-6" />;
    } else if (type.includes("image/")) {
      return <img src={Image} alt="Image file" className="w-6 h-6" />;
    } else if (type.includes("video/")) {
      return <img src={Video} alt="Video file" className="w-6 h-6" />;
    }
    return null;
  };

  // const handleUpload = async () => {
  //   if (!file) {
  //     setUploadError("Please select a file");
  //     return
  //   }

  //   try {

  //     setUploading(true);
  //     setUploadError(null);

  //     const response = await uploadChapterRepo(file, "chapter", userId,chapterId);
  //     setStatusMessage(response.message)
  //     console.log(response)

  //   if (response.data.statusCode===200)      {
  //     console.log(response.data.statusCode)
  //   }
  //   // setShowStatusPopup(true)
  //     const newDoc = {
  //       id: Date.now(),
  //       type: file.name,
  //       size: formatFileSize(file.size),
  //       section: 'Uploaded by You'
  //     };

  //     onUpload(newDoc);
  //     onClose();
  //     setFile(null);
  //     setLink('');
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     setUploadError(typeof error === 'string' ? error : 'Failed to upload file. Please try again.');
  //   } finally {

  //     setUploading(false);
  //   }

  // };

  const handleUpload = async () => {
    if (!file) {
      setUploadError("Please select a file");
      return;
    }

    try {
      setUploading(true);
      setUploadError(null);

      const response = await uploadChapterRepo(
        file,
        "chapter",
        userId,
        chapterId 
      );

      if (response.data.statusCode === 200) {
        setStatusMessage("File Uploaded Successfully!"); // Set success message
        setIsError(false);
        setShowStatusPopup(true); // Show status popup
      } else {
        setStatusMessage("Failed to upload file. Please try again.");
        setIsError(true);
        setShowStatusPopup(true);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setStatusMessage("Failed to upload file. Please try again.");
      setIsError(true);
      setShowStatusPopup(true);
    } finally {
      setUploading(false);
    }
  };

  // const handleStatusPopupClose = () => {
  //   setShowStatusPopup(false);
  //   if (!isError) {
  //     // Only close the modal and reset if upload was successful
  //     setFile(null);
  //     setLink('');
  //     onClose();
  //   }
  // };

  const handleStatusPopupClose = () => {
    setShowStatusPopup(false);
    if (!isError) {
    
      onClose(); 
      navigate("/mychapterdocrepo", { state: { refresh: true } });
      // navigate("/mychapterdocrepo");
      // window.location.reload(); // Reloads the page
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[480px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">{Strings.upload_new_document}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.wmv"
            />
            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center gap-2 text-gray-600 cursor-pointer"
            >
              <Upload size={20} />
              <span>{Strings.upload_file}</span>
              <p className="text-sm text-gray-400">Maximum File Size: 25MB</p>
              <p className="text-sm text-gray-400">
                Supported Formats: .pdf, .png,.mp4, etc
              </p>
            </label>
          </div>

          {file && (
            <div className="mt-4 flex items-center justify-between bg-gray-50 p-2 rounded">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                {getFileIcon(file)}
                <div>
                  <span className="block">{file.name}</span>
                  <span className="text-xs text-gray-400">
                    {formatFileSize(file.size)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setFile(null)}
                className="text-gray-500 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}

          {uploadError && (
            <div className="mt-2 text-sm text-red-500 bg-red-50 p-2 rounded">
              ⚠️ {uploadError}
            </div>
          )}

          <div className="mt-6">
            <p className="text-sm text-black mb-2">
              {Strings.or_share_a_drive_link}
            </p>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <button
          onClick={handleUpload}
          className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors disabled:bg-gray-400"
          disabled={uploading || !file}
        >
          {uploading ? Strings.uploading : Strings.upload_save}
        </button>
      </div>

      {showStatusPopup && (
        <StatusPopup
          message={statusMessage}
          onClose={handleStatusPopupClose}
          isError={isError}
        />
      )}
    </div>
  );
};

export default UploadModal;
