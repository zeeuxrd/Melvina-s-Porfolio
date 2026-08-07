import React from 'react'

export default function ProblemContextCardsSection({ caseId }) {
  return (
    <div className="problem-context-container">
      {/* 3 Vertical Color-Coded Scalloped Problem Cards Grid */}
      <div className="problem-cards-grid">
        
        {/* Card 01: Soft Periwinkle Blue */}
        <div className={`scallop-card scallop-card--blue ${caseId === 'case-02' ? 'scallop-card--dark' : ''}`}>
          <div className="scallop-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
          </div>
          <div className="scallop-card-body">
            <span className="scallop-card-num">01.</span>
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Inconvenient & Time-Consuming' : 'Social Media & Guilt Spirals'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? 'Traditional vehicle purchasing requires lengthy, high-friction physical dealership visits that conflict with the busy work schedules of urban working professionals.'
                : 'Fixed daily streak counters triggered intense self-blame when workouts were missed due to baby care.'}
            </p>
          </div>
        </div>

        {/* Card 02: Soft Lime Green */}
        <div className={`scallop-card scallop-card--lime ${caseId === 'case-02' ? 'scallop-card--dark' : ''}`}>
          <div className="scallop-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
          </div>
          <div className="scallop-card-body">
            <span className="scallop-card-num">02.</span>
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Opaque Pricing & Financing' : 'Energy & Sleep Crises'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? 'Unclear vehicle pricing structures and hidden financing terms create uncertainty, preventing buyers from accessing predictable, flexible payment plans.'
                : 'Severe sleep fragmentation meant rigid 45-minute workout plans were physically impossible.'}
            </p>
          </div>
        </div>

        {/* Card 03: Soft Golden Butter */}
        <div className={`scallop-card scallop-card--amber ${caseId === 'case-02' ? 'scallop-card--dark' : ''}`}>
          <div className="scallop-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
          </div>
          <div className="scallop-card-body">
            <span className="scallop-card-num">03.</span>
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Need for Trusted Online Retail' : 'Physical Trauma Fear'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? 'Middle-income professionals in motorable Nigerian cities need a transparent, digital-first buying experience that delivers flexible payment options without physical dealership hassles.'
                : '64% of mothers feared unadapted core exercises would worsen diastasis recti or post-natal recovery.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
