import React from 'react'
import './Work.css'
import firstCaseCover from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/d189ee92-2ad7-43f3-b2c8-4c42f3c69bd6/media__1785160138028.png'
import secondCaseCover from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/d189ee92-2ad7-43f3-b2c8-4c42f3c69bd6/media__1785160961905.png'
import thirdCaseCover from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/d189ee92-2ad7-43f3-b2c8-4c42f3c69bd6/media__1785165571132.jpg'
import fourthCaseCover from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/d189ee92-2ad7-43f3-b2c8-4c42f3c69bd6/media__1785166951949.jpg'
import porscheCoverNew from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785442322253.jpg'

const caseStudies = [
  {
    id: 'case-01',
    name: 'Workout Scheduling & Retention',
    year: '2025',
    sector: 'Fitness, Productivity',
    coverImage: firstCaseCover,
    gridClass: 'work-card--wide',
  },
  {
    id: 'case-02',
    name: 'Verse Automotive Financing',
    year: '2024',
    sector: 'Fintech, Automotive',
    coverImage: fourthCaseCover,
    gridClass: 'work-card--wide',
  },
  {
    id: 'case-03',
    name: 'AfriChef Recipe & Culinary UX',
    year: '2024',
    sector: 'Food, Consumer Apps',
    coverImage: thirdCaseCover,
    gridClass: 'work-card--wide',
  },
  {
    id: 'case-04',
    name: 'Digital Inclusion & Accessibility Strategy',
    year: '2024',
    sector: 'Inclusive Design, WCAG Strategy',
    coverImage: porscheCoverNew,
    gridClass: 'work-card--wide',
  },
]

export default function Work({ onSelectCase }) {
  const handleCardClick = (studyId) => (e) => {
    if (onSelectCase) {
      e.preventDefault()
      onSelectCase(studyId)
    }
  }

  return (
    <section className="work-section" id="work" aria-label="Selected Work">
      <div className="work-header">
        <div className="work-header-content">
          <h2 className="work-heading">Selected works</h2>
          <p className="work-subheading">
            Game-changing work. Bridging user behavior and product strategy to drive measurable outcomes.
          </p>
        </div>
        <a href="#work" className="work-header-action" aria-label="Explore all work">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className="work-asymmetric-grid">
        {caseStudies.map((study) => (
          <a
            href={`#${study.id}`}
            className={`work-card ${study.gridClass}`}
            key={study.id}
            onClick={handleCardClick(study.id)}
          >
            <div className="work-card-media">
              <div className="work-card-img-wrapper">
                {study.coverImage ? (
                  <img
                    src={study.coverImage}
                    alt={study.name}
                    className="work-card-img"
                  />
                ) : (
                  <div className="work-card-fallback-bg" />
                )}
              </div>

              <div className="work-card-meta-list">
                <div className="work-card-meta-row">
                  <span className="work-card-meta-label">NAME</span>
                  <span className="work-card-meta-value">{study.name}</span>
                </div>
                <div className="work-card-meta-row">
                  <span className="work-card-meta-label">YEAR</span>
                  <span className="work-card-meta-value">{study.year}</span>
                </div>
                <div className="work-card-meta-row">
                  <span className="work-card-meta-label">SECTOR</span>
                  <span className="work-card-meta-value">{study.sector}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

