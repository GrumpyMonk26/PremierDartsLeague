import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Rules from "./pages/Rules";
import Fixtures from "./pages/Fixtures";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/fixtures" element={<Fixtures />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
