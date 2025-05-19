import React from "react";
import { Home, FileText, Compass, MessageCircle, Settings } from "lucide-react";

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
      <div className="flex justify-around items-center h-16">
        {/* Icons */}
        <div className="flex flex-col items-center">
          <Home className="w-6 h-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center">
          <FileText className="w-6 h-6 text-red-500" />
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
        </div>
        <div className="flex flex-col items-center">
          <Compass className="w-6 h-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center">
          <MessageCircle className="w-6 h-6 text-gray-500" />
        </div>
        <div className="flex flex-col items-center">
          <Settings className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
