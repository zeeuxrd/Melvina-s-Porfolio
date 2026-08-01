import React from 'react'

export default function IdeationBentoGridSection() {
  return (
    <div className="ideation-bento-container">
      <div className="ideation-bento-grid">
        
        {/* Card 1: Burnt Orange - Adaptive Micro-Routines (Concentric Circles) */}
        <div className="bento-card bento-card--orange">
          <div className="bento-card-art">
            <svg viewBox="0 0 200 200" className="bento-line-svg">
              <circle cx="100" cy="130" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="100" cy="130" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="100" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="100" y="134" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">05m</text>
              <text x="100" y="104" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">10m</text>
              <text x="100" y="74" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">15m</text>
            </svg>
          </div>
          <div className="bento-card-text">
            <h4 className="bento-card-title">Adaptive Micro-Routines</h4>
            <p className="bento-card-sub">Replacing rigid 45-min workout expectations with 5-15 min energy-matched stretches.</p>
          </div>
        </div>

        {/* Card 2: Deep Charcoal - Zero-Guilt Streak Engine (Tangential Arc Wave) */}
        <div className="bento-card bento-card--charcoal">
          <div className="bento-card-art">
            <svg viewBox="0 0 200 200" className="bento-line-svg">
              <circle cx="25" cy="130" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="65" cy="130" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="145" cy="130" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="bento-card-text">
            <h4 className="bento-card-title">Zero-Guilt Streak Engine</h4>
            <p className="bento-card-sub">Eliminating daily streak counters to protect maternal mental well-being.</p>
          </div>
        </div>

        {/* Card 3: Golden Mustard - Post-Natal Safety Matrix (3-Way Venn Diagram) */}
        <div className="bento-card bento-card--mustard">
          <div className="bento-card-art">
            <svg viewBox="0 0 200 200" className="bento-line-svg">
              <circle cx="100" cy="85" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="70" cy="135" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="130" cy="135" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="100" y="80" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">1</text>
              <text x="65" y="142" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">2</text>
              <text x="135" y="142" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">3</text>
            </svg>
          </div>
          <div className="bento-card-text">
            <h4 className="bento-card-title">Post-Natal Safety Matrix</h4>
            <p className="bento-card-sub">Automated Core &amp; Diastasis Recti safety filtering tailored to recovery timeline.</p>
          </div>
        </div>

        {/* Card 4: Linen Cream - Co-Design Synthesis (3D Mesh Hemisphere) */}
        <div className="bento-card bento-card--cream">
          <div className="bento-card-art">
            <svg viewBox="0 0 200 200" className="bento-line-svg">
              <ellipse cx="100" cy="130" rx="80" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="100" cy="130" rx="55" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="100" cy="130" rx="30" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="20" y1="130" x2="180" y2="130" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="bento-card-text">
            <h4 className="bento-card-title">Co-Design Synthesis</h4>
            <p className="bento-card-sub">Miro workshops with 12 nursing mothers, Product Managers, &amp; Obstetric Consultants.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
