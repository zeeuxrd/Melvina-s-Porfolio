import React from 'react'

export default function FindingsDotMatrixSection() {
  return (
    <div className="findings-matrix-container">
      {/* Left Column: Stat Callout & Data Context */}
      <div className="findings-stat-col">
        <span className="findings-stat-val">84%</span>
        <p className="findings-stat-desc">
          of nursing mothers abandoned traditional fitness apps due to rigid streak counters triggering emotional guilt during early recovery.
        </p>
        <div className="findings-provenance-tag">
          <span className="provenance-dot" />
          <span className="provenance-txt">Dovetail Thematic Synthesis • 32 Interviews</span>
        </div>
      </div>

      {/* Right Column: 10x10 Waffle Dot Grid Matrix */}
      <div className="findings-matrix-col">
        <div className="matrix-labels-wrap">
          <span className="matrix-label matrix-label--purple">84% Habit Abandonment</span>
          <span className="matrix-label matrix-label--lime">16% Maintained Routine</span>
        </div>
        <div className="waffle-grid-matrix">
          {Array.from({ length: 100 }).map((_, i) => {
            const isPurple = i < 84
            return (
              <div
                key={i}
                className={`waffle-dot ${isPurple ? 'waffle-dot--purple' : 'waffle-dot--lime'}`}
                title={isPurple ? `Participant #${i + 1}: Abandoned due to streak guilt` : `Participant #${i + 1}: Maintained flexible micro-routine`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
