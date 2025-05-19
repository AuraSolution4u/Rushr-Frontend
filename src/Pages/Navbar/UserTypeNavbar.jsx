import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavBar"
import LoginNavBar from "./LoginNavBar";
import Navbar from "./Navbar";



export const UserTypeNavbar = () => {
    
    const userType= localStorage.getItem("userType")


    switch( userType){
        case "Super Admin":
            return <AdminNavbar/> 
        case "Alumini":
        case "Student":
            return <LoginNavBar/>
        default:
            return <Navbar/>

    }


}


export const handleSignOut=(navigate)=>{
    
   
    localStorage.removeItem("userType")
    localStorage.removeItem("is_auth")
    setTimeout(() => {
        navigate("/login");
      }, 100);
   
}