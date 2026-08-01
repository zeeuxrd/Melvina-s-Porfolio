import React from 'react'

export default function VerseMiroCodeSection() {
  return (
    <div className="verse-miro-board-container">
      {/* Miro Top Navigation App Bar */}
      <div className="miro-app-bar">
        <div className="miro-bar-left">
          <span className="miro-logo">miro</span>
          <span className="miro-board-title"><span className="miro-board-title-prefix">Verse Co-Design Workshop: </span>F&amp;I Credit Orchestration</span>
          <span className="miro-cloud-badge">Cloud Auto-saved</span>
        </div>
        <div className="miro-bar-right">
          <div className="miro-user-avatars">
            <span className="miro-avatar-circle av-1">EO</span>
            <span className="miro-avatar-circle av-2">MV</span>
            <span className="miro-avatar-circle av-3">TL</span>
            <span className="miro-users-count">+11</span>
          </div>
          <button type="button" className="miro-share-btn">Share</button>
        </div>
      </div>

      {/* Miro Canvas Workspace */}
      <div className="miro-canvas-workspace">
        {/* Left Digital Tool Rail */}
        <div className="miro-tool-rail">
          <div className="miro-tool-icon active">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3l12 12-5 1 4 7-3 1-4-7-4 4V3z"/></svg>
          </div>
          <div className="miro-tool-icon">T</div>
          <div className="miro-tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
          </div>
          <div className="miro-tool-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
          </div>
        </div>

        {/* Main Board Content Stage */}
        <div className="miro-board-stage">
          
          {/* Yellow Header Marker */}
          <div className="miro-section-marker">
            <span className="miro-marker-highlight">Verse Credit Intake Workshop</span>
          </div>

          {/* Floating Collaborator Cursor Badges */}
          <div className="miro-cursor-badge cursor-emeka">
            <svg className="cursor-arrow" viewBox="0 0 24 24" fill="#9333EA"><path d="M3 3l14 14-6 1 4 7-3 1-4-7-5 4V3z"/></svg>
            <span className="cursor-label">Emeka (F&amp;I Director)</span>
          </div>

          <div className="miro-cursor-badge cursor-uxr">
            <svg className="cursor-arrow" viewBox="0 0 24 24" fill="#2563EB"><path d="M3 3l14 14-6 1 4 7-3 1-4-7-5 4V3z"/></svg>
            <span className="cursor-label">Verse Lead UXR</span>
          </div>

          <div className="miro-cursor-badge cursor-lender">
            <svg className="cursor-arrow" viewBox="0 0 24 24" fill="#DC2626"><path d="M3 3l14 14-6 1 4 7-3 1-4-7-5 4V3z"/></svg>
            <span className="cursor-label">Lender API Lead</span>
          </div>

          {/* Upper Row: Persona Card & Brief Description Notes & Main Job Card */}
          <div className="miro-top-cards-row">
            {/* F&I Director Persona Hero Card */}
            <div className="miro-persona-card">
              <div className="persona-card-header">
                <span className="persona-name">Emeka — F&amp;I Director</span>
                <span className="persona-tag">Dealership Persona</span>
              </div>
              <p className="persona-bio">
                "I process 15+ credit submittals weekly across 6 lender portals while managing live price negotiations at the sales desk."
              </p>
            </div>

            {/* Brief Description Yellow Sticky Notes */}
            <div className="miro-sticky-cluster">
              <div className="miro-sticky-note note-yellow">
                <p>Must submit credit profile in &lt; 5 mins during live customer talks.</p>
              </div>
              <div className="miro-sticky-note note-yellow">
                <p>Frustrated by re-typing buyer details into 6 separate lender portals.</p>
              </div>
              <div className="miro-sticky-note note-yellow">
                <p>Wants instant visibility into pre-approval odds before submitting.</p>
              </div>
            </div>

            {/* Persona Main Job To Be Done Card */}
            <div className="miro-job-card">
              <span className="job-card-label">Persona Main Job To Be Done</span>
              <p className="job-card-text">
                "F&amp;I Director's primary job is to secure fast, reliable credit approvals across multi-tier lenders without losing buyer trust at the desk."
              </p>
            </div>
          </div>

          {/* Lower Row: 4 Co-Designed Solution Principles */}
          <div className="miro-bottom-principles-row">
            <span className="principles-section-title">Co-Designed System Principles</span>
            
            <div className="miro-principles-grid">
              {/* Principle 01 - Blue Note */}
              <div className="miro-principle-card note-blue">
                <span className="principle-badge">01</span>
                <h4 className="principle-title">Single Intake Form</h4>
                <p className="principle-desc">Unified 6 lender portal logins into one single-screen credit intake form.</p>
              </div>

              {/* Principle 02 - Green Note */}
              <div className="miro-principle-card note-green">
                <span className="principle-badge">02</span>
                <h4 className="principle-title">Multi-Lender Orchestration</h4>
                <p className="principle-desc">Simultaneous pre-approval routing engine across tiered lending institutions.</p>
              </div>

              {/* Principle 03 - Yellow Note */}
              <div className="miro-principle-card note-yellow">
                <span className="principle-badge">03</span>
                <h4 className="principle-title">Instant Eligibility Pre-Screen</h4>
                <p className="principle-desc">Real-time credit checks flag likely approvals before formal submittal.</p>
              </div>

              {/* Principle 04 - Coral Note */}
              <div className="miro-principle-card note-coral">
                <span className="principle-badge">04</span>
                <h4 className="principle-title">Automated Contract Execution</h4>
                <p className="principle-desc">Auto-populated compliance disclosures pulled directly from single deal record.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
