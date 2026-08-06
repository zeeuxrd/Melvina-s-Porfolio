import React from 'react'
import './Hero.css'

const designResearchTerms = [
  'USER DISCOVERY',
  'BEHAVIORAL SYNTHESIS',
  'USABILITY LABS',
  'PRODUCT STRATEGY',
  'ACCESSIBILITY & WCAG',
  'MIXED METHODS',
  'STAKEHOLDER ALIGNMENT',
  'INFORMATION ARCHITECTURE',
  'HUMAN-CENTERED DESIGN',
  'EVIDENCE-LED STRATEGY',
]

export default function Hero({ onSelectCase }) {
  const handleTickerClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('about') || document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Tripled items for seamless infinite ticker loop
  const tickerSequence = [...designResearchTerms, ...designResearchTerms, ...designResearchTerms]

  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="hero-content">
        {/* Intro line with leading emoji */}
        <p className="hero-intro">
          <span className="hero-intro-emoji" aria-hidden="true">🤟</span>
          Hey, I'm Somtochukwu, obsessed with…
        </p>

        {/* Headline with Inline Highlighted Words */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            Turning complex human{' '}
            <span className="hero-highlight hero-highlight--purple">realities</span>{' '}
            into clear{' '}
            <span className="hero-highlight hero-highlight--pink">decisions</span>{' '}
            that drive change through{' '}
            <span className="hero-highlight hero-highlight--green">research</span>{' '}
            &amp; human-centered design{' '}
            <span className="hero-highlight hero-highlight--orange">strategy</span>.
          </h1>
        </div>

        {/* Call to Action Buttons (Side by Side) */}
        <div className="hero-actions">
          <a
            href="/resume.pdf"
            download="Somtochukwu_UX_Research_Resume.pdf"
            className="hero-cta-btn hero-cta-btn--secondary"
            aria-label="Download Resume"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero-btn-icon">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD RESUME
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
    </section>
  )
}
