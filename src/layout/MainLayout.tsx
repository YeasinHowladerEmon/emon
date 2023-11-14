import { Outlet } from "react-router-dom";
import Navber from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Fragment } from "react";


export default function MainLayout() {
  return (
    <Fragment>
      <Navber />    
       <Outlet />
       <Footer />
    </Fragment>
  )
}
