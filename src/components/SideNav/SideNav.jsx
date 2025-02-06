import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/profile.png";
import { FaBloggerB, FaGithub, FaHamburger, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BiSolidCertification } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";
import { HiRocketLaunch } from "react-icons/hi2";
import { useState } from "react";

const SideNav = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="bg-[#173957]  w-full rounded flex flex-col   md:min-h-screen  ">
      <div className=" px-4 flex gap-4 items-center justify-between md:flex-col">
        <img
          className="my-2 w-12 h-12 md:w-full md:h-full"
          src={profile}
          alt=""
        />

        <div className="md:hidden lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <button onClick={() => setShow((prev) => !prev)}>
                <FaHamburger></FaHamburger>
              </button>
            </div>
            {show && (
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100  rounded-box z-[1] w-60 space-y-3 p-2 shadow"
              >
                <li className="">
                  <NavLink className="flex gap-4" to="/experience">
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex gap-4" to="/education">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" flex gap-4" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex gap-4" to="/certificates">
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex gap-4" to="/blogs">
                    Blogs{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="flex gap-4">
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className=" hidden md:flex justify-center gap-6   ">
          <Link
            to="https://github.com/Md-Azad"
            target="_blank"
            rel="noreferrer"
            id="github"
            className="btn  text-[#4795A8]"
          >
            <FaGithub className="text-4xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/md-azad-hossain1/"
            target="_blank"
            id="linkedin"
            rel="noreferrer"
            className="btn   text-[#4795A8]"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link
            to="https://codeforces.com/profile/azadh4110"
            target="_blank"
            rel="noreferrer"
            id="codeforces"
            className="btn   text-[#4795A8]"
          >
            <SiCodeforces className="text-4xl" />
          </Link>

          <Tooltip
            anchorSelect="#github"
            place="top"
            content="GitHub Profile"
          />
          <Tooltip
            anchorSelect="#linkedin"
            place="top"
            content="linkedin Profile"
          />
          <Tooltip
            anchorSelect="#codeforces"
            place="top"
            content="codeforces Profile"
          />
        </div>
      </div>

      <div className="hidden  md:flex flex-col justify-center items-center md:justify-between md:items-start my-4 mx-4 font-semibold text-xl space-y-4 text-white">
        <NavLink className="flex gap-4" to="/experience">
          <AiFillExperiment className="text-4xl" />
          Experience
        </NavLink>
        <NavLink className="flex gap-4" to="/education">
          <MdCastForEducation className="text-4xl" />
          Education
        </NavLink>
        <NavLink className=" flex gap-4" to="/projects">
          <GiSkills className="text-4xl" />
          Projects
        </NavLink>
        <NavLink className="flex gap-4" to="/certificates">
          <BiSolidCertification className="text-4xl" /> Skills
        </NavLink>
        <NavLink className="flex gap-4" to="/blogs">
          <FaBloggerB className="text-4xl" />
          Blogs{" "}
        </NavLink>
        <NavLink to="/contact">
          <button className="flex gap-2 items-center bg-green-900 px-4 py-1 rounded-md text-white font-semibold">
            <HiRocketLaunch />
            Contact Me
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
