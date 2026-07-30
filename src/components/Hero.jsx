import React from 'react'
import './Hero.css'

const stickers = [
  {
    label: 'interviews',
    tone: 'purple',
    style: { left: '9%', top: '11%', transform: 'rotate(-13deg)', zIndex: 3 },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: 'synthesis',
    tone: 'blue',
    style: { left: '24%', top: '47%', transform: 'rotate(-6deg)', zIndex: 1 },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.09 6.26L20 11.35l-5.91 2.09L12 21l-2.09-7.56L4 11.35l5.91-2.09z" />
      </svg>
    ),
  },
  {
    label: 'testing',
    tone: 'pink',
    style: { left: '41%', top: '74%', transform: 'rotate(-11deg)', zIndex: 5 },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: 'strategy',
    tone: 'orange',
    style: { left: '69%', top: '36%', transform: 'rotate(13deg)', zIndex: 4 },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'workshops',
    tone: 'green',
    style: { left: '57%', top: '4%', transform: 'rotate(8deg)', zIndex: 2 },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="hero-content">
        {/* Intro line with leading emoji */}
        <p className="hero-intro">
          <span className="hero-intro-emoji" aria-hidden="true">🤟</span>
          Hey, I'm Somtochukwu, a UX researcher obsessed with…
        </p>

        {/* Headline with the sticker pile layered over it */}
        <div className="hero-headline-wrap">
          <h1 className="hero-title">
            turning ambiguous user behaviour into research teams can actually act on
          </h1>

          <div className="hero-stickers" aria-hidden="true">
            {stickers.map((sticker) => (
              <span
                className={`hero-sticker hero-sticker--${sticker.tone}`}
                style={sticker.style}
                key={sticker.label}
              >
                <span className="hero-sticker-icon">{sticker.icon}</span>
                {sticker.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
