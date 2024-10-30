import { useEffect } from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import Aos from "aos";

const SkillCard = ({ skill }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className=" mx-auto  flex flex-col "
    >
      <div
        className={`${
          skill.title === "Next.js" ? "text-red-500" : ""
        }w-[80px] h-[80px] mx-auto mb-6`}
      >
        <img className="w-full h-full" src={getImgUrl(skill.cover)} alt="" />
      </div>
      <h1 className="text-[#3d8b9e]">{skill.title}</h1>
    </div>
  );
};

export default SkillCard;
