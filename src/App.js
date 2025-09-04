import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import IndustryPartners from "./Pages/IndustryPartners";
import Solutions from "./Pages/Solutions";
import "./App.css";
import Services from "./Pages/Services";
import Home from "./Components/Home";
import Leadership from "./Pages/Leadership";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/partners" element={<IndustryPartners />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
