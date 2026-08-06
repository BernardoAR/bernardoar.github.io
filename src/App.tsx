import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Certification from "./pages/Certification";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certification" element={<Certification />} />
      </Route>
    </Routes>
  );
}
