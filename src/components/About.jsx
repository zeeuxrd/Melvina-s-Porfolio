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
              I'm Somtochukwu, a UX researcher who has worked across fintech, SaaS, and consumer products, with a growing focus on evidence-led decision making and complex product strategy. I focus on turning ambiguous user behaviour into clear, actionable research that teams can actually build on.
            </p>

            <p className="about-paragraph">
              I approach research with a strategic, systems-level mindset—often combining qualitative deep-dives with quantitative behavioral signals to uncover constraints early. This hands-on approach ensures research insights work conceptually and in practice, bridging the gap between user needs and business implementation.
            </p>

            <p className="about-paragraph">
              I'm particularly interested in how human-centered research can enhance AI decision-making and how thoughtful synthesis can make intelligent systems more understandable and useful. Outside of work, I enjoy exploring emerging technology trends, participating in design workshops, and staying curious about human behavior across diverse cultures.
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
