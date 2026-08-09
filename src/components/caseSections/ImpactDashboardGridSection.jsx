import React from 'react'
import avatar1Img from '../../../images/assets/media__1785437012275.png'
import avatar2Img from '../../../images/assets/media__1785437030072.png'
import avatar3Img from '../../../images/assets/media__1785437045137.png'

export default function ImpactDashboardGridSection({ caseId }) {
  return (
    caseId === 'case-02' ? (
      <div className="verse-result-showcase-container">
        {/* Outcome Cards Grid */}
        <div className="result-outcomes-grid">
          <div className="res-visual-card res-outcome-card res-outcome-card--pink">
            <h4 className="res-outcome-title">Adoption &amp; Conversion</h4>
            <p className="res-outcome-text">
              Buyers are more willing to complete the journey online, lifting adoption and conversion rates compared to traditional dealerships.
            </p>
          </div>

          <div className="res-visual-card res-outcome-card res-outcome-card--purple">
            <h4 className="res-outcome-title">Virtual Documentation</h4>
            <p className="res-outcome-text">
              Secured, convenient virtual documentation replaces paper-heavy processes and finalizes the deal without extra dealership visits.
            </p>
          </div>

          <div className="res-visual-card res-outcome-card res-outcome-card--green">
            <h4 className="res-outcome-title">Inspection &amp; Payment</h4>
            <p className="res-outcome-text">
              Vehicle inspection and flexible payment options build the trust and accessibility urban buyers need to commit.
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className="impact-dashboard-container">
      {/* Top Card: Wide Segment Slider Card (~100% Width) */}
      <div className="impact-card impact-card--wide">
        <div className="impact-slider-track-wrap">
          <div className="impact-slider-axis">
            <span>0%</span>
          </div>
          <div className="impact-slider-bar-track">
            <div className="impact-slider-bar-fill" style={{ width: '90%' }} />
          </div>
        </div>

        <div className="impact-segments-row">
          <div className="impact-segment-col">
            <div className="segment-badge-wrap">
              <span className="segment-pill segment-pill--green" />
              <span className="segment-title">{caseId === 'case-02' ? '-65% Deal Friction Time' : '+42% 90-Day Retention'}</span>
            </div>
            <div className="segment-avatars">
              <img src={avatar1Img} alt="Participant 1" className="avatar-circle-img" loading="lazy" decoding="async" />
              <img src={avatar2Img} alt="Participant 2" className="avatar-circle-img" loading="lazy" decoding="async" />
              <img src={avatar3Img} alt="Participant 3" className="avatar-circle-img" loading="lazy" decoding="async" />
              <span className="avatar-count-pill">{caseId === 'case-02' ? '22 Dealerships' : '+22 Active Mothers'}</span>
            </div>
          </div>

          <div className="impact-segment-col">
            <div className="segment-badge-wrap">
              <span className="segment-pill segment-pill--grey" />
              <span className="segment-title">{caseId === 'case-02' ? '+31% Credit Approvals' : '-28% Churn Drop-Off'}</span>
            </div>
            <div className="segment-avatars">
              <img src={avatar3Img} alt="Participant 4" className="avatar-circle-img" loading="lazy" decoding="async" />
              <span className="avatar-count-pill">{caseId === 'case-02' ? '98% Adoption' : '+2 Cohorts'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: 2 Equal Square Cards (~50% Width Each) */}
      <div className="impact-bottom-row">
        {/* Bottom-Left Card */}
        <div className="impact-card impact-card--square">
          <div className="histogram-header">
            <span className="histogram-eyebrow">{caseId === 'case-02' ? 'Transaction Velocity Density' : 'Micro-Routine Session Density'}</span>
            <h4 className="histogram-title">{caseId === 'case-02' ? '16-Min Deal Completion Adoption' : '5-Min & 10-Min Stretch Adoption'}</h4>
            <span className="histogram-sublbl">{caseId === 'case-02' ? 'Deal Submittal Completion Rate' : 'Daily Routine Completion Rate'}</span>
          </div>

          <div className="histogram-chart-wrap">
            <div className="histogram-bars">
              <div className="hist-bar hist-bar--muted" style={{ height: '20%' }} />
              <div className="hist-bar hist-bar--muted" style={{ height: '28%' }} />
              <div className="hist-bar hist-bar--muted" style={{ height: '38%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '52%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '68%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '82%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '95%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '100%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '88%' }} />
              <div className="hist-bar hist-bar--active" style={{ height: '74%' }} />
              <div className="hist-bar hist-bar--muted" style={{ height: '58%' }} />
              <div className="hist-bar hist-bar--muted" style={{ height: '44%' }} />
              <div className="hist-bar hist-bar--muted" style={{ height: '32%' }} />
              <div className="hist-bar hist-bar--muted" style={{ height: '22%' }} />
            </div>
            <div className="histogram-range-slider">
              <div className="range-handle-pill">{caseId === 'case-02' ? '10 mins' : '05 mins'}</div>
              <div className="range-track-line" />
              <div className="range-handle-pill">{caseId === 'case-02' ? '25 mins' : '15 mins'}</div>
            </div>
          </div>
        </div>

        {/* Bottom-Right Card */}
        <div className="impact-card impact-card--square impact-card--venn">
          <div className="venn-card-header">
            <div className="venn-header-left">
              <span className="venn-eyebrow">{caseId === 'case-02' ? 'Approval & Adoption' : 'Retention & Completion'}</span>
              <div className="venn-hero-val-wrap">
                <span className="venn-hero-val">{caseId === 'case-02' ? '98%' : '94%'}</span>
              </div>
            </div>
          </div>

          {/* 3-Bubble Cluster Visualization */}
          <div className="venn-bubbles-container">
            <div className="venn-bubble venn-bubble--pink">
              <span>20%</span>
            </div>
            <div className="venn-bubble venn-bubble--yellow">
              <span>32%</span>
            </div>
            <div className="venn-bubble venn-bubble--green">
              <span>48%</span>
            </div>
          </div>

          {/* Legend Rows */}
          <div className="venn-legend-rows">
            <div className="venn-legend-item">
              <div className="venn-legend-label">
                <span className="venn-dot venn-dot--green" />
                <span>{caseId === 'case-02' ? 'Process Velocity' : '90-Day Retention'}</span>
              </div>
              <div className="venn-legend-val">
                <span>48%</span>
                <span className="venn-trend venn-trend--up">{caseId === 'case-02' ? '↗ -65%' : '↗ +42%'}</span>
              </div>
            </div>

            <div className="venn-legend-item">
              <div className="venn-legend-label">
                <span className="venn-dot venn-dot--yellow" />
                <span>{caseId === 'case-02' ? 'Credit Approvals' : 'Micro-Routine Completion'}</span>
              </div>
              <div className="venn-legend-val">
                <span>32%</span>
                <span className="venn-trend venn-trend--up">{caseId === 'case-02' ? '↗ +31%' : '↗ +28%'}</span>
              </div>
            </div>

            <div className="venn-legend-item">
              <div className="venn-legend-label">
                <span className="venn-dot venn-dot--pink" />
                <span>{caseId === 'case-02' ? 'Manager Adoption' : 'Zero-Guilt Consistency'}</span>
              </div>
              <div className="venn-legend-val">
                <span>20%</span>
                <span className="venn-trend venn-trend--up">{caseId === 'case-02' ? '↗ 98%' : '↗ +18%'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  )
}
