import React from 'react'
import verseYellowCarImg from '../../../images/assets/media__1785534267008.jpg'

export default function TripleCardSection({ caseId }) {
  return (
    <div className={caseId === 'case-01' || caseId === 'case-02' ? 'problem-context-container' : undefined}>
      {caseId === 'case-02' && (
        <div className="problem-top-metrics-row">
          <div className="problem-metric-col">
            <span className="problem-metric-val">65%</span>
            <span className="problem-metric-lbl">Process time gain (45m → 16m)</span>
          </div>
          <div className="problem-metric-col">
            <span className="problem-metric-val">15</span>
            <span className="problem-metric-lbl">Dealership F&I managers tested</span>
          </div>
          <div className="problem-metric-col">
            <span className="problem-metric-val">86.5</span>
            <span className="problem-metric-lbl">System Usability Scale (SUS) score</span>
          </div>
        </div>
      )}
      <div className={`mock-triple-grid ${caseId === 'case-01' || caseId === 'case-02' ? 'mock-triple-grid--row' : ''} ${caseId === 'case-02' ? 'mock-triple-grid--verse' : ''}`}>
        {/* Card 01: Soft Purple Scalloped Cloud Card */}
        <div className="scallop-card scallop-card--purple">
          <div className="scallop-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
          </div>
          <div className="scallop-card-body">
            <span className="scallop-card-num">{caseId === 'case-02' ? '65%' : '92%'}</span>
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'Process Time Gain' : 'Task Success Rate'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? '15 dealership finance managers completed deal submittals in 16 minutes — down from 45 minutes on legacy portals. Across 3 iterative rounds, completion velocity climbed steadily while field error rates dropped.'
                : '22 of 24 nursing mothers successfully completed core goal selection and daily lifestyle tracking flows during testing. Focused validation confirmed that simplified routines reduced friction and supported consistent engagement.'}
            </p>
          </div>
        </div>

        {/* Card 02: Full-Bleed Image Card (Middle Position) */}
        <div className="triple-card-mock testing-video-card testing-video-card--full">
          <img
            src={caseId === 'case-02' ? verseYellowCarImg : "https://assets.grok.com/users/a8dbd35a-7186-4f4d-9312-db52f52cdba5/generated/ab24a148-974d-4067-b8f4-e3b08abe52fa/image.jpg"}
            alt="Usability Testing Session"
            className="testing-full-video-media"
            loading="lazy"
            decoding="async"
          />
          <div className="testing-video-overlay">
            <p className="testing-video-quote">
              {caseId === 'case-02'
                ? 'Validated at speed, under real sales-desk pressure.'
                : 'Direct real-world feedback gathered from nursing mothers across 3 testing rounds.'}
            </p>
          </div>
        </div>

        {/* Card 03: Soft Lime Green Scalloped Card */}
        <div className={`scallop-card ${caseId === 'case-01' ? 'scallop-card--lime' : 'scallop-card--amber'}`}>
          <div className="scallop-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
          </div>
          <div className="scallop-card-body">
            <span className="scallop-card-num">{caseId === 'case-02' ? '86.5' : '88.5'}</span>
            <h4 className="scallop-card-title">{caseId === 'case-02' ? 'SUS Score' : 'User Satisfaction'}</h4>
            <p className="scallop-card-text">
              {caseId === 'case-02'
                ? 'System Usability Scale rated in the 95th percentile across 3 iterative testing rounds with dealership finance directors. Managers found the single-screen intake workflow more predictable and noticeably less stressful under real sales-desk pressure.'
                : 'Overall user satisfaction rated in the top percentile across 3 iterative testing rounds with nursing mothers. Feedback confirmed high interaction clarity, intuitive flow navigation, and increased user confidence.'}
            </p>
          </div>
        </div>
    </div>
    </div>
  )
}
