import React from 'react'

export default function OverviewModulesGridSection({ caseId }) {
  return (
    <div className="modules-grid-container">
      {caseId === 'case-02' && (
        <div className="verse-faq-path-container">
          {/* 4 Tilted Cards in Portfolio Palette with Dashed S-Curve Path */}
          <div className="faq-cards-path-wrap">
            {/* SVG Dashed Connecting Path Line */}
            <svg className="faq-dashed-path-svg" viewBox="0 0 900 600" fill="none" preserveAspectRatio="none">
              <path
                d="M 220 120 C 450 30, 650 150, 680 240 C 700 320, 250 340, 220 420 C 190 500, 550 560, 680 500"
                stroke="#d9d9d9"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                opacity="0.55"
              />
            </svg>

            {/* Card 1: Soft Periwinkle Blue */}
            <div className="verse-faq-card card-pos-1 verse-card--blue">
              <div className="faq-card-num-badge">1</div>
              <h4 className="faq-card-q">What market opportunity does Verse target?</h4>
              <p className="faq-card-a">
                Verse addresses key friction points in the <span className="faq-hl-tag hl-darkblue">$1.3 trillion automotive retail market</span> where traditional models have lagged in digital transformation.
              </p>
            </div>

            {/* Card 2: Soft Lime Green */}
            <div className="verse-faq-card card-pos-2 verse-card--lime">
              <div className="faq-card-num-badge">2</div>
              <h4 className="faq-card-q">Why has the industry lagged behind?</h4>
              <p className="faq-card-a">
                Over <span className="faq-hl-tag hl-darkgreen">95% of car purchases</span> still require physical in-person dealership visits, creating long wait times and paper-heavy friction.
              </p>
            </div>

            {/* Card 3: Soft Golden Butter */}
            <div className="verse-faq-card card-pos-3 verse-card--amber">
              <div className="faq-card-num-badge">3</div>
              <h4 className="faq-card-q">How did buyer behavior shift?</h4>
              <p className="faq-card-a">
                Post-pandemic consumer shifts revealed a strong preference for <span className="faq-hl-tag hl-darkamber">contactless purchasing experiences</span> and seamless online financing.
              </p>
            </div>

            {/* Card 4: Soft Blush Pink */}
            <div className="verse-faq-card card-pos-4 verse-card--pink">
              <div className="faq-card-num-badge">4</div>
              <h4 className="faq-card-q">What impact does the digital flow deliver?</h4>
              <p className="faq-card-a">
                Designing an end-to-end digital retail flow holds potential to <span className="faq-hl-tag hl-darkpink">increase conversion rates by 40%</span> over traditional dealerships.
              </p>
            </div>
          </div>
        </div>
      )}

      {caseId !== 'case-02' && (
        <>
          <div className="modules-grid-header margin-top-md">
            <span className="modules-grid-eyebrow">platform.architecture</span>
            <h3 className="modules-grid-title">Platform Capability Modules</h3>
          </div>

          <div className="modules-grid">
            {/* Module 1: Soft Periwinkle Blue */}
            <div className="module-card module-card--blue">
              <div className="module-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v10H4z" />
                  <path d="M4 14l4 4h8l4-4" />
                </svg>
              </div>
              <h4 className="module-card-title">Unified Deal Entry</h4>
              <p className="module-card-text">Single-entry buyer &amp; vehicle data capture that eliminates re-typing across every lender portal.</p>
            </div>

            {/* Module 2: Soft Lime Green */}
            <div className="module-card module-card--lime">
              <div className="module-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="12" cy="18" r="2.5" />
                  <path d="M8.2 7.3L11 16M15.8 7.3L13 16M8.5 6h7" />
                </svg>
              </div>
              <h4 className="module-card-title">Multi-Lender Orchestration</h4>
              <p className="module-card-text">Real-time routing engine that submits credit applications across tiered lending institutions simultaneously.</p>
            </div>

            {/* Module 3: Soft Golden Butter */}
            <div className="module-card module-card--amber">
              <div className="module-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3.5v5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5v-5z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 className="module-card-title">Credit Pre-Screening</h4>
              <p className="module-card-text">Instant eligibility checks flag likely approvals before a formal application is ever submitted.</p>
            </div>

            {/* Module 4: Soft Blush Pink */}
            <div className="module-card module-card--pink">
              <div className="module-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v3h3" />
                  <path d="M9 12h6M9 16h6" />
                </svg>
              </div>
              <h4 className="module-card-title">Document Automation</h4>
              <p className="module-card-text">Auto-populated compliance disclosures and contracts pulled directly from the unified deal record.</p>
            </div>

            {/* Module 5: Soft Lilac */}
            <div className="module-card module-card--lilac">
              <div className="module-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V10M12 20V4M20 20v-7" />
                </svg>
              </div>
              <h4 className="module-card-title">Deal Analytics Dashboard</h4>
              <p className="module-card-text">Live visibility into approval status, funnel health, and time-to-close across every active deal.</p>
            </div>

            {/* Module 6: Soft Mint */}
            <div className="module-card module-card--mint">
              <div className="module-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.5 8.5 0 1 1-4.06-7.24L21 3l-1.2 4.06c.13.46.2.94.2 1.44z" />
                </svg>
              </div>
              <h4 className="module-card-title">Dealer-Lender Messaging</h4>
              <p className="module-card-text">Centralized communication thread per deal, keeping finance managers and lenders in sync in one place.</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
