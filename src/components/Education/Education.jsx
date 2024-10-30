import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="text-white font-bold text-3xl text-center py-8 space-y-4">
        <h1 data-aos="fade-up-left" data-aos-once="false">
          Education
        </h1>
        <div
          className="h-[1px] bg-white w-3/12 mx-auto"
          data-aos="fade-up-right"
          data-aos-once="false"
        ></div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="text-white font-bold  py-8 space-y-2">
          <h1 className="text-3xl">Master&apos;s in Digital Transformation</h1>
          <h2 className="text-xl">Fachhochschule Dortmund</h2>
          <p className="">October,2021 - Ongoing</p>
          <h1 className="underline">
            <em>Core courses</em>
          </h1>
          <ul className="space-y-4 text-xl text-purple-600 ">
            <li>-Advance Web Engineering</li>
            <li>-Research and Development</li>
            <li>-Software Innovative Solution</li>
            <li>-Usability Engineering</li>
          </ul>
          <p className="text-justify font-normal">
            <span className="text-red-800 font-bold text-xl">S</span>o far in my
            Master&apos;s course I have learned about modern software
            development technologies. For example, desiging archetecture,
            demontrating development processes by UML. In R&D course I learned
            how a product is developed according to the need of current market
            and user&apos;s.I gained knowledge with usability engineering.
          </p>
        </div>
        <div className="text-white font-bold  py-8 space-y-2">
          <h1 className="text-3xl">Computer Science and Engineering</h1>
          <h2 className="text-xl">City University</h2>
          <p>March,2016 - Jul 2020</p>
          <h1 className="underline">
            <em>Core courses</em>
          </h1>
          <ul className="space-y-4 text-xl text-purple-600 ">
            <li>-OOP programming</li>
            <li>-Data Structure</li>
            <li>-Algorithm</li>
            <li>-Database</li>
          </ul>
          <p className="text-justify font-normal">
            <span className="text-red-800 font-bold text-xl">I</span>n my
            bachelor&apos;s course I did a thesis on{" "}
            <span className="text-yellow-400">
              &quot;Drug Addiction Reasons Using Data Analysis and Machine
              Learning&quot;
            </span>
            . Developed a{" "}
            <span className="text-yellow-400">
              &quot;Find Your Blood Donor&quot;
            </span>{" "}
            website with Python and React for donor connections. Served as
            General Secretary of the City University Programming Club, promoting
            coding skills. Participated in programming contests, enhancing
            algorithmic thinking and coding efficiency.
          </p>
        </div>
      </div>
      <div className="flex">
        <Link to="/">
          <button className="bg-yellow-600 px-4 py-2 rounded-lg">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Education;
