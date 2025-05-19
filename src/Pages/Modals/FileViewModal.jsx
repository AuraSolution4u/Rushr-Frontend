import React from "react";
import { X } from "lucide-react";

// View Modal Component for different file types
const FileViewModal = ({ isOpen, onClose, file }) => {
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

export default FileViewModal;