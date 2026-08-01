import React from 'react'

export default function FallbackSection({ sec, index }) {
  return (
    <div className="mock-canvas-inner">
      <div className="large-screen-mock">
        <span className="mock-badge">RESEARCH ARTIFACT {index + 1}</span>
        <p className="mock-title">{sec.mockLabel}</p>
      </div>
    </div>
  )
}
