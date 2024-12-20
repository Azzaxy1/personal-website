import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CertificatePage from "./pages/CertificatePage";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/certification" element={<CertificatePage />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

