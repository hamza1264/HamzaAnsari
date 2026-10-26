import React from "react";
import "./Expertise.css";

export default function Expertise() {
    const expertiseData = [
        {
            id: 1,
            title: "Frontend Development",
            description:
                "Skilled in crafting interactive, high-performance user interfaces using React.js, Next.js, Redux Toolkit (RTK), and Tailwind CSS. I focus on building clean, mobile-first responsive layouts that deliver excellent user experiences across all devices.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 11-1.5-1.5" />
                    <path d="M14.5 7.5 16 9" />
                    <path d="m3 21 3.5-3.5" />
                    <path d="M14.5 3.5a2.12 2.12 0 0 1 3 3L6 18l-4 1 1-4Z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Backend Development",
            description:
                "Experienced in building RESTful APIs and real-time backend services using Node.js, Express, and Socket.io. Proficient in database management using Mongoose for MongoDB and Sequelize for PostgreSQL, ensuring secure and scalable server architectures.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M10 13a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1" />
                    <path d="M14 13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Full Stack & DevOps",
            description:
                "Proficient in end-to-end MERN & Next.js development. I handle full-stack workflows including JWT authentication, real-time chat, dashboard platforms, application containerization with Docker, and automated deployments on Vercel, Netlify, and Firebase.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5" />
                    <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="expertise-section">
            <div className="expertise-container">

                {/* Header */}
                <div className="expertise-header">
                    <span className="expertise-subtitle">OFFERINGS</span>
                    <h2 className="expertise-title">My Expertise:</h2>
                </div>

                {/* Cards Grid */}
                <div className="expertise-grid">
                    {expertiseData.map((item) => (
                        <div key={item.id} className="expertise-card-wrapper">
                            {/* Card Body */}
                            <div className="expertise-card">

                                {/* Top Icon */}
                                <div className="card-icon">
                                    {item.icon}
                                </div>

                                {/* Title & Description */}
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-description">{item.description}</p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}