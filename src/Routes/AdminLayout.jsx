import Sidebar from "../Pages/Navbar/AdminSideBar";
import AppRoutes from "./AppRoutes";
import AdminNavbar from "../Pages/Navbar/AdminNavBar";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="  relative flex bg-[#f6f6f6]">
        <Sidebar />
        <AppRoutes />
      </div>
    </div>
  );
};

export default AdminLayout;
