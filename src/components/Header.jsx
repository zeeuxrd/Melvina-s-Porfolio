import React, { useState } from 'react'
import './Header.css'

export default function Header({ theme, onToggleTheme }) {
  const [imgError, setImgError] = useState(false);
  const avatarPath = '/src/assets/avatar.png';

  return (
    <header className="header-nav" aria-label="Main Navigation">
      <div className="nav-pill">
        {/* Left Side: Avatar */}
        <div className="nav-avatar-container">
          {!imgError ? (
            <img 
              src={avatarPath} 
              alt="Somtochukwu's Avatar" 
              className="nav-avatar" 
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="nav-avatar-fallback" aria-label="Somtochukwu's Avatar Fallback">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-avatar-svg">
                <circle cx="18" cy="18" r="18" fill="var(--bg-primary)" />
                <path d="M18 10 C15.2 10 13 12.2 13 15 C13 17.8 15.2 20 18 20 C20.8 20 23 17.8 23 15 C23 12.2 20.8 10 18 10 Z M18 22 C13.5 22 9.5 24.5 9.5 27.5 C9.5 28.5 10.5 29 11.5 29 H24.5 C25.5 29 26.5 28.5 26.5 27.5 C26.5 24.5 22.5 22 18 22 Z" fill="var(--text-secondary)" />
              </svg>
            </div>
          )}
        </div>

        {/* Right Side: Links + Toggle */}
        <nav className="nav-links">
          <a href="#work" className="nav-item">work</a>
          <a href="#about" className="nav-item">about</a>
          <a href="#writing" className="nav-item">writing</a>
          
          <button 
            onClick={onToggleTheme} 
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                <circle cx="12" cy="12" r="5" fill="none" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
