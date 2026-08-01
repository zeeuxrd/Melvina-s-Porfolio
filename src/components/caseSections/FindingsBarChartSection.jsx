import React from 'react'

export default function FindingsBarChartSection({ caseId }) {
  return (
    caseId === 'case-02' ? (
      <div className="verse-stepped-insights-container">
        {/* Top Report Header */}
        <div className="stepped-report-header">
          <div className="stepped-header-left">
            <span className="stepped-brand-txt">Verse Dealership Insights: 2024 Report</span>
            <span className="stepped-sub-txt">2024 Findings</span>
          </div>
        </div>

        {/* Headline Banner */}
        <div className="stepped-headline-wrap">
          <h3 className="stepped-main-headline">
            Of the 400+ live dealership deal closings observed during research...
          </h3>
        </div>

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
      <div className="findings-barchart-container">
        {/* Left Column: Headline, Summary & Giant Stat Callout */}
        <div className="findings-barchart-info">
          <div className="barchart-header-tags">
            <span className="barchart-tag">fitflex.research</span>
          </div>

          <div className="barchart-title-group">
            <h3 className="barchart-main-title">Post-Natal Retention Breakdown</h3>
            <p className="barchart-desc-text">
              Primary research across 8 urban hubs revealed how streak guilt directly drives habit abandonment within the first 14 days of birth.
            </p>
          </div>

          <div className="barchart-stat-anchor">
            <span className="barchart-stat-num">78%</span>
            <span className="barchart-stat-label">14-Day Churn Peak</span>
          </div>
        </div>

        {/* Right Column: 3 Vertical Progress Bar Tracks */}
        <div className="findings-barchart-visual">
          {/* Bar 1 */}
          <div className="bar-track-col">
            <div className="bar-track-shell">
              <div className="bar-fill bar-fill--blue" style={{ height: '92%' }}>
                <div className="bar-label-inner">
                  <span className="bar-year">Day 01</span>
                  <span className="bar-val">92% Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bar 2 */}
          <div className="bar-track-col">
            <div className="bar-track-shell">
              <div className="bar-fill bar-fill--lime" style={{ height: '48%' }}>
                <div className="bar-label-inner">
                  <span className="bar-year">Day 07</span>
                  <span className="bar-val">48% Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bar 3 */}
          <div className="bar-track-col">
            <div className="bar-track-shell">
              <div className="bar-fill bar-fill--pink" style={{ height: '22%' }}>
                <div className="bar-label-inner">
                  <span className="bar-year">Day 14</span>
                  <span className="bar-val">22% Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
