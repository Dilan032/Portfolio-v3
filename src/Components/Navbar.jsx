import React from 'react'

function Navbar() {
  return (
    <div>
        <ul className="nav nav-tabs mt-4">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="./pages/Education.html">Education</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="./pages/Skills.html">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="./pages/Projects.html">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="./pages/Experience.html">Experience</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar