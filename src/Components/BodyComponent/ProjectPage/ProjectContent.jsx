import React from 'react'
import ProjectCard from './ProjectCard'
import GithubBtn from './GithubBtn'

function ProjectContent() {
  return (
    <>
    <h3 className="text-center fw-bold">🚀 My Projects</h3>
      <hr className="mb-4" />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Bank Complaining Web Application</h5>
                <p className="card-text">
                    A seamless web application for handling banking issues efficiently. 
                    Users submit complaints, admins review and take action, and super admins oversee escalations. 
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/Bank-Complaining-Web-Appilaction"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>
        
        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Portfolio Website</h5>
                <p className="card-text">
                Built a responsive portfolio using React.js to highlight my education, internship experience, and 
                technical skills, showcasing my growth and passion for full-stack development with a modern, user-friendly design. 
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/Portfolio-v3"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Task Management Web System</h5>
                <p className="card-text">
                An upgraded version of my Bank Complaints Management System, designed for institutions 
                to handle internal complaints efficiently. Enhanced with role-based access and automated email updates.
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/Task-Management-web-system"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Travel Package Booking Web Application</h5>
                <p className="card-text">
                A user-friendly web application showcasing travel packages in Sri Lanka. 
                Explore detailed itineraries, book packages, and manage bookings effortlessly.
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/Travel-Package-Booking-Web-Application"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Loyalty Application Web System</h5>
                <p className="card-text">
                A web-based platform for supermarkets to run promotional loyalty programs. 
                Shoppers register purchases, and admins manage rewards seamlessly.
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/Loyalty-application"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Web-Based Game & Website</h5>
                <p className="card-text">
                A fun interactive Pac-Man-inspired game with six unique levels, built using web technologies. 
                Includes a guide on creating similar games & generating EXE files.
                    <br />
                    <GithubBtn
                      link={"https://dilan032.github.io/WebBased-Game-and-WebSite/"}
                      className={"btn btn-danger btn-sm mt-2 me-2"}
                      btnName={"🎮 PLAY NOW ↗"}
                    />
                    <GithubBtn
                      link={"https://github.com/Dilan032/WebBased-Game-and-WebSite"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">API for Holcemlk Banker Data Entry</h5>
                <p className="card-text">
                A RESTful API for seamless data entry and management in a banking system. 
                Supports customer registration, loan management, and account operations.
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/API-for-holcemlk-banker-dataentry"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">API for Cash Collector Mobile App</h5>
                <p className="card-text">
                A secure Node.js API enabling seamless cash collection transactions with 
                Bearer Token authentication.
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/API-for-Cash-Collector-Mobile-App"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard>
              <h5 className="card-title fw-bold">Banker Images API</h5>
                <p className="card-text">
                A lightweight and secure API for managing customer images and signatures in a banking system.
                    <br />
                    <GithubBtn
                      link={"https://github.com/Dilan032/nanosoft_banker_images_API"}
                      className={"btn btn-outline-primary btn-sm mt-2"}
                      btnName={"GitHub Repo ↗"}
                    />
                </p>
          </ProjectCard>
        </div>


      </div>
    </>
  )
}

export default ProjectContent