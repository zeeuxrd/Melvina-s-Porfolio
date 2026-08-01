import React from 'react'

export default function ReflectionsBentoSection() {
  return (
    <div className="strat-bento-container">
      {/* Top Board Header */}
      <div className="strat-bento-header">
        <h3 className="strat-bento-title">Reflections &amp; Strategic Takeaways</h3>
        <p className="strat-bento-subtitle">
          Designing for vulnerable maternal cohorts required organizing product logic around genuine human constraints rather than artificial growth hacks.
        </p>
      </div>

      {/* 6-Card Strategy Bento Grid */}
      <div className="strat-bento-grid">
        
        {/* Card 1: Top Sky Blue Hero Card */}
        <div className="strat-card strat-card--blue strat-card--full">
          <div className="strat-card-top">
            <span className="strat-card-tag">UXR MATURITY ROADMAP</span>
          </div>
          
          <div className="roadmap-stepped-axis">
            <div className="roadmap-step">
              <span className="step-node">01</span>
              <span className="step-label">Discovery</span>
            </div>
            <div className="roadmap-line" />
            <div className="roadmap-step">
              <span className="step-node">02</span>
              <span className="step-label">Shadowing</span>
            </div>
            <div className="roadmap-line" />
            <div className="roadmap-step">
              <span className="step-node">03</span>
              <span className="step-label">Co-Design</span>
            </div>
            <div className="roadmap-line" />
            <div className="roadmap-step">
              <span className="step-node">04</span>
              <span className="step-label">Launch Impact</span>
            </div>
          </div>

          <div className="roadmap-text-row">
            <p className="roadmap-desc">
              Initial discovery across 8 West African urban hubs revealed that 78% of nursing mothers abandoned traditional fitness apps within 14 days due to streak-induced guilt.
            </p>
            <p className="roadmap-desc">
              Replacing rigid daily counters with flexible energy-matched micro-routines tripled 90-day retention and established clinical safety as a core product retainer.
            </p>
          </div>
        </div>

        {/* Middle Row Layout */}
        <div className="strat-middle-row">
          
          {/* Card 2: Crisp White Card */}
          <div className="strat-card strat-card--white">
            <h3 className="bento-title-48">EMPATHY MENTAL MODEL</h3>
            <div className="golden-circle-wrap">
              <div className="golden-circle-art">
                <svg viewBox="0 0 200 200" className="golden-circle-svg">
                  <circle cx="100" cy="100" r="90" fill="rgba(0, 0, 0, 0.03)" stroke="#121418" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="100" cy="100" r="60" fill="rgba(0, 0, 0, 0.05)" stroke="#121418" strokeWidth="1.2" />
                  <circle cx="100" cy="100" r="30" fill="#121418" />
                  <text x="100" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">WHY</text>
                  <text x="100" y="58" textAnchor="middle" fill="#121418" fontSize="10" fontFamily="sans-serif" fontWeight="bold">HOW</text>
                  <text x="100" y="24" textAnchor="middle" fill="#121418" fontSize="10" fontFamily="sans-serif" fontWeight="bold">WHAT</text>
                </svg>
              </div>
              
              <div className="golden-circle-callouts">
                <div className="callout-item">
                  <span className="callout-dot" />
                  <p><strong>WHY:</strong> Preserve maternal dignity &amp; mental well-being during postpartum recovery.</p>
                </div>
                <div className="callout-item">
                  <span className="callout-dot" />
                  <p><strong>HOW:</strong> Eliminate streak counters &amp; adapt routines to infant feeding schedules.</p>
                </div>
                <div className="callout-item">
                  <span className="callout-dot" />
                  <p><strong>WHAT:</strong> 5-to-15 min micro-stretches &amp; Diastasis Recti safety filters.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stack */}
          <div className="strat-right-stack">
            {/* Card 3 */}
            <div className="strat-card strat-card--green">
              <span className="strat-card-tag dark-tag">RESEARCH VALUES</span>
              <div className="pill-tags-grid">
                <span className="bento-pill-tag active">Dignity First</span>
                <span className="bento-pill-tag active">Clinical Safety</span>
                <span className="bento-pill-tag active">Zero Guilt</span>
                <span className="bento-pill-tag">Flexibility</span>
                <span className="bento-pill-tag">Authentic Empathy</span>
                <span className="bento-pill-tag">Co-Design</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="strat-card strat-card--pink">
              <span className="strat-card-tag dark-tag">MATERNAL ARCHETYPES</span>
              <div className="pill-tags-grid">
                <span className="bento-pill-tag active">First-Time Moms</span>
                <span className="bento-pill-tag active">Multi-Child Moms</span>
                <span className="bento-pill-tag">Postpartum Recovery</span>
                <span className="bento-pill-tag">Sleep Deprived</span>
                <span className="bento-pill-tag">Infant Governed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row Layout */}
        <div className="strat-bottom-row">
          
          {/* Card 5 */}
          <div className="strat-card strat-card--purple">
            <span className="strat-card-tag dark-tag">PRODUCT PRINCIPLES SLIDERS</span>
            <div className="bento-sliders-list">
              <div className="slider-item">
                <div className="slider-labels">
                  <span>Streak Guilt</span>
                  <span>Zero-Guilt Engine</span>
                </div>
                <div className="slider-bar-track">
                  <div className="slider-fill-bar" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-labels">
                  <span>Fixed 45-Min Workouts</span>
                  <span>Adaptive Micro-Routines</span>
                </div>
                <div className="slider-bar-track">
                  <div className="slider-fill-bar" style={{ width: '90%' }} />
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-labels">
                  <span>One-Size-Fits-All</span>
                  <span>Diastasis Recti Safety</span>
                </div>
                <div className="slider-bar-track">
                  <div className="slider-fill-bar" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="slider-item">
                <div className="slider-labels">
                  <span>Growth Hacks</span>
                  <span>Maternal Empathy</span>
                </div>
                <div className="slider-bar-track">
                  <div className="slider-fill-bar" style={{ width: '88%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="strat-card strat-card--yellow">
            <span className="strat-card-tag dark-tag">FITFLEX POSITIONING MATRIX</span>
            <div className="matrix-chart-wrap">
              <div className="matrix-quad-grid">
                <div className="matrix-axis-label axis-y-top">Zero Guilt</div>
                <div className="matrix-axis-label axis-y-bottom">High Guilt</div>
                <div className="matrix-axis-label axis-x-left">Fixed Routines</div>
                <div className="matrix-axis-label axis-x-right">Adaptive Routines</div>
                
                <div className="matrix-line-h" />
                <div className="matrix-line-v" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
