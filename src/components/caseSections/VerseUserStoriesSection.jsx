import React from 'react'
import userPersonaImg from '../../../images/assets/user-persona-image.png'

export default function VerseUserStoriesSection({ profileImage = null }) {
  const activeImage = profileImage || userPersonaImg

  return (
    <div className="verse-persona-container">
      {/* Main 2x2 Grid */}
      <div className="verse-persona-grid">
        {/* Top-Left Card: Persona Profile Card */}
        <div className="persona-card persona-profile-card">
          <div className="persona-star-badge" aria-label="Featured Persona">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Profile Image */}
          <div className="persona-image-wrap">
            {activeImage ? (
              <img src={activeImage} alt="Will Jack - User Persona" className="persona-img" />
            ) : (
              <div className="persona-img-placeholder">
                <div className="placeholder-icon-ring">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="placeholder-lbl">Photo Slot</span>
                <span className="placeholder-sublbl">Image will be placed here</span>
              </div>
            )}
          </div>

          {/* Glassmorphic Name Overlay Banner */}
          <div className="persona-glass-banner">
            <h3 className="persona-name">Will Jack</h3>
            <p className="persona-role">Marketing Manager</p>
          </div>
        </div>

        {/* Top-Right Card: User Goals */}
        <div className="persona-card persona-goals-card">
          <h3 className="persona-card-title">User Goals</h3>
          <ul className="persona-list">
            <li className="persona-list-item">
              <span className="item-icon-badge icon-purple">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>To see</strong> reviews from other buyers and be sure the dealer is trustworthy.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-purple">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>To quickly</strong> compare vehicle options and credit terms.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-purple">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>To manage</strong> all digital documentation and policies.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-purple">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>To access</strong> quick customer support during live deals.</span>
            </li>
          </ul>
          <p className="persona-card-footer">
            These goals reflect a <strong>user's need for trust</strong> — convenience only matters when the dealer feels trustworthy.
          </p>
        </div>

        {/* Bottom-Left Card: Motivation */}
        <div className="persona-card persona-motivation-card">
          <h3 className="persona-card-title">Motivation</h3>
          <ul className="persona-list">
            <li className="persona-list-item">
              <span className="item-icon-badge icon-pink">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>Wants</strong> everything easily accessible on mobile.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-pink">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>Needs</strong> peace of mind regarding transparent financing rates.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-pink">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>Prefers</strong> straightforward digital contract execution.</span>
            </li>
          </ul>
          <p className="persona-card-footer">
            These motivations focus on users' need for <strong>simplicity, transparency</strong>, and peace of mind.
          </p>
        </div>

        {/* Bottom-Right Card: Challenges */}
        <div className="persona-card persona-challenges-card">
          <h3 className="persona-card-title">Challenges</h3>
          <ul className="persona-list">
            <li className="persona-list-item">
              <span className="item-icon-badge icon-orange">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>Finding the</strong> time to physically visit multiple distant dealerships.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-orange">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>Confusing insurance</strong> and financing jargon across portals.</span>
            </li>
            <li className="persona-list-item">
              <span className="item-icon-badge icon-orange">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span><strong>Delays and</strong> frustration waiting for multi-lender credit approvals.</span>
            </li>
          </ul>
          <p className="persona-card-footer">
            These challenges highlight the <strong>common frustrations users face</strong> with traditional vehicle financing.
          </p>
        </div>
      </div>
    </div>
  )
}

