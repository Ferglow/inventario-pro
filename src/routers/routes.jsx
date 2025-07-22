import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../index";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
