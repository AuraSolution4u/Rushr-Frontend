import { useLocation, useNavigate } from "react-router-dom";

import { SidebarRoutes } from "../../Routes/SidebarRoutes";
import { useEffect, useState } from "react";

// const Sidebar = () => {
//   const [items, setItems] = useState([]);

//   const location = useLocation();
//   const requiredPath = location.pathname.slice(1);
//   console.log(location.pathname.slice(1));
//   const navigate = useNavigate();
//   const saveFormData = JSON.parse(localStorage.getItem("saveFormData"))
//   console.log(saveFormData.chapterDetails,"react sidebar")

//   useEffect(() => {
//     // const mychapterdetails={
//     //   data:true
//     // }
//     // if (mychapterdetails.data){
//     //   const selectedRoutes =
//     //     SidebarRoutes.find((section) => section.name.some((n) => n === requiredPath))
//     //       ?.routes || [];
//     //   setItems(selectedRoutes);

//     // }
//      if (requiredPath != "my-chapter" || saveFormData.chapterDetails!=null ) {
//       const selectedRoutes =
//         SidebarRoutes.find((section) => section.name.some((n) => n === requiredPath))
//           ?.routes || [];
//       setItems(selectedRoutes);
//       console.log(selectedRoutes,"phani");
     
//     }
//     else {
//       setItems([])
//     }
//   }, [requiredPath]);

//   return items.length === 0 ? (
//     ""
//   ) : (
//     <div className="h-[100%] min-w-[250px] bg-[#282828] text-gray-400 mt-[100px] mx-[20px] ml-[20px] rounded-xl shadow-lg fixed top-0 left-0">
//       <ul className="space-y-4 py-6">
//         {items.map((item) => (
//           <li
//             key={item.id}
//             className={`flex items-center px-6  h-[40px] rounded-lg cursor-pointer transition-all duration-300 
//               ${
//                 location.pathname === item.path
//                   ? "bg-red-500 text-white"
//                   : "hover:bg-gray-700"
//               }`}
//             onClick={() => navigate(item.path)}
//           >
//             <span className="text-xl">
//               <img src={item.icon} alt={item.label} />
//             </span>
//             <span className="ml-4 text-sm">{item.label}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


const Sidebar = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const requiredPath = location.pathname.slice(1);
  const navigate = useNavigate();
  const saveFormData = JSON.parse(localStorage.getItem("saveFormData"));
  const hideSidebar = localStorage.getItem("hideSidebar") === "true";

  useEffect(() => {
    if (hideSidebar) {
      setItems([]);
      return;
    }

    if (requiredPath !== "my-chapter" || saveFormData?.chapterDetails) {
      const selectedRoutes =
        SidebarRoutes.find((section) => section.name.some((n) => n === requiredPath))
          ?.routes || [];
      setItems(selectedRoutes);
    } else {
      setItems([]);
    }
  }, [requiredPath, hideSidebar]);

  if (hideSidebar) return null; 

  return items.length === 0 ? (
    ""
  ) : (
    <div className="h-[80vh] overflow-scroll scrollbar-hide min-w-[250px] bg-[#282828] text-gray-400 mt-[100px] mx-[20px] ml-[20px] rounded-xl shadow-lg ">
      <ul className="space-y-4 py-6">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-center px-6  h-[40px] rounded-lg cursor-pointer transition-all duration-300 
              ${
                location.pathname === item.path
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-700"
              }`}
            onClick={() => navigate(item.path)}
          >
            <span className="text-xl">
              <img src={item.icon} alt={item.label} />
            </span>
            <span className="ml-4 text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;