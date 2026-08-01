import React from 'react'
import './Footer.css'
import peaceHandIcon from '../../images/assets/media__1785194193745.png'

// Bumpy scalloped cloud/bone blob path matching reference image
const scallopedBlobPath = "M 45 10 C 52 2, 68 2, 75 10 C 82 2, 98 2, 105 10 C 112 2, 128 2, 135 10 C 147 2, 168 12, 172 25 C 180 35, 180 45, 172 55 C 168 68, 147 78, 135 70 C 128 78, 112 78, 105 70 C 98 78, 82 78, 75 70 C 68 78, 52 78, 45 70 C 33 78, 12 68, 8 55 C 0 45, 0 35, 8 25 C 12 12, 33 2, 45 10 Z"

const blobTags = [
  { label: 'MARKETING', color: '#25C075', rot: -12, top: 45, left: '0%' },
  { label: 'STRATEGY', color: '#E8F152', rot: 4, top: 10, left: '6%' },
  { label: 'BRANDING', color: '#FF5733', rot: -8, top: 52, left: '14%' },
  { label: 'SALES', color: '#4A90E2', rot: -16, top: 0, left: '21%' },
  { label: 'USER RESEARCH', color: '#FFB8E0', rot: 8, top: 58, left: '27%' },
  { label: 'SYNTHESIS', color: '#FFF6D6', rot: -6, top: 62, left: '39%' },
  { label: 'STRATEGY', color: '#3BE88E', rot: -10, top: 22, left: '44%' },
  { label: 'INSIGHTS', color: '#FF5733', rot: 6, top: 56, left: '52%' },
  { label: 'UIUX DESIGN', color: '#5B86E5', rot: -7, top: 12, left: '59%' },
  { label: 'PORTFOLIO', color: '#E8F152', rot: 28, top: 48, left: '65%' },
  { label: 'HCD LABS', color: '#FF80AB', rot: -14, top: 2, left: '78%' },
  { label: 'AI WORKFLOWS', color: '#FFF6D6', rot: 4, top: 54, left: '76%' },
  { label: 'PRODUCT UX', color: '#4A90E2', rot: -6, top: 50, left: '86%' },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
]

const capabilityLinks = [
  { label: 'User Discovery', href: '#about' },
  { label: 'Usability Labs', href: '#about' },
  { label: 'Product Strategy', href: '#about' },
  { label: 'AI Synthesis', href: '#about' },
]

const connectLinks = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/somtochukwum-okechukwu/', external: true },
  { label: 'Twitter / X ↗', href: 'https://twitter.com', external: true },
  { label: 'Substack ↗', href: 'https://substack.com', external: true },
  { label: 'Email ✉', href: 'mailto:okechukwugentlesomto@gmail.com' },
]

export default function Footer() {
  const [hoveredIdx, setHoveredIdx] = React.useState(null)

  return (
    <footer className="footer-section" aria-label="Footer">
      
      {/* 1. Top Section: Big Bold Display Headline + Peace Sign Icon */}
      <div className="footer-top" data-reveal>
        <div className="footer-heading-wrap">
          <h2 className="footer-heading">
            THANK YOU FOR YOUR CURIOSITY.<br />
            LET’S BUILD SOMETHING COOL.
          </h2>
          <div className="footer-peace-icon" aria-hidden="true">
            <img src={peaceHandIcon} alt="Peace Hand Sign" className="peace-hand-img" />
          </div>
        </div>
      </div>

      {/* Dashed Divider Line 1 */}
      <div className="footer-divider" />

      {/* 2. Middle Section: 4-Column Layout */}
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-logo">Somtochukwu™</p>
          <p className="footer-tagline">
            Evidence-led strategy for modern product teams.<br />
            All rights reserved.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <p className="footer-column-title">Quick Links</p>
            {quickLinks.map((link) => (
              <a href={link.href} className="footer-link" key={link.label}>{link.label}</a>
            ))}
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Capabilities</p>
            {capabilityLinks.map((link) => (
              <a href={link.href} className="footer-link" key={link.label}>{link.label}</a>
            ))}
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Connect</p>
            {connectLinks.map((link) => (
              <a 
                href={link.href} 
                className="footer-link" 
                key={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dashed Divider Line 2 */}
      <div className="footer-divider" />

      {/* 3. Bottom Section: Scattered Scalloped Blob Pill Tags (Desktop Staggered Bouncy Drop / Mobile Infinite Marquee Loop) */}
      <div className="footer-blobs-canvas" aria-label="Interactive Capabilities Tags" data-reveal>
        <div className="footer-marquee-track">
          {[...blobTags, ...blobTags].map((tag, idx) => {
            const actualIdx = idx % blobTags.length
            let pushClass = ''
            if (hoveredIdx !== null) {
              if (actualIdx === hoveredIdx) {
                pushClass = 'is-hovered-jiggle'
              } else if (actualIdx === hoveredIdx - 1) {
                pushClass = 'is-pushed-left'
              } else if (actualIdx === hoveredIdx + 1) {
                pushClass = 'is-pushed-right'
              } else if (actualIdx === hoveredIdx - 2) {
                pushClass = 'is-pushed-far-left'
              } else if (actualIdx === hoveredIdx + 2) {
                pushClass = 'is-pushed-far-right'
              }
            }

            return (
              <div
                key={idx}
                className={`scalloped-blob-tag ${pushClass}`}
                style={{
                  color: tag.color,
                  '--rot': `${tag.rot}deg`,
                  '--pill-idx': actualIdx,
                  transform: `rotate(${tag.rot}deg)`,
                  top: `${tag.top}px`,
                  left: tag.left,
                  zIndex: actualIdx === hoveredIdx ? 100 : actualIdx + 1,
                }}
                onMouseEnter={() => setHoveredIdx(actualIdx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="blob-svg" aria-hidden="true">
                  <path d={scallopedBlobPath} fill="currentColor" />
                </svg>
                <span className="blob-label">{tag.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <p className="footer-copyright">© {new Date().getFullYear()} Somtochukwu. Designed &amp; Developed with Evidence.</p>
    </footer>
  )
}
