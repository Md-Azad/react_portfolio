import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="text-white text-xl font-bold md:text-3xl text-center py-8 space-y-4">
        <h1 data-aos="fade-up-left" data-aos-once="false">
          Experience
        </h1>
        <div
          className="h-[1px] bg-white w-3/12 mx-auto"
          data-aos="fade-up-right"
          data-aos-once="false"
        ></div>
      </div>
      <div
        className="text-white py-8 space-y-4 flex flex-col justify-center items-center md:justify-start md:items-start"
        data-aos="zoom-in-up"
      >
        <div className="font-bold">
          <h1 className="md:text-4xl font-bold">Frontend Web Developer</h1>
          <p className="text-xl font-semibold">
            Company:{" "}
            <a
              className="text-yellow-700"
              href="https://tizensolutions.co.uk/"
              target="_blank"
            >
              tizensolutions
            </a>
          </p>
          <p>Location: London, UK.</p>
          <p>Mode: Remote</p>
          <p className="text-xl">Jan 2022 - Dec 2022</p>
        </div>
        <p className="underline text-xl">
          <em>Responsibilities:</em>
        </p>
        <ul className="text-2xl">
          <li>
            - Led feature development for &quot;Furniture Mart&quot; web
            platform to enhance usability.
          </li>
          <li>
            - Built responsive, visually appealing interfaces using React,
            Next.js, and Tailwind CSS.
          </li>
          <li>
            - Improved agile workflows by contributing to daily stand-ups and
            biweekly sprints.
          </li>
        </ul>
        <p className="underline text-xl">
          <em>Technologies:</em>
        </p>
        <div className="text-xl font-semibold flex flex-col gap-2 md:flex-row">
          <button className="mr-2 p-2 bg-green-400 rounded-md">React.js</button>
          <button className="mr-2 p-2 bg-green-400 rounded-md">
            TypeScript
          </button>
          <button className="mr-2 p-2 bg-green-400 rounded-md">
            JavaScript
          </button>

          <button className="mr-2 p-2 bg-green-400 rounded-md">
            GitHub CI/CD
          </button>

          <button className="mr-2 p-2 bg-green-400 rounded-md">
            Responsiveness
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row font-bold text-white">
        <Link to="/">
          <button className="bg-yellow-600 px-4 py-2 rounded-lg">Home</button>
        </Link>
        <p>Developed By Md Azad Hossain</p>
      </div>
    </div>
  );
};

export default Experience;
