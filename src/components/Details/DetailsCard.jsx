import { getProjectImgUrl } from "../../utils/getImgUrl";

const DetailsCard = ({ project }) => {
  console.log(project);
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={getProjectImgUrl(project?.cover)}
          alt={project?.title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {project?.title} </h2>
        <div>
          {project?.tech.map((te, idx) => (
            <button className="text white btn btn-info mx-1" key={idx}>
              {te}
            </button>
          ))}
        </div>

        <p>{project.description}</p>
        <div>
          <h1 className="uppercase underline text-red-700 font-bold">
            challenges During development
          </h1>
          <ul className="text-center">
            {project?.chellanges.map((list, idx) => (
              <li key={idx}>
                {" "}
                {idx + 1}. {list}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between  w-1/4">
          <a href={project.live} target="_blank">
            <button className="btn btn-accent mt-8 text-white rounded-lg">
              Live View
            </button>
          </a>
          <a href={project.github} target="_blank">
            <button className="btn bg-black-400 btn-outline mt-8 text-white  rounded-lg">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
