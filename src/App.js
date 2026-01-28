import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Design from "./components/Design";
import Skills from "./components/skills";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="main-area">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/design" element={<Design />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
