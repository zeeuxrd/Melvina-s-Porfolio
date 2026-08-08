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
              <span className="bento-footnote-txt dark-text-muted">Research Protocol &amp; Synthesis</span>
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
          <div className="fitflex-bento-card bento-card-blue bento-chart-card">
            <div className="bento-card-header">
              <div className="bento-metrics-header">
                <div>
                  <h4 className="bento-card-title white-text">Market &amp; Habit Traction</h4>
                  <span className="bento-sub-text white-text-muted">Postpartum User Retention Rate</span>
                </div>
                <div className="bento-hero-stat">
                  <span className="hero-stat-val">+310%</span>
                </div>
              </div>
            </div>

            {/* 5-Bar Pill Chart visual directly matching research-methodoloy-fitflex.png */}
            <div className="bento-pill-chart-wrap">
              <div className="bento-pill-bars-container">
                {/* Bar 1 */}
                <div className="bento-bar-col">
                  <div className="bento-bar-slot">
                    <div className="bento-bar-fill bar-fill-white" style={{ height: '45%' }}></div>
                  </div>
                  <span className="bento-bar-lbl">Q1</span>
                </div>
                {/* Bar 2 */}
                <div className="bento-bar-col">
                  <div className="bento-bar-slot">
                    <div className="bento-bar-fill bar-fill-white" style={{ height: '30%' }}></div>
                  </div>
                  <span className="bento-bar-lbl">Q2</span>
                </div>
                {/* Bar 3 */}
                <div className="bento-bar-col">
                  <div className="bento-bar-slot">
                    <div className="bento-bar-fill bar-fill-white" style={{ height: '40%' }}></div>
                  </div>
                  <span className="bento-bar-lbl">Q3</span>
                </div>
                {/* Bar 4 */}
                <div className="bento-bar-col">
                  <div className="bento-bar-slot">
                    <div className="bento-bar-fill bar-fill-white" style={{ height: '70%' }}></div>
                  </div>
                  <span className="bento-bar-lbl">Q4</span>
                </div>
                {/* Bar 5 (Hero Lime Bar) */}
                <div className="bento-bar-col">
                  <div className="bento-bar-slot">
                    <div className="bento-bar-fill bar-fill-lime" style={{ height: '95%' }}></div>
                  </div>
                  <span className="bento-bar-lbl bar-lbl-lime">Q5</span>
                </div>
              </div>
            </div>

            <div className="bento-card-footer border-top-translucent">
              <span className="bento-footnote-txt white-text-muted">Source: Fitflex Maternal Research Protocol — Postpartum Retention Study</span>
            </div>
          </div>

          {/* Quadrant 4 (Bottom-Right): Opportunity Area #2 - Dark Cobalt / Media Theme */}
          <div className="fitflex-bento-card bento-card-dark-blue">
            <div className="bento-card-header">
              <div className="bento-header-top-row">
                <span className="bento-pill-badge pill-pink">OPPORTUNITY AREA #2</span>
                <div className="bento-tag-stack">
                  <span className="bento-pill-badge pill-orange rotated-tag-right">LIVE SESSION</span>
                  <span className="bento-pill-badge pill-blue">NEW FORMAT</span>
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
