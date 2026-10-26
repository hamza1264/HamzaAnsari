import React from "react";
import "./Certificate.css";

export default function Certificates() {
    const certificatesData = [
        {
            id: 1,
            title: "Web & Mobile App Development",
            issuer: "Saylani Mass IT Training (SMIT)",
            description: "Full-stack web and mobile application development training covering modern JavaScript, React.js, Node.js, and database management.",
            year: "sep-2025 - sep-2026"
        },
        {
            id: 2,
            title: "HTML Essentials",
            issuer: "Saylani Welfare International Trust / Cisco Networking Academy",
            description: "Successfully completed HTML Essentials course focusing on semantic HTML structure and web content fundamentals.",
            year: "22 Dec 2025"
        },
        {
            id: 3,
            title: "CSS Essentials",
            issuer: "Saylani Welfare International Trust / Cisco Networking Academy",
            description: "Successfully completed CSS Essentials course covering responsive design, layouts, styling, and modern UI principles.",
            year: "22 Dec 2025"
        },
        {
            id: 4,
            title: "JavaScript Essentials 1",
            issuer: "Saylani Welfare International Trust / Cisco Networking Academy",
            description: "Successfully completed core JavaScript programming fundamentals, logic building, and dynamic web functionality.",
            year: "22 Dec 2025"
        },
        {
            id: 5,
            title: "JavaScript Essentials 1",
            issuer: "Cisco Networking Academy",
            description: "Official Cisco Networking Academy certification for completing JavaScript Essentials 1 programming course.",
            year: "03 Feb 2026"
        },

    ];

    return (
        <section className="certificates-section">
            <div className="certificates-container">

                {/* Header */}
                <div className="certificates-header">
                    <span className="certificates-subtitle">ACHIEVEMENTS</span>
                    <h2 className="certificates-title">My Certificates:</h2>
                </div>

                {/* Vertical Line Timeline List */}
                <div className="certificates-timeline">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="timeline-item">

                            {/* Line Marker Dot */}
                            <div className="timeline-dot"></div>

                            {/* Certificate Item Card */}
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <span className="cert-year">{cert.year}</span>
                                </div>
                                <h4 className="cert-issuer">{cert.issuer}</h4>
                                <p className="cert-description">{cert.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}