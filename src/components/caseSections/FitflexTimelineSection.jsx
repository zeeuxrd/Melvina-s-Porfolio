import React from 'react'

export default function FitflexTimelineSection() {
  return (
    <div className="fitflex-timeline-container">
      {/* Header Area */}
      <div className="timeline-header-area">
        <span className="timeline-eyebrow-tag">Project timeline &amp; Retrospective</span>

        <h3 className="timeline-headline">
          Every step of our schedule was aimed{' '}
          <span className="inline-badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="#FFF275" />
              <path d="M12 7L16 11L12 15L8 11L12 7Z" fill="#0D0E10" />
            </svg>
          </span>{' '}
          at replacing streak guilt with adaptive routines nursing mothers trust
        </h3>

        <div className="timeline-narrative-block">
          <p>
            We strive not only to deliver rigorous user insights, but also to fundamentally align product mechanics with real maternal energy constraints.
          </p>
          <p>
            Each phase of research carried a mission to optimize habit loops, ensuring our platform is as empowering, supportive, and physical-recovery-safe as possible.
          </p>
        </div>
      </div>

      {/* 3-Tier Escalating Height Cards Row */}
      <div className="timeline-cards-row">
        {/* Card 1: Strategy (1 Week) */}
        <div className="timeline-card card-strategy">
          <div className="card-header-row">
            <h4 className="card-title">Strategy</h4>
            <span className="card-duration">1 Week</span>
          </div>

          <div className="card-pills-wrap">
            <span className="timeline-pill">Competitor analysis</span>
            <span className="timeline-pill pill-highlight">Research</span>
            <span className="timeline-pill">Hypotheses</span>
          </div>
        </div>

        {/* Card 2: Discovery (2 Weeks) */}
        <div className="timeline-card card-discovery">
          <div className="card-header-row">
            <h4 className="card-title">Discovery</h4>
            <span className="card-duration">2 Weeks</span>
          </div>

          <div className="card-pills-wrap">
            <span className="timeline-pill">User Modeling &amp; CJM</span>
            <span className="timeline-pill pill-highlight">Wireframe</span>
            <span className="timeline-pill">User flow</span>
            <span className="timeline-pill">Testing</span>
            <span className="timeline-pill">UX design</span>
          </div>
        </div>

        {/* Card 3: Solution (4 Weeks - Hero Neon Lime) */}
        <div className="timeline-card card-solution">
          <div className="card-header-row">
            <h4 className="card-title">Solution</h4>
            <span className="card-duration">4 Weeks</span>
          </div>

          <div className="card-pills-wrap">
            <span className="timeline-pill pill-dark">Adaptive Micro-Routines</span>
            <span className="timeline-pill pill-dark">Zero-Guilt System</span>
            <span className="timeline-pill pill-dark">High-Fidelity Screens</span>
            <span className="timeline-pill pill-dark">Creating Design System</span>
            <span className="timeline-pill pill-dark">Usability Testing</span>
            <span className="timeline-pill pill-dark">UI design</span>
          </div>
        </div>
      </div>
    </div>
  )
}
