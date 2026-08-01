import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="hero-content">
        {/* Intro line with leading emoji */}
        <p className="hero-intro">
          <span className="hero-intro-emoji" aria-hidden="true">🤟</span>
          Hey, I'm Somtochukwu, a UX researcher obsessed with…
        </p>

        {/* Headline with Inline Rotated Pill Badges (Flows Inline - Never Covers Text) */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            turning ambiguous user behaviour{' '}
            <span className="hero-inline-pill hero-sticker--purple rotate-neg-5">
              <span className="hero-pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              interviews
            </span>{' '}
            into research{' '}
            <span className="hero-inline-pill hero-sticker--blue rotate-pos-4">
              <span className="hero-pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l2.09 6.26L20 11.35l-5.91 2.09L12 21l-2.09-7.56L4 11.35l5.91-2.09z" />
                </svg>
              </span>
              synthesis
            </span>{' '}
            that teams{' '}
            <span className="hero-inline-pill hero-sticker--green rotate-neg-3">
              <span className="hero-pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              workshops
            </span>{' '}
            can actually act on through{' '}
            <span className="hero-inline-pill hero-sticker--pink rotate-neg-4">
              <span className="hero-pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </span>
              testing
            </span>{' '}
            &amp;{' '}
            <span className="hero-inline-pill hero-sticker--orange rotate-pos-6">
              <span className="hero-pill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="0.5" fill="currentColor" />
                </svg>
              </span>
              strategy
            </span>.
          </h1>
        </div>
      </div>
    </section>
  )
}
