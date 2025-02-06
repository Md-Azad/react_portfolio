import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
const Layout = () => {
  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <SideNav></SideNav>
        </div>
        <div className=" bg-[#1b2b44] min-h-screen md:col-span-9 px-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
