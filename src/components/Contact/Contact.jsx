import { LuPhoneCall } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  return (
    <div className="text-center md:text-justify md:flex  items-center md:gap-12 md:min-h-screen  ">
      <div className="text-white my-12 w-1/2 space-y-4">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <p className="text-xl font-semibold">
          &quot;I am open to collaborating with companies where my skills can
          make a meaningful impact. If you&lsquo;re looking for someone with my
          expertise, please feel free to reach out—or simply say hello!
          👋&quot;.
        </p>
        <p className="flex gap-4 items-center font-semibold">
          <SiGmail className="text-4xl text-red-500" />
          azadh4110@gmail.com(Recommended)
        </p>
        <p className="flex gap-4 items-center font-semibold">
          {" "}
          <LuPhoneCall className="text-4xl text-red-500" />
          +491774044617
        </p>
      </div>
      <div className="my-12 ">
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
      </div>
    </div>
  );
};

export default Contact;
