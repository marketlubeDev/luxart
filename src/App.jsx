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

// Loading component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      color: "#f4d300",
    }}
  >
    <div>Loading...</div>
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
      <Suspense fallback={<LoadingSpinner />}>
        <Landing />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Count />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Vector />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Test />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <DetailSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ChooseExpert />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Quote />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <InnovatingSpaces />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <VideoGallery />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NewProjectDetail />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ServicesPage />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
