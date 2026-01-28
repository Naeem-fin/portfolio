import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger (mobile only) */}
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        ☰
      </div>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Md. Mamunur Rahman</h2>

        <nav>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/education" onClick={() => setIsOpen(false)}>Academic Background</NavLink>
          <NavLink to="/research" onClick={() => setIsOpen(false)}>Undergraduate Research</NavLink>
          <NavLink to="/publications" onClick={() => setIsOpen(false)}>Publication</NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>Technical & Software Skills</NavLink>
          <NavLink to="/design" onClick={() => setIsOpen(false)}>CAD Portfolio</NavLink>
          <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Me</NavLink>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
