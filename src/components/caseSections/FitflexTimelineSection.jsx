import React from 'react'

export default function FitflexTimelineSection() {
  return (
    <div className="fitflex-timeline-container">
      {/* 3-Tier Escalating Height Cards Row */}
      <div className="timeline-cards-row">
        {/* Card 1: Strategy (1 Week) */}
        <div className="timeline-card card-strategy">
          <div className="card-header-row">
            <h4 className="card-title">Mentorship</h4>
            <span className="card-duration">6 Weeks</span>
          </div>

          <div className="card-pills-wrap">
            <span className="timeline-pill">Knowledge Transfer</span>
            <span className="timeline-pill pill-highlight">Guidance</span>
            <span className="timeline-pill">Best Practices</span>
          </div>
        </div>

        {/* Card 2: Discovery (2 Weeks) */}
        <div className="timeline-card card-discovery">
          <div className="card-header-row">
            <h4 className="card-title">Design Quality</h4>
            <span className="card-duration">Outcome</span>
          </div>

          <div className="card-pills-wrap">
            <span className="timeline-pill">Output Quality</span>
            <span className="timeline-pill pill-highlight">Confidence</span>
            <span className="timeline-pill">Hirability</span>
            <span className="timeline-pill">Industry Standards</span>
          </div>
        </div>

        {/* Card 3: Solution (4 Weeks - Hero Neon Lime) */}
        <div className="timeline-card card-solution">
          <div className="card-header-row">
            <h4 className="card-title">Meaningful Design</h4>
            <span className="card-duration">Key Insight</span>
          </div>

          <div className="card-pills-wrap">
            <span className="timeline-pill pill-dark">Adapts to Real Needs</span>
            <span className="timeline-pill pill-dark">Scales with Users</span>
            <span className="timeline-pill pill-dark">Continuous Feedback</span>
            <span className="timeline-pill pill-dark">Beyond Aesthetics</span>
          </div>
        </div>
      </div>
    </div>
  )
}

