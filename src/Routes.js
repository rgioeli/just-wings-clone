import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
