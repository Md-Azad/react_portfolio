import { FaEye } from "react-icons/fa";
import { getProjectImgUrl } from "../../utils/getImgUrl";
import PropTypes from "prop-types";
import Aos from "aos";
import { useEffect } from "react";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="flex flex-col justify-center border p-4 rounded-md "
      data-aos="flip-down"
      data-aos-once="false"
    >
      <div
        className="relative w-full h-48 rounded-md overflow-hidden border"
        style={{
          backgroundImage: `url(${getProjectImgUrl(project.cover)})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
          <FaEye className="text-7xl" />
          <p>{project.title}</p>

          <button className="bg-green-900 mt-12 px-4 py-2 rounded-lg">
            Details
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <a href={project.live} target="_blank">
          <button className="text-white font-bold bg-green-400 mt-12 px-4 py-2 rounded-lg">
            Live View
          </button>
        </a>
        <a href={project.github} target="_blank">
          <button className="text-white font-bold bg-green-400 mt-12 px-4 py-2 rounded-lg">
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
