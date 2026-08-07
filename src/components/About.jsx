import React from 'react'
import './About.css'

export default function About({ onReadMore }) {
  return (
    <section className="about-section" id="about" aria-label="About">
      <div className="about-container">
        <h2 className="about-display-title" data-reveal>
          UX researcher focused on complex products, systems, and human-centered strategy.
        </h2>

        <div className="about-divider" />

        <div className="about-story-wrap" data-reveal>
          <span className="about-tag">EXPERIENCE</span>

          <div className="about-paragraphs">
            <p className="about-paragraph">
              I bridge the gap between users and businesses to deliver measurable impact by designing systems, services, and digital experiences rooted in human-centered approaches. Through transforming deep user research into design direction, I ensure organizations move from uncertainty to clarity in decision-making.
            </p>
          </div>

          <button type="button" className="about-read-more-btn" onClick={onReadMore}>
            Read more <span className="about-read-more-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
