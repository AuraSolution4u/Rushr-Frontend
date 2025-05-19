import Sidebar from '../Pages/Navbar/SideNavBar'
import LoginNavBar from '../Pages/Navbar/LoginNavBar'
import AppRoutes from './AppRoutes'

const UserLayout = () => {
  return (
    <div>
        <LoginNavBar/>
        <div className=' relative flex bg-[#f6f6f6]'>
        <Sidebar />
      
        <AppRoutes/>
        </div>
        
    </div>
  )
}

export default UserLayout