import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="md:h-12 bg-slate-400 text-2xl font-semibold mb-4 flex flex-row-reverse md:flex-row justify-between items-center px-2">
        <h1>Azad&apos;s.Dev</h1>
        <div className="hidden md:flex flex-row gap-4 ">
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/projects">Projects & Skills</NavLink>
          <NavLink to="/certificates">Certification</NavLink>
          <NavLink to="/certificates">Resume </NavLink>
        </div>
        <div className="z-20 md:hidden ">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div
        className={`flex flex-col absolute duration-1000 z-80 ${
          isOpen ? "top-8 left-12" : "-top-72 left-12"
        } bg-slate-600 p-4 rounded-md  md:hidden`}
      >
        <NavLink className="mb-2 bg-yellow-50 p-2 rounded-lg" to="/experience">
          Experience
        </NavLink>
        <NavLink className="mb-2 bg-yellow-50 p-2 rounded-lg" to="/education">
          Education
        </NavLink>
        <NavLink className="mb-2 bg-yellow-50 p-2 rounded-lg" to="/projects">
          Projects & Skills
        </NavLink>
        <NavLink
          className="mb-2 bg-yellow-50 p-2 rounded-lg"
          to="/certificates"
        >
          Certification
        </NavLink>
        <NavLink
          className="mb-2 bg-yellow-50 p-2 rounded-lg"
          to="/certificates"
        >
          Resume{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
