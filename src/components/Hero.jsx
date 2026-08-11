import React from 'react'
import './Hero.css'
import { heroPictureCards, designResearchTerms } from '../data/heroData'

export default function Hero({ onSelectCase }) {
  const handleTickerClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('about') || document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Tripled items for seamless infinite ticker loop
  const tickerSequence = [...designResearchTerms, ...designResearchTerms, ...designResearchTerms]
  const cardSequence = [...heroPictureCards, ...heroPictureCards, ...heroPictureCards]

  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="hero-content">
        {/* Intro line with leading emoji */}
        <p className="hero-intro">
          <span className="hero-intro-emoji" aria-hidden="true">🤟</span>
          Hey, I'm Somtochukwu, obsessed with…
        </p>

        {/* Headline Display Text */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            Turning complex human realities into clear decisions through human-centered design.
          </h1>
        </div>

        {/* Call to Action Buttons (Side by Side) */}
        <div className="hero-actions">
          <a
            href="https://drive.google.com/file/d/1EDx117Iq4XFWd_x52wbF-NuhxMNx_t8c/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-btn hero-cta-btn--secondary"
            aria-label="View Resume"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero-btn-icon">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            VIEW RESUME
          </a>

          <a
            href="mailto:okechukwugentlesomto@gmail.com"
            className="hero-cta-btn hero-cta-btn--primary"
            aria-label="Get in Touch"
          >
            GET IN TOUCH
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero-btn-icon">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Polaroid Photo Cards matching About section styling */}
        <div className="hero-picture-row">
          <div className="hero-picture-track">
            {cardSequence.map((card, idx) => (
              <div key={`${card.id}-${idx}`} className="hero-picture-card" style={{ '--rot': card.rot }}>
                <div className="tape-accent" />
                <img src={card.img} alt="UX Research Photo" className="hero-picture-img" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        {/* Edge Scroll Ticker for Design & Research Focus Areas */}
        <div className="hero-ticker-wrapper" aria-label="Design and research focus area ticker">
          <div className="hero-ticker-track">
            {tickerSequence.map((term, idx) => (
              <a
                key={`${term}-${idx}`}
                href="#about"
                className="hero-ticker-item"
                onClick={handleTickerClick}
              >
                <span className="hero-ticker-title">{term}</span>
                <span className="hero-ticker-dot" aria-hidden="true">✦</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
