import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
