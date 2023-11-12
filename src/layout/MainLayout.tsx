import { Outlet } from "react-router-dom";
import Navber from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


export default function MainLayout() {
  return (
    <div>
      <Navber />    
       <Outlet />
       <Footer />
    </div>
  )
}
