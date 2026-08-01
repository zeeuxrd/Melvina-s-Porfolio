import React from 'react'

const LEGACY_STEPS = ['Buyer Intake', 'Manual Re-Entry ×4 Lenders', 'Sequential Review', '45-Min Wait', 'Deal Risk']
const VERSE_STEPS = ['Buyer Intake', 'Single-Entry Record', 'Parallel Multi-Lender Routing', 'Real-Time Pre-Screening', 'Fast Close']
const PILL_COLORS = ['flow-step--blue', 'flow-step--amber', 'flow-step--pink', 'flow-step--lilac', 'flow-step--purple']

export default function ReflectionsFlowImpactSection({ data }) {
  return (
    <div className="flow-impact-container">
      {/* Top: Legacy vs. Verse Workflow Diagram */}
      <div className="flow-diagram-card reflection-dark-card">
        <span className="flow-diagram-tag">LEGACY VS. VERSE WORKFLOW</span>

        <div className="flow-row">
          <span className="flow-row-label flow-row-label--legacy">LEGACY FLOW</span>
          <div className="flow-steps">
            {LEGACY_STEPS.map((step, i, arr) => {
              return (
                <React.Fragment key={step}>
                  <span className={`flow-step flow-step--muted ${PILL_COLORS[i % PILL_COLORS.length]}`}>{step}</span>
                  {i < arr.length - 1 && <span className="flow-arrow">→</span>}
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className="flow-divider" />

        <div className="flow-row">
          <span className="flow-row-label flow-row-label--verse">VERSE FLOW</span>
          <div className="flow-steps">
            {VERSE_STEPS.map((step, i, arr) => {
              return (
                <React.Fragment key={step}>
                  <span className={`flow-step flow-step--accent ${PILL_COLORS[i % PILL_COLORS.length]}`}>{step}</span>
                  {i < arr.length - 1 && <span className="flow-arrow flow-arrow--accent">→</span>}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>

      {/* Middle: Strategic Principles + Impact Recap */}
      <div className="principles-impact-row">
        <div className="principles-card reflection-dark-card">
          <span className="principles-card-tag">3 STRATEGIC PRINCIPLES</span>
          <ol className="principles-list">
            <li className="principle-item">
              <span className="principle-num">01</span>
              <div>
                <h4 className="principle-title">Systems Thinking Beats Feature Patches</h4>
                <p className="principle-text">Removing the re-entry step outright solved more than any UI polish on the old form ever could.</p>
              </div>
            </li>
            <li className="principle-item">
              <span className="principle-num">02</span>
              <div>
                <h4 className="principle-title">Transparency Builds Trust</h4>
                <p className="principle-text">Surfacing pre-approval logic upfront changed manager confidence in the product, not just their completion speed.</p>
              </div>
            </li>
            <li className="principle-item">
              <span className="principle-num">03</span>
              <div>
                <h4 className="principle-title">Operational Time Is The Real Currency</h4>
                <p className="principle-text">Every minute saved on data entry translated directly into deals that didn't walk out the door.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="impact-recap-card reflection-dark-card">
          <span className="impact-recap-tag">IMPACT RECAP</span>
          <div className="impact-recap-tiles">
            {(data.sections.find((s) => s.id === 'impact')?.metrics || []).map((m, idx) => (
              <div key={idx} className="impact-recap-tile">
                <span className="impact-recap-val">{m.val}</span>
                <span className="impact-recap-lbl">{m.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Closing Pull-Quote */}
      <div className="reflection-quote-card reflection-dark-card">
        <p className="reflection-quote-text">
          "In enterprise fintech, the interface isn't the product — the workflow underneath it is. Fix the system, and the screen takes care of itself."
        </p>
        <span className="reflection-quote-cite">— {data.role}</span>
      </div>
    </div>
  )
}
