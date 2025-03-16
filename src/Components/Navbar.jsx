import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Get the current route

  return (
    <div>
      <ul className="nav nav-tabs mt-4">
        <li className="nav-item">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/education" className={`nav-link ${location.pathname === "/education" ? "active" : ""}`}>
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}>
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/experience" className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`}>
            Experience
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
