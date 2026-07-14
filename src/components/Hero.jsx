import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Section">
      {/* Visual background accents (solid color geometric accents, no gradients) */}
      <div className="hero-grid-accent" aria-hidden="true"></div>
      
      <div className="hero-content">
        {/* Name / Display Section */}
        <h1 className="hero-title">
          <span className="hero-first-name">Somtochukwu</span>
        </h1>

        {/* Subheading / Specialization Statement */}
        <h2 className="hero-subtitle">
          UX Researcher & HCD Strategist
        </h2>

        {/* Short outcome-focused positioning description */}
        <p className="hero-description">
          I help product teams understand user needs deeply—and translate those insights into measurable business outcomes, reducing product friction and increasing retention.
        </p>

        {/* Interactive Call to Actions (CTAs) */}
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary" id="btn-view-work">
            View Case Studies
          </a>
          <a href="/resume.pdf" className="btn btn-secondary" id="btn-download-resume" download>
            Download Resume
          </a>
        </div>

        {/* Credibility / Worked-with Brands Section */}
        <div className="hero-brands-container">
          <p className="hero-brands-title">brands i've worked with</p>
          <div className="hero-brands-grid">
            
            {/* Indeed Logo (Typographic SVG, solid white) */}
            <div className="brand-logo" aria-label="Indeed">
              <svg viewBox="0 0 200 60" fill="currentColor" className="brand-svg">
                <text x="10" y="42" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="36" letterSpacing="-1">
                  indeed
                </text>
                <circle cx="150" cy="20" r="6" fill="var(--accent-color)" />
              </svg>
            </div>

            {/* Deloitte Logo (Typographic SVG with iconic period, solid white & cyan period) */}
            <div className="brand-logo" aria-label="Deloitte">
              <svg viewBox="0 0 200 60" fill="currentColor" className="brand-svg">
                <text x="10" y="42" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="34" letterSpacing="-1">
                  Deloitte
                </text>
                <circle cx="156" cy="38" r="6" fill="var(--accent-color)" />
              </svg>
            </div>

            {/* RBC Royal Bank Logo (Stylized shield & text, solid white) */}
            <div className="brand-logo" aria-label="RBC Royal Bank">
              <svg viewBox="0 0 200 60" fill="currentColor" className="brand-svg">
                {/* Shield Icon */}
                <path d="M20 15 H40 V35 C40 42, 30 47, 30 47 C30 47, 20 42, 20 35 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                <path d="M26 21 H34 V29 C34 32, 30 35, 30 35 C30 35, 26 32, 26 29 Z" fill="var(--accent-color)" />
                {/* Text */}
                <text x="52" y="40" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="28" letterSpacing="0">
                  RBC
                </text>
              </svg>
            </div>

            {/* Hyundai Logo (Stylized H inside oval, solid white) */}
            <div className="brand-logo" aria-label="Hyundai">
              <svg viewBox="0 0 200 60" fill="currentColor" className="brand-svg">
                {/* Oval */}
                <ellipse cx="40" cy="30" rx="30" ry="18" fill="none" stroke="currentColor" strokeWidth="4" />
                {/* Stylized slanted H */}
                <path d="M30 20 L34 40 M30 30 L46 30 M42 20 L46 40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <text x="82" y="41" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="24" letterSpacing="2">
                  HYUNDAI
                </text>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
