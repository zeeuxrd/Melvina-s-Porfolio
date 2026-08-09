import React from 'react'

export default function ReflectionsFlowImpactSection({ data }) {
  return (
    <div className="flow-impact-container">
      {/* Strategic Principles Card */}
      <div className="principles-card reflection-pink-card">
        <span className="principles-card-tag">STRATEGIC TAKEAWAYS</span>
        <ol className="principles-list">
          <li className="principle-item">
            <span className="principle-num">01</span>
            <div>
              <h4 className="principle-title">Trust Over Speed in Car Financing</h4>
              <p className="principle-text">For urban vehicle buyers, digital convenience means little without pricing transparency. Building trust at every step is what converts browsers into buyers.</p>
            </div>
          </li>
          <li className="principle-item">
            <span className="principle-num">02</span>
            <div>
              <h4 className="principle-title">Single Intake Eliminates Deal Friction</h4>
              <p className="principle-text">Consolidating multi-lender credit checks into one form removed the 18-minute data tax, keeping buyers engaged during live sales negotiations.</p>
            </div>
          </li>
          <li className="principle-item">
            <span className="principle-num">03</span>
            <div>
              <h4 className="principle-title">Dual-Sided Workflow Alignment</h4>
              <p className="principle-text">Designing for both dealership finance managers and urban buyers ensured that credit automation empowered sales teams while reassuring customers.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

