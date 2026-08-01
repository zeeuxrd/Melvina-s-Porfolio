import React from 'react'

export default function ProblemContextCardsSection({ caseId }) {
  return (
    <div className="problem-context-container">
      {/* Top Skim Metrics Row: 3 Columns */}
      <div className="problem-top-metrics-row">
        <div className="problem-metric-col">
          <span className="problem-metric-val">{caseId === 'case-02' ? '45 mins' : '78%'}</span>
          <span className="problem-metric-lbl">{caseId === 'case-02' ? 'Average deal processing duration' : 'Churn Rate within 14 days of birth'}</span>
        </div>
        <div className="problem-metric-col">
          <span className="problem-metric-val">{caseId === 'case-02' ? '22' : '32 hrs'}</span>
          <span className="problem-metric-lbl">{caseId === 'case-02' ? 'Dealerships shadowed across 5 hubs' : 'In-home shadowing'}</span>
        </div>
        <div className="problem-metric-col">
          <span className="problem-metric-val">{caseId === 'case-02' ? '71%' : '0'}</span>
          <span className="problem-metric-lbl">{caseId === 'case-02' ? 'Lacked pre-approval predictability' : 'Adaptive routines in market apps'}</span>
        </div>
      </div>

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
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Redundant Data Entry' : 'Social Media & Guilt Spirals'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? 'Buyer and vehicle details were re-typed across 6+ disconnected lender portals on every single deal. F&I managers repeated the same keystrokes five or six times, while a customer sat waiting on the other side of the desk.'
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
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Opaque Pre-Approval Rules' : 'Energy & Sleep Crises'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? '71% of F&I managers could not predict which lender would approve a buyer before formal submittal. Every application was a gamble, and the unpredictability made it impossible to set customer expectations or plan the close.'
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
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Silent Customer Deal Loss' : 'Physical Trauma Fear'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? '18 minutes were lost per deal to manual credit-field transfer — time that directly correlated with customers walking out during live negotiations. The longer a buyer waited in silence, the more likely the deal slipped away.'
                : '64% of mothers feared unadapted core exercises would worsen diastasis recti or post-natal recovery.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
