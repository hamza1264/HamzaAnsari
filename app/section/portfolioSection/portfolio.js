"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/Data/projectData";
import "./portfolio.css";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  // Category ke hisab se projects filter karna
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.badge.toLowerCase() === filter.toLowerCase());

  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        
        {/* Header & Filter Buttons */}
        <div className="portfolio-header">
          <span className="portfolio-subtitle">PROJECTS</span>
          <h1 className="portfolio-title">My Creations:</h1>

          <div className="filter-buttons">
            {["All", "Frontend", "Backend", "FullStack"].map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <Link href={project.link} target="_blank" key={project.id} className="project-card-link">
              <div className="project-card">
                
                {/* Badge */}
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

      </div>
    </main>
  );
}