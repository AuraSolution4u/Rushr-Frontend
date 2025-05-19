import { useState } from "react";
import Dashboard_one from "../../assets/DUMMY/Frame1.png";
import Dashboard_two from "../../assets/DUMMY/Frame2.png";
import Dashboard_three from "../../assets/DUMMY/Frame3.png";
import Dashboard_four from "../../assets/scroll.png"
import CommingSoon from "../../assets/Vector.png"; // Common image for the modal

const ImageModal = ({ isVisible, imageSrc, text, onClose }) => {
 
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
        <button
          type="button"
          aria-label="Close"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={imageSrc}
          alt="Coming Soon"
          className="rounded-lg max-w-full mb-4"
        />
        <p className="text-lg font-medium text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const images = [
    { src: Dashboard_one, text: "Insights " },
    { src: Dashboard_two, text: "Calender" },
    { src: Dashboard_three, text: "Activity" },
    { src:Dashboard_four,text:"Announcements"}
  ];

  const handleImageClick = (text) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalText("");
  };

  return (
    <div className="pt-[100px] bg-[#f2f0f5] h-full w-full p-10">
      <div className="flex w-[1400px] gap-4">
        {images.slice(0, 2).map((image, index) => (
          <img
            key={index}
            alt="dashboard"
            src={image.src}
            className={`w-${index === 0 ? "full" : "[1199px]"} cursor-pointer`}
            onClick={() => handleImageClick(image.text)}
          />
        ))}
      </div>
      <div className="mt-4 flex ">
        <img
          src={images[2].src}
          alt="dashboard"
          className="cursor-pointer"
          onClick={() => handleImageClick(images[2].text)}
        />
         <img
          src={images[3].src}
          alt="dashboard"
          className="cursor-pointer ml-4 w-full"
          onClick={() => handleImageClick(images[3].text)}
        />
      </div>

      {/* Modal */}
      <ImageModal
        isVisible={isModalVisible}
        imageSrc={CommingSoon} // Common image for all modals
        text={modalText}
        onClose={closeModal}
      />
    </div>
  );
};

export default Dashboard;
