import Marquee from "react-fast-marquee";
//
import { getAllSkills } from "../../data/skillsData";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";

const Skills = () => {
  const skills = getAllSkills();

  return (
    <div className="md:min-h-[500px] mt-12">
      <div className="text-center text-3xl text-white  ">
        <h1 className="mb-12 text-6xl font-semibold underline">Skills</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill}></SkillCard>
          ))}
        </div>
      </div>

      <Marquee pauseOnHover="true" className="text-[#7b9ca4]">
        {skills.map((skill) => (
          <h1 key={skill.id} className="mx-12 text-2xl">
            {skill.title}
          </h1>
        ))}
      </Marquee>
      <div className="flex items-center justify-between flex-col md:flex-row font-bold text-white md:mt-8">
        <Link to="/">
          <button className="bg-yellow-600 px-4 py-2 rounded-lg">Home</button>
        </Link>
        <p>Developed By Md Azad Hossain</p>
      </div>
    </div>
  );
};

export default Skills;
