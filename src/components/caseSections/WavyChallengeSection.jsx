import React from 'react'

export default function WavyChallengeSection() {
  return (
    <div className="fitflex-wavy-container">
      {/* Header info bar */}
      <div className="wavy-top-header">
        <span className="wavy-eyebrow">MATERNAL FRICTION PATHWAY</span>
        <span className="wavy-subtitle">4 Key Behavioral Obstacles Mapped</span>
      </div>

      {/* Wavy Node Canvas */}
      <div className="wavy-path-stage">
        {/* SVG S-Curve Line Connector with Dashed Pink Stroke & Arrowhead */}
        <svg className="wavy-svg-stroke" viewBox="0 0 900 380" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <marker id="pink-arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#FF6584" />
            </marker>
          </defs>
          <path
            d="M 250 68 C 262 160, 258 262, 340 295 C 410 310, 420 210, 450 190 C 480 170, 490 310, 560 295 C 620 262, 638 160, 650 68"
            stroke="#FF6584"
            strokeWidth="3.5"
            strokeDasharray="9 7"
            strokeLinecap="round"
            opacity="0.9"
            markerEnd="url(#pink-arrowhead)"
          />
        </svg>

        {/* 4 Nodes Along Curve */}
        <div className="wavy-nodes-layer">
          {/* Node 01 - Top Left */}
          <div className="wavy-node-item node-pos-1">
            <div className="node-text-block">
              <span className="node-step-num">01.</span>
              <h4 className="node-title">Time Constraints</h4>
              <p className="node-desc">
                Juggling work, infant care, and domestic duties leaves nursing mothers with severe time limitations for structured weight loss.
              </p>
            </div>
            <div className="node-glowing-dot" />
          </div>

          {/* Node 02 - Bottom Left */}
          <div className="wavy-node-item node-pos-2">
            <div className="node-text-block">
              <span className="node-step-num">02.</span>
              <h4 className="node-title">Low Motivation</h4>
              <p className="node-desc">
                Physical exhaustion and postpartum fatigue lead to low energy and reduced motivation to maintain consistent fitness habits.
              </p>
            </div>
            <div className="node-glowing-dot" />
          </div>

          {/* Node 03 - Bottom Right */}
          <div className="wavy-node-item node-pos-3">
            <div className="node-glowing-dot" />
            <div className="node-text-block">
              <span className="node-step-num">03.</span>
              <h4 className="node-title">Knowledge Gaps</h4>
              <p className="node-desc">
                Lack of clear, practical guidance tailored to postpartum nutritional needs and safe physical recovery.
              </p>
            </div>
          </div>

          {/* Node 04 - Top Right */}
          <div className="wavy-node-item node-pos-4">
            <div className="node-text-block">
              <span className="node-step-num">04.</span>
              <h4 className="node-title">Unhealthy Eating &amp; Cost</h4>
              <p className="node-desc">
                Convenience-driven eating habits coupled with the high cost of specialized weight loss diets create ongoing barriers.
              </p>
            </div>
            <div className="node-glowing-dot" />
          </div>
        </div>
      </div>
    </div>
  )
}
