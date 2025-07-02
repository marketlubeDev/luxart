import { useEffect, Suspense, lazy } from "react";
import "../sass/main.scss";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Lazy load all components
const Header = lazy(() => import("./layout/header"));
const Footer = lazy(() => import("./layout/footer"));
const Landing = lazy(() => import("./page/hero/section/landing"));
const Count = lazy(() => import("./page/hero/section/count"));
const Services = lazy(() => import("./page/hero/section/services"));
const Vector = lazy(() => import("./page/hero/section/vector"));
const Projects = lazy(() => import("./page/hero/section/projects"));
const Test = lazy(() => import("./page/hero/section/Test"));
const ChooseExpert = lazy(() => import("./page/hero/section/ChooseExpert"));
const VideoGallery = lazy(() => import("./page/hero/section/VideoGallery"));
const DetailSection = lazy(() => import("./page/hero/section/DetailSection"));
const InnovatingSpaces = lazy(() =>
  import("./page/hero/section/InnovatingSpaces")
);
const Quote = lazy(() => import("./page/hero/section/Quote"));
const About = lazy(() => import("./page/About/About"));
const ProjectDetail = lazy(() => import("./page/hero/section/ProjectDetail"));
const ServicesPage = lazy(() => import("./page/Services/Services"));
const NewProjectDetail = lazy(() =>
  import("./page/hero/section/newprojectDetail")
);

// Main Loading component
const MainLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#000",
      zIndex: 9999,
    }}
  >
    <div className="loaderComponent"></div>
  </div>
);

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
    <Suspense fallback={<MainLoader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<NewProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
