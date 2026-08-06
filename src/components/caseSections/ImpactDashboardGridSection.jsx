import React from 'react'
import avatar1Img from '../../../images/assets/media__1785437012275.png'
import avatar2Img from '../../../images/assets/media__1785437030072.png'
import avatar3Img from '../../../images/assets/media__1785437045137.png'

export default function ImpactDashboardGridSection({ caseId }) {
  return (
    caseId === 'case-02' ? (
      <div className="verse-result-showcase-container">
        {/* Eyebrow */}
        <span className="result-eyebrow">Result</span>

        {/* Main Headline / Impact Statement */}
        <h3 className="result-main-headline">
          Achieve measurable financing velocity with single-screen credit intake, real-time lender pre-screening, and automated contract execution for dealership growth
        </h3>

        {/* Testimonial Author Row */}
        <div className="result-author-row">
          <div className="result-avatar-circle">
            <img src={avatar1Img} alt="Emeka Okafor" className="author-avatar-img" loading="lazy" decoding="async" />
          </div>
          <div className="result-author-info">
            <span className="author-name">Emeka Okafor</span>
            <span className="author-role">F&amp;I Director, Apex Motors Group</span>
          </div>
        </div>

        {/* Bottom Grid: 2 Visual Cards + Summary & 3 Stat Counters */}
        <div className="result-bottom-grid">
          
          {/* Visual Analytics Column (2 Soft Cards) */}
          <div className="result-cards-column">
            
            {/* Card 1: Grow Credit Approvals (Bar Chart) */}
            <div className="res-visual-card">
              <div className="res-card-top">
                <span className="res-card-label">Grow Approvals</span>
                <span className="res-card-num">+31%</span>
              </div>
              <div className="res-bar-chart">
                {['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'].map((month, idx) => {
                  const heights = ['40%', '60%', '85%', '65%', '92%', '75%', '95%'];
                  return (
                    <div key={month} className="res-bar-col">
                      <div className="res-bar-track">
                        <div className="res-bar-fill" style={{ height: heights[idx] }} />
                      </div>
                      <span className="res-bar-month">{month}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Card 2: Deal Time Reduction (Donut Ring Chart) */}
            <div className="res-visual-card">
              <div className="res-card-top">
                <span className="res-card-label">Deal Time Saved</span>
                <span className="res-card-num">-65%</span>
              </div>
              <div className="res-donut-chart">
                <svg viewBox="0 0 120 120" className="donut-svg">
                  <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16" />
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#D9F5C2" strokeWidth="16" strokeDasharray="283" strokeDashoffset="180" strokeLinecap="round" transform="rotate(-90 60 60)" />
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#8C75FF" strokeWidth="16" strokeDasharray="283" strokeDashoffset="100" strokeLinecap="round" transform="rotate(20 60 60)" />
                </svg>
                <div className="donut-center-text">
                  <span className="donut-val">$4.2M</span>
                  <span className="donut-lbl">Recovered</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Summary & 3 Metric Counters */}
          <div className="result-details-column">
            <p className="result-summary-text">
              Deploying Verse across pilot dealerships eliminated multi-portal data entry friction, enabling finance directors to close deals faster while increasing customer trust at the sales desk.
            </p>

            <div className="result-counters-row">
              <div className="result-counter-item">
                <span className="res-counter-num">08</span>
                <span className="res-counter-lbl">Weeks of field study</span>
              </div>
              <div className="result-counter-item">
                <span className="res-counter-num">22</span>
                <span className="res-counter-lbl">Dealerships evaluated</span>
              </div>
              <div className="result-counter-item">
                <span className="res-counter-num">400+</span>
                <span className="res-counter-lbl">Live deal logs analyzed</span>
              </div>
            </div>
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
              <span className="avatar-count-pill">{caseId === 'case-02' ? '$4.2M Recovered' : '+2 Cohorts'}</span>
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
