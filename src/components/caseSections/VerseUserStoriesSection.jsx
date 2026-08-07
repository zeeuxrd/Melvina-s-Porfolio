import React from 'react'

export default function VerseUserStoriesSection() {
  return (
    <div className="verse-user-story-artifact-container">
      <div className="user-stories-card-inner">
        <div className="user-stories-pill-badge">User Stories &amp; Problem Statement</div>
        
        <div className="user-story-structured-grid">
          {/* User Story 01 */}
          <div className="structured-story-card card-theme-urban">
            <div className="story-header-row">
              <span className="story-persona-tag">USER STORY 01</span>
              <span className="story-source-badge">Derived from research synthesis</span>
            </div>
            <p className="story-quote-body">
              "As a car buyer, I want to be able to see the review of other buyers to be sure of I’m purchasing from a trustworthy dealer."
            </p>
          </div>

          {/* User Story 02 */}
          <div className="structured-story-card card-theme-finance">
            <div className="story-header-row">
              <span className="story-persona-tag">USER STORY 02</span>
              <span className="story-source-badge">Derived from research synthesis</span>
            </div>
            <p className="story-quote-body">
              "As a buyer, I want to be able to pay for the car through various options, so that I choose a convenient option."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
