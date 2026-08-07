import React from 'react'

export default function FindingsBarChartSection({ caseId }) {
  return (
    caseId === 'case-02' ? (
      <div className="verse-stepped-insights-container">
        {/* 5 Stepped Horizontal Ribbon Bars (Staggered Indented Starts) */}
        <div className="stepped-bars-stack">
          {/* Bar 1: Pink */}
          <div className="stepped-bar bar-color-pink pos-step-1">
            <span className="bar-stat-val">74%</span>
            <span className="bar-stat-desc">reported multi-portal manual re-entry was their primary operational bottleneck</span>
          </div>

          {/* Bar 2: Amber */}
          <div className="stepped-bar bar-color-amber pos-step-2">
            <span className="bar-stat-val">85%</span>
            <span className="bar-stat-desc">saw an immediate increase in first-time credit approval velocity with pre-screening</span>
          </div>

          {/* Bar 3: Electric Blue */}
          <div className="stepped-bar bar-color-blue pos-step-3">
            <span className="bar-stat-val">87%</span>
            <span className="bar-stat-desc">would adopt automated single-entry credit routing over legacy dealership software</span>
          </div>

          {/* Bar 4: Coral Red */}
          <div className="stepped-bar bar-color-coral pos-step-4">
            <span className="bar-stat-val">68%</span>
            <span className="bar-stat-desc">said buyers walked out when credit application processing exceeded 25 minutes</span>
          </div>

          {/* Bar 5: Apple Lime Green */}
          <div className="stepped-bar bar-color-lime pos-step-5">
            <span className="bar-stat-val">58%</span>
            <span className="bar-stat-desc">requested automated compliance disclosures integrated directly into credit workflows</span>
          </div>
        </div>

        {/* Bottom Caption */}
        <div className="stepped-report-footer">
          <span className="footer-index-txt">(Research) Index No. 051 — Verse Dealership Insights 2024 – Verse</span>
        </div>
      </div>
    ) : (
      <div className="fitflex-opportunity-container">
        <div className="opportunity-cards-grid">
          {/* Opportunity Card 1: The Time Constraint (Soft Pastel Blue) */}
          <div className="opportunity-card card-theme-blue">
            <div className="opportunity-card-top">
              <span className="opportunity-badge-pill">OPPORTUNITY AREA #1</span>
              <h4 className="opportunity-card-title">The Time Constraint</h4>
            </div>
            
            <p className="opportunity-body-desc">
              Time constraints pose a significant challenge to maintaining a healthy lifestyle and achieving weight loss goals for nursing mothers who have to juggle between work and domestic duties.
            </p>

            <blockquote className="opportunity-user-quote">
              <p className="opp-quote-txt">"Not having time after a busy day affects my dedication to weight loss"</p>
              <cite className="opp-quote-author">— Adebisi, Nursing Mother &amp; Project Manager (Research participant)</cite>
            </blockquote>

            <div className="opportunity-hmw-box">
              <span className="hmw-tag-lbl">HOW MIGHT WE</span>
              <p className="hmw-question-txt">
                How might we create effective means for a busy wife and nursing mother to lose weight and stay fit, regardless of her busy schedule?
              </p>
            </div>
          </div>

          {/* Opportunity Card 2: Expensive Dieting (Soft Pastel Pink) */}
          <div className="opportunity-card card-theme-pink">
            <div className="opportunity-card-top">
              <span className="opportunity-badge-pill">OPPORTUNITY AREA #2</span>
              <h4 className="opportunity-card-title">Expensive Dieting</h4>
            </div>

            <p className="opportunity-body-desc">
              Keeping up with dieting can be challenging for nursing mothers on a weight loss and fitness journey because of the cost of such meals.
            </p>

            <blockquote className="opportunity-user-quote">
              <p className="opp-quote-txt">"Dieting [for weightloss and fitness] can be very expensive"</p>
              <cite className="opp-quote-author">— Ann, Nursing Mother &amp; Fashion Designer (Research participant)</cite>
            </blockquote>

            <div className="opportunity-hmw-box">
              <span className="hmw-tag-lbl">HOW MIGHT WE</span>
              <p className="hmw-question-txt">
                How might we create an alternative to expensive dieting that still works for a nursing mother to achieve her fitness goals?
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
