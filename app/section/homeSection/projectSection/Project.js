
"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/Data/projectData";
import "./project.css";

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-header">
          <span className="projects-subtitle">PROJECTS</span>
          <h2 className="projects-title">My Creations:</h2>
        </div>

        {/* 3 Cards Grid (Showing only first 3 projects) */}
        <div className="projects-grid">
          {projectsData.slice(0, 3).map((project) => (
            <Link href={project.link} target="_blank" key={project.id} className="project-card-link">
              <div className="project-card">

                {/* Badge (Ab image se uper alag show hoga) */}
                <span className="project-badge">{project.badge}</span>

                {/* Card Image Container */}
                <div className="card-image-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Card Info */}
                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Button to Profile / All Projects Page */}
        <div className="projects-bottom-btn-wrapper">
          <Link href="/portfolio" className="view-more-btn">
            View All Projects <span className="btn-arrow">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}