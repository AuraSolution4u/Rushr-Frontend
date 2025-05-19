
import AppRoutes from "./AppRoutes";

import Navbar from "../Pages/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="  relative flex  justify-center">
        <AppRoutes />
      </div>
    </div>
  );
};

export default Layout;
