import { FaNode, FaReact } from "react-icons/fa";
import "./About.css";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-col-1 md:grid-cols-2 pt-8  ">
        <div className="text-white space-y-4">
          <h1 className="text-4xl font-bold">Md Azad Hossain</h1>
          <h1 className="text-2xl font-bold">Full-Stack Web Developer</h1>
          <p className="text-justify font-semibold">
            A passionate full-stack developer with a flair for crafting dynamic
            websites using React and Next.js, ensuring exceptional user
            experiences and robust, scalable applications. Eager to tackle
            challenges and stay at the forefront of front-end trends, bringing a
            blend of creativity and technical expertise to every project. Thank
            you for visiting my profile; let’s connect and explore exciting
            opportunities for collaboration that can drive success together!
            Thanks for visiting me. 😊
          </p>
          <div className="flex">
            <Link to="/projects">
              <button className="btn btn-info text-white text-sm rounded-md mr-4">
                See Projects
              </button>
            </Link>

            <button className="btn btn-success ml-4 text-white">
              <a href="../assets/cv.pdf" download="Azad_Resume.pdf">
                Download Resume
              </a>
            </button>
          </div>
          {/* <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1GIowCdnoLKGpKOQW1EXuwv0lP2LXINNx/view?usp=sharing",
                "_blank"
              )
            }
            className="bg-green-600 px-4 py-2 rounded-md"
          >
            View Resume
          </button> */}
        </div>
        <div className="">
          <div className="flex justify-center gap-8 ">
            <FaReact className="text-9xl text-blue-700" />
            <SiExpress className="text-9xl text-gray-600" />
          </div>

          <div className="flex justify-center">
            <SiNextdotjs className="text-7xl text-black" />
          </div>
          <div className="flex justify-center gap-8 ">
            <DiMongodb className="text-9xl text-green-700" />
            <FaNode className="text-9xl text-white" />
          </div>
        </div>
      </div>
      <div className="h-1 bg-white"></div>
      <div className="text-white spacey-2">
        <h1 className="text-2xl font-bold">What I Do</h1>
        <h2 className="text-xl font-semibold">
          Here&apos;s what I do as a Full-Stack developer.
        </h2>
        <div className="space-y-2">
          <p>
            🚀 <span className="font-semibold">Craft Stunning Websites:</span> I
            bring your digital vision to life with user-friendly interfaces.
          </p>
          <p>
            🎨 <span className="font-semibold">Making Great Websites:</span> I
            handle everything from start to finish, so your site looks amazing
            and runs smoothly.
          </p>
          <p>
            {" "}
            💻 <span className="font-semibold">Making Great Websites:</span>
            Tech Mastery: I&apos;m fluent in JavaScript, React, Next.js,
            Node.js, MongoDB, and more, to create magic on the web.
          </p>
          <p>
            🤝 <span className="font-semibold">Team Player:</span> I play well
            with others, making teamwork easy and fun.
          </p>
          <p className="font-semibold">
            {" "}
            🏃‍♂️ Ready to start a project? Check out my portfolio and let&apos;s
            chat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
