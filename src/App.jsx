import { useState } from "react";
import "../sass/main.scss";
import Header from "./layout/header";
import "./App.css";
import Landing from "./page/hero/section/landing";
import Count from "./page/hero/section/count";
import Services from "./page/hero/section/services";
import Vector from "./page/hero/section/vector";
import Projects from "./page/hero/section/projects";
import Testimonials from "./page/hero/section/testimonials";
import ChooseExpert from "./page/hero/section/ChooseExpert";
import VideoGallery from "./page/hero/section/VideoGallery";
import DetailSection from "./page/hero/section/DetailSection";
import Footer from "./layout/footer";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <Count />
      <Services />
      <Vector />
      <Projects />
      <Testimonials />
      <DetailSection />
      <ChooseExpert />
      <VideoGallery />
      <Footer />
    </>
  );
}

export default App;
