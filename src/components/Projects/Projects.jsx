import { getAllProjects } from "../../data/ProjectsData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const projects = getAllProjects();

  return (
    <div className="mt-12 pb-12 z-10 ">
      <div className="flex justify-start mt-4">
        <Link to="/">
          <button className="bg-yellow-600 px-4 py-2 rounded-lg">Home</button>
        </Link>
      </div>
      <h1
        data-aos="fade-up-right"
        data-aos-once="false"
        className="text-center text-white font-bold text-3xl mb-4 "
      >
        Projects
      </h1>
      <div className="mx-auto w-1/4 bg-red-700 h-[2px] mb-4"></div>
      <div className=" grid md:grid-cols-3 gap-4 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
