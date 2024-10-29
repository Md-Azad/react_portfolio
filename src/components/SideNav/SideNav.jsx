import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/profile.png";
import { FaBloggerB, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BiSolidCertification } from "react-icons/bi";
import { AiFillExperiment } from "react-icons/ai";
import { HiRocketLaunch } from "react-icons/hi2";

const SideNav = () => {
  return (
    <div className="bg-[#173957]  rounded flex flex-col   md:min-h-screen  ">
      <div className=" px-4 flex gap-4 items-center justify-between md:flex-col">
        <img
          className="my-2 w-12 h-12 md:w-full md:h-full"
          src={profile}
          alt=""
        />

        <div className="flex justify-center gap-6   ">
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
            to="https://github.com/Md-Azad"
            target="_blank"
            id="linkedin"
            rel="noreferrer"
            className="btn   text-[#4795A8]"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link
            to="https://github.com/Md-Azad"
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
      <div className="flex flex-col justify-center items-center md:justify-between md:items-start my-4 mx-4 font-semibold text-xl space-y-4 text-white">
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
          Projects & Skills
        </NavLink>
        <NavLink className="flex gap-4" to="/certificates">
          <BiSolidCertification className="text-4xl" /> Certification
        </NavLink>
        <NavLink className="flex gap-4" to="/blogs">
          <FaBloggerB className="text-4xl" />
          Blogs{" "}
        </NavLink>
      </div>
      <div className="flex justify-center ">
        <NavLink to="/contact">
          <button className="flex gap-2 items-center bg-green-900 px-4 py-1 rounded-md text-white font-semibold">
            <HiRocketLaunch />
            Hire Me
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
