import { useEffect } from "react";
import "../sass/main.scss";
import Header from "./layout/header";
import "./App.css";
import Landing from "./page/hero/section/landing";
import Count from "./page/hero/section/count";
import Services from "./page/hero/section/services";
import Vector from "./page/hero/section/vector";
import Projects from "./page/hero/section/projects";
import Test from "./page/hero/section/Test";
import ChooseExpert from "./page/hero/section/ChooseExpert";
import VideoGallery from "./page/hero/section/VideoGallery";
import DetailSection from "./page/hero/section/DetailSection";
import InnovatingSpaces from "./page/hero/section/InnovatingSpaces";
import Footer from "./layout/footer";
import Quote from "./page/hero/section/Quote";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./page/About/About";
import ProjectDetail from "./page/hero/section/ProjectDetail";
import ServicesPage from "./page/Services/Services";
import NewProjectDetail from "./page/hero/section/newprojectDetail";

// Home component containing all the main landing page sections
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo === "testimonials") {
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Landing />
      <Count />
      <Services />
      <Vector />
      <Projects />
      <Test />
      <DetailSection />
      <ChooseExpert />
      <Quote />
      <InnovatingSpaces />
      <VideoGallery />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<NewProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
