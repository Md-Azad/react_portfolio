import { useParams } from "react-router-dom";
import { getAllProjects } from "../../data/data";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const { id } = useParams();

  const projects = getAllProjects();
  const singleProject = projects.find(
    (project) => project?.id === parseInt(id)
  );

  return (
    <div>
      <DetailsCard project={singleProject} />
    </div>
  );
};

export default Details;
