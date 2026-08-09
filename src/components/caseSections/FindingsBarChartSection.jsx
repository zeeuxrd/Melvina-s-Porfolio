import React from 'react'
import pregnantWomanImg from '../../../images/assets/pregnant-woman.png'

export default function FindingsBarChartSection({ caseId }) {
  return (
    caseId === 'case-02' ? (
      <div className="verse-stepped-insights-container">
        {/* 5 Stepped Horizontal Ribbon Bars (Staggered Indented Starts) */}
        <div className="stepped-bars-stack">
          {/* Bar 1: Pink */}
          <div className="stepped-bar bar-color-pink pos-step-1">
            <span className="bar-stat-val">30%</span>
            <span className="bar-stat-desc">of research signals pointed to multi-portal manual re-entry as the primary operational bottleneck</span>
          </div>

          {/* Bar 2: Amber */}
          <div className="stepped-bar bar-color-amber pos-step-2">
            <span className="bar-stat-val">24%</span>
            <span className="bar-stat-desc">of research signals showed F&amp;I managers guessing lender fit blindly without pre-approval guidance</span>
          </div>

          {/* Bar 3: Electric Blue */}
          <div className="stepped-bar bar-color-blue pos-step-3">
            <span className="bar-stat-val">20%</span>
            <span className="bar-stat-desc">of research signals flagged buyers walking out when credit application processing exceeded 25 minutes</span>
          </div>

          {/* Bar 4: Coral Red */}
          <div className="stepped-bar bar-color-coral pos-step-4">
            <span className="bar-stat-val">16%</span>
            <span className="bar-stat-desc">of research signals cited opaque pricing and hidden financing terms as a deal-breaker</span>
          </div>

          {/* Bar 5: Apple Lime Green */}
          <div className="stepped-bar bar-color-lime pos-step-5">
            <span className="bar-stat-val">10%</span>
            <span className="bar-stat-desc">of research signals reflected demand for a fully contactless purchase with flexible payment options</span>
          </div>
        </div>
      </div>
    ) : (
      <div className="fitflex-bento-findings-container">
        {/* Bento Box 2x2 Grid */}
        <div className="fitflex-bento-grid">

          {/* Quadrant 1 (Top-Left): Light Card with Inset Framed Photo (matching reference layout) */}
          <div className="fitflex-bento-card bento-card-light bento-card-framed">
            <div className="bento-card-header">
              <h4 className="bento-card-title dark-text">Marketing &amp; Maternal Synthesis</h4>
              <p className="bento-sub-text dark-text-muted">for nursing mothers who want to rethink post-natal health</p>
            </div>

            {/* Clean Framed Image without overlay */}
            <div className="bento-framed-img-wrap">
              <span className="bento-pill-badge pill-purple rotated-tag-float">A SPACE TO THINK</span>
              <img src={pregnantWomanImg} alt="Maternal UX &amp; Postpartum Synthesis" className="bento-framed-img" />
            </div>

            <div className="bento-card-footer border-top-light">
              <span className="bento-pill-badge pill-bright-green">24 INTERVIEW LOGS</span>
            </div>
          </div>

          {/* Quadrant 2 (Top-Right): Opportunity Area #1 - Vibrant Pink Theme */}
          <div className="fitflex-bento-card bento-card-pink">
            <div className="bento-card-header">
              <div className="bento-header-top-row">
                <span className="bento-pill-badge pill-white-badge">OPPORTUNITY AREA #1</span>
                <span className="bento-pill-badge pill-pink-rotated">HIGH IMPACT</span>
              </div>
              <h4 className="bento-card-title white-text">The Time Constraint</h4>
            </div>

            <div className="bento-card-body">
              <p className="bento-body-desc white-text">
                Time constraints pose a critical barrier for nursing mothers juggling infant care, sleep deprivation, and household duties.
              </p>

              <blockquote className="bento-quote-box bento-quote-pink">
                <p className="bento-quote-txt">"Not having time after a busy day affects my dedication to weight loss"</p>
                <cite className="bento-quote-author pink-cite">— Adebisi, Nursing Mother &amp; Project Manager</cite>
              </blockquote>
            </div>

            <div className="bento-hmw-container bento-hmw-pink">
              <span className="bento-hmw-label pink-hmw-lbl">HOW MIGHT WE</span>
              <p className="bento-hmw-text">
                How might we create micro-habit routines that fit around an unpredictable nursing schedule without causing guilt?
              </p>
            </div>
          </div>

          {/* Quadrant 3 (Bottom-Left): Research Validation & Bar Chart - Electric Cobalt Blue Theme */}

          {/* Quadrant 4 (Bottom-Right): Opportunity Area #2 - Dark Cobalt / Media Theme */}
          <div className="fitflex-bento-card bento-card-dark-blue">
            <div className="bento-card-header">
              <div className="bento-header-top-row">
                <span className="bento-pill-badge pill-pink">OPPORTUNITY AREA #2</span>
                <div className="bento-tag-stack">
                  <span className="bento-pill-badge pill-orange rotated-tag-right">LIVE SESSION</span>
                </div>
              </div>
              <h4 className="bento-card-title white-text">Expensive Dieting</h4>
            </div>

            <div className="bento-card-body">
              <p className="bento-body-desc white-text-muted">
                Keeping up with generic commercial dieting plans is financially unfeasible for new mothers with expanding family budgets.
              </p>

              <blockquote className="bento-quote-box">
                <p className="bento-quote-txt">"Dieting [for weightloss and fitness] can be very expensive"</p>
                <cite className="bento-quote-author">— Ann, Nursing Mother &amp; Fashion Designer</cite>
              </blockquote>
            </div>

            <div className="bento-hmw-container">
              <span className="bento-hmw-label">HOW MIGHT WE</span>
              <p className="bento-hmw-text">
                How might we create an alternative to expensive dieting that remains budget-friendly while satisfying lactating nutrition needs?
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  )
}
