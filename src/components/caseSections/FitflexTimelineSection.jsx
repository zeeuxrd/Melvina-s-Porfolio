import React from 'react'

export default function FitflexTimelineSection() {
  return (
    <div className="fitflex-timeline-container">
      {/* Header Area */}
      <div className="timeline-header-area">
        <span className="timeline-eyebrow-tag">Reflections</span>

        <h3 className="timeline-headline">
          This project was quite unique for me because it wasn't just about{' '}
          <span className="inline-badge-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="#FFF275" />
              <path d="M12 7L16 11L12 15L8 11L12 7Z" fill="#0D0E10" />
            </svg>
          </span>{' '}
          delivering value for the solution
        </h3>

        <div className="timeline-narrative-block">
          <p>
            It also provided an opportunity for me to transfer knowledge to younger designers, guide them to adopt proven design strategies, embrace industry best practices, and elevate the quality of their work, ultimately strengthening their confidence and hirability.
          </p>
          <p>
            Beyond that, I was reminded that meaningful design isn't just about aesthetics — it adapts to real user needs, scales with them, and evolves through continuous feedback.
          </p>
        </div>
      </div>

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

