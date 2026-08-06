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
                West Africa<br />
                Maternal Health<br />
                Scope 2025
              </h3>
              <p className="phone-hero-subtitle">
                Hosted by DODO Team
              </p>
              <p className="phone-hero-desc">
                A 12-week research program studying postpartum recovery, sleep fragmentation, and app abandonment across 8 urban hubs.
              </p>
            </div>
            <div className="phone-bottom-badge">
              <span className="phone-tag">8 URBAN HUBS</span>
              <p className="phone-tag-sub">Lagos • Accra • Abidjan • Dakar</p>
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
              <span className="phone-tag phone-tag--dark">CORE RESEARCH PROBLEM</span>
              <h3 className="phone-stat-headline">78% 14-Day App Churn</h3>
              <p className="phone-statement-desc">
                Rigid daily streak counters triggered emotional guilt among postpartum mothers. Fixed workout goals ignored sleep fragmentation, physical recovery timelines, and infant feeding demands.
              </p>
            </div>
            <div className="phone-bottom-badge phone-bottom-badge--pink">
              <span className="phone-tag-sub-dark">KEY DESIGN DIRECTION</span>
              <p className="phone-tag-sub-desc">Zero-Guilt Adaptive Micro-Routines &amp; Energy-Based Pacing</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
