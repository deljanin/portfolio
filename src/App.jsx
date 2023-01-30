import React, { Suspense, useEffect } from "react";
import "./App.scss";
import ReactGA from "react-ga";
import Loader from "./componentes/site_loader/Loader";
import NavBar from "./componentes/navbar/NavBar";
import Skills from "./sections/skills_section/Skills";
import Projects from "./sections/projects_section/Projects";
import AboutMe from "./sections/about_me_section/AboutMe";
import Contact from "./sections/contact_section/Contact";
import Footer from "./componentes/footer/Footer";
const SphereScene = React.lazy(() =>
  import("./sections/sphere_section/SphereScene")
);
ReactGA.initialize("G-837T3XH949");
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        {/* <Loader /> */}
        <SphereScene />
      </Suspense>
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
