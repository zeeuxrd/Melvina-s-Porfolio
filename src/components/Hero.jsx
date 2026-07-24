import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="hero-content">
        {/* Conversational intro line */}
        <p className="hero-intro">
          Hi, I'm Somtochukwu 👋
        </p>

        {/* Large headline with accent badge */}
        <h1 className="hero-title">
          Translating User Insights Into <span className="hero-title-highlight">Strategic</span> Research<br />Outcomes
        </h1>

        {/* Supporting description */}
        <p className="hero-description">
          I help product teams understand user needs deeply—and translate those insights into measurable business outcomes, reducing product friction and increasing retention.
        </p>

      </div>
    </section>
  )
}
