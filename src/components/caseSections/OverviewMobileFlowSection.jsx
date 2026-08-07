import React from 'react'

export default function OverviewMobileFlowSection({ data }) {
  return (
    <div className="overview-story-flow-container">
      <div className="overview-story-grid">
        
        {/* Card 1: Light Typographic Card */}
        <div className="story-phone story-phone--white">
          <div className="phone-body phone-body--padded">
            <div className="phone-top-content">
              <h3 className="phone-hero-title">
                Design. Mentor. Deliver.
              </h3>
              <p className="phone-hero-subtitle">
                Product Design · 6 Weeks · 2024
              </p>
              <p className="phone-hero-desc">
                A dual-purpose engagement — designing a validated weight loss product for nursing mothers while mentoring three early-career designers through a real-world end-to-end design process.
              </p>
            </div>
            <div className="phone-bottom-badge">
              <span className="phone-tag">SCOPE</span>
              <p className="phone-tag-sub">Product Design · Mentorship · UX Research</p>
            </div>
          </div>
        </div>

        {/* Card 2: Full-Bleed Graphic Card (Middle Position) */}
        <div className="story-phone story-phone--graphic">
          <div className="phone-graphic-wrap">
            <img src={data.overviewCard3Image || data.heroImage} alt="Fitflex Active Lifestyle" className="phone-graphic-img" loading="lazy" decoding="async" />
          </div>
          <div className="phone-graphic-overlay">
            <p className="phone-graphic-quote">Designing health that fits her new reality.</p>
          </div>
        </div>

        {/* Card 3: Vibrant Pink Statement Card */}
        <div className="story-phone story-phone--pink">
          <div className="phone-body phone-body--padded">
            <div className="phone-top-content">
              <h3 className="phone-stat-headline">Research-Driven. Human-Centred.</h3>
              <p className="phone-statement-desc">
                Validate real nursing mother needs through rigorous UX research, then translate findings into a usable, realistic product — while building the next generation of design talent along the way.
              </p>
            </div>
            <div className="phone-bottom-badge phone-bottom-badge--pink">
              <span className="phone-tag-sub-dark">DESIGN APPROACH</span>
              <p className="phone-tag-sub-desc">Secondary Research · User Interviews · Synthesis · Prototyping · Testing</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

