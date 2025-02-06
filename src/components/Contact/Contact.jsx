import { LuPhoneCall } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div className="md:min-h-screen">
      <div className=" md:text-justify md:flex  items-center md:gap-12   ">
        <div className="text-white my-4 w-full md:my-12  space-y-4 mx-auto md:mx-0 ">
          <h1 className="text-2xl md:text-5xl text-center font-bold">
            Contact Me
          </h1>
          <p className="text-xl font-semibold">
            &quot;I am open to collaborating with companies where my skills can
            make a meaningful impact. If you&lsquo;re looking for someone with
            my expertise, please feel free to reach out or simply say hello!
            👋&quot;.
          </p>
          <div className="flex flex-col items-center  gap-4">
            <div className="space-y-2">
              <p className="flex gap-4 items-center font-semibold">
                <SiGmail className="text-4xl text-red-500" />
                azadh4110@gmail.com
              </p>
              <p className="flex gap-4 items-center font-semibold">
                {" "}
                <LuPhoneCall className="text-4xl text-red-500" />
                +491774044617 (call or whatsapp)
              </p>
            </div>
          </div>
        </div>
        {/* <div className="my-12 ">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Web Development",
              1000,
              "Frontend",
              1000,
              "Backend",
              1000,
              "Full-Stack",
            ]}
            speed={50}
            style={{ fontSize: "2.5em", color: "white" }}
            repeat={Infinity}
          />
        </div> */}
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

export default Contact;
