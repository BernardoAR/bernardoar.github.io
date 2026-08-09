import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import useScrollRouting from "./hooks/useScrollRouting";

export default function App() {
  useScrollRouting();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<Layout />} />
        <Route path="/project" element={<Layout />} />
        <Route path="/experience" element={<Layout />} />
        <Route path="/certification" element={<Layout />} />
        <Route path="/contact" element={<Layout />} />
      </Route>
    </Routes>
  );
}
