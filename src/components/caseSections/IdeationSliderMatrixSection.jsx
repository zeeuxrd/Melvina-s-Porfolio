import React from 'react'

export default function IdeationSliderMatrixSection({ caseId }) {
  return (
    caseId === 'case-02' ? (
      <div className="verse-ideation-flow-container">
        {/* 4-Step Process Pipeline Grid */}
        <div className="flow-pipeline-grid">
          
          {/* Step 01: Soft Periwinkle Blue */}
          <div className="flow-step-col">
            <div className="flow-node-wrapper">
              <div className="flow-top-icon icon-bg--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </div>
              <div className="flow-aura-ring aura--blue">
                <div className="flow-center-dot" />
              </div>
            </div>
            <div className="flow-step-content">
              <span className="flow-step-num">Step 01</span>
              <h4 className="flow-pillar-title">Single Intake Form</h4>
              <p className="flow-pillar-desc">
                Unified 6 portal log-ins into one single-screen credit intake form.
              </p>
            </div>
          </div>

          {/* Step 02: Soft Lime Green */}
          <div className="flow-step-col">
            <div className="flow-node-wrapper">
              <div className="flow-top-icon icon-bg--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="flow-aura-ring aura--green">
                <div className="flow-center-dot" />
              </div>
            </div>
            <div className="flow-step-content">
              <span className="flow-step-num">Step 02</span>
              <h4 className="flow-pillar-title">Eligibility Badges</h4>
              <p className="flow-pillar-desc">
                Mapped lender approval rules into instant visual fit indicators.
              </p>
            </div>
          </div>

          {/* Step 03: Soft Golden Butter / Amber */}
          <div className="flow-step-col">
            <div className="flow-node-wrapper">
              <div className="flow-top-icon icon-bg--amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <div className="flow-aura-ring aura--amber">
                <div className="flow-center-dot" />
              </div>
            </div>
            <div className="flow-step-content">
              <span className="flow-step-num">Step 03</span>
              <h4 className="flow-pillar-title">Live Status Feedback</h4>
              <p className="flow-pillar-desc">
                Designed real-time progress indicators, easing customer anxiety.
              </p>
            </div>
          </div>

          {/* Step 04: Soft Blush Pink */}
          <div className="flow-step-col">
            <div className="flow-node-wrapper">
              <div className="flow-top-icon icon-bg--pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <div className="flow-aura-ring aura--pink">
                <div className="flow-center-dot" />
              </div>
            </div>
            <div className="flow-step-content">
              <span className="flow-step-num">Step 04</span>
              <h4 className="flow-pillar-title">Fast Contract Review</h4>
              <p className="flow-pillar-desc">
                Auto-filled complex disclosure forms, cutting deal time to 16 mins.
              </p>
            </div>
          </div>

        </div>
      </div>
    ) : (
      <div className="ideation-slider-container">
        {/* Top Header Row with Title & Lime Badge */}
        <div className="ideation-slider-header">
          <h3 className="ideation-slider-title">User Research &amp; Co-Design Outcomes</h3>
        </div>

        {/* 3-Column Metric Progress Slider Matrix */}
        <div className="ideation-slider-grid">
          
          {/* Column 1 */}
          <div className="slider-col">
            <div className="slider-track-wrap">
              <div className="slider-pill-bar gradient-coral-yellow">
                <div className="slider-pill-fill" style={{ width: '88%' }} />
                <div className="slider-pill-rest" style={{ width: '12%' }} />
              </div>
            </div>
            <div className="slider-stat-group">
              <span className="slider-stat-num">88<span className="slider-stat-unit">%</span></span>
              <p className="slider-stat-desc">
                of nursing mothers preferred 5-to-15 minute energy-matched micro-stretches over fixed 45-minute workouts.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="slider-col">
            <div className="slider-track-wrap">
              <div className="slider-pill-bar gradient-yellow-green">
                <div className="slider-pill-fill" style={{ width: '64%' }} />
                <div className="slider-pill-rest" style={{ width: '36%' }} />
              </div>
            </div>
            <div className="slider-stat-group">
              <span className="slider-stat-num">64<span className="slider-stat-unit">%</span></span>
              <p className="slider-stat-desc">
                reduction in self-reported post-natal guilt after replacing daily streak counters with flexible weekly rest targets.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="slider-col">
            <div className="slider-track-wrap">
              <div className="slider-pill-bar gradient-blue-green">
                <div className="slider-pill-fill" style={{ width: '95%' }} />
                <div className="slider-pill-rest" style={{ width: '5%' }} />
              </div>
            </div>
            <div className="slider-stat-group">
              <span className="slider-stat-num">95<span className="slider-stat-unit">%</span></span>
              <p className="slider-stat-desc">
                safety confidence score during Obstetric &amp; Diastasis Recti co-design workshops with healthcare specialists.
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  )
}
