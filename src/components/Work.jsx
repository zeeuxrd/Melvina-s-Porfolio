import React from 'react'
import './Work.css'

const caseStudies = [
  {
    id: 'case-01',
    name: 'Case study 01',
    year: 'Mockup pending',
    sector: 'Sector pending',
  },
  {
    id: 'case-02',
    name: 'Case study 02',
    year: 'Mockup pending',
    sector: 'Sector pending',
  },
  {
    id: 'case-03',
    name: 'Case study 03',
    year: 'Mockup pending',
    sector: 'Sector pending',
  },
  {
    id: 'case-04',
    name: 'Case study 04',
    year: 'Mockup pending',
    sector: 'Sector pending',
  },
]

export default function Work() {
  return (
    <section className="work-section" id="work" aria-label="Selected Work">
      <h2 className="work-heading">Selected works</h2>

      <div className="work-grid">
        {caseStudies.map((study) => (
          <a href={`#${study.id}`} className="work-card" key={study.id}>
            <div className="work-card-media" aria-hidden="true">
              <span className="work-card-placeholder">Mockup pending</span>
            </div>
            <div className="work-card-meta">
              <div className="work-card-row">
                <span className="work-card-label">Name</span>
                <span className="work-card-value">{study.name}</span>
              </div>
              <div className="work-card-row">
                <span className="work-card-label">Year</span>
                <span className="work-card-value">{study.year}</span>
              </div>
              <div className="work-card-row">
                <span className="work-card-label">Sector</span>
                <span className="work-card-value">{study.sector}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
