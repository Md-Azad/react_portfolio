import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import SideNav from "../SideNav/SideNav";

const Layout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="flex flex-col md:grid md:grid-cols-6 ">
        <SideNav></SideNav>
        <div className=" bg-[#28426c] min-h-screen md:col-span-5 px-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
