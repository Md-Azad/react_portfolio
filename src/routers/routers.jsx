import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/Contact/Contact";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <About></About>,
      },
      {
        path: "/experience",
        element: <Experience></Experience>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/certificates",
        element: <Skills></Skills>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
