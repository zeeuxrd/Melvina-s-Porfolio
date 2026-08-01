import React, { useState, useEffect } from 'react'
import './Header.css'

const mobileMenuLinks = [
  { label: 'Home', page: 'home', targetId: undefined },
  { label: 'Work', page: 'home', targetId: 'work' },
  { label: 'About', page: 'about', targetId: undefined },
  { label: 'Testimonials', page: 'home', targetId: 'testimonials' },
]

export default function Header({ theme, onToggleTheme, onNavigate, currentPage }) {
  const [imgError, setImgError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const avatarPath = '/src/assets/avatar.png';

  const handleNav = (page, targetId) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, targetId);
    }
  };

  const handleMobileNav = (page, targetId) => (e) => {
    setIsMenuOpen(false);
    handleNav(page, targetId)(e);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
    <header className="header-nav" aria-label="Main Navigation">
      <div className="nav-pill">
        {/* Left Side: Avatar & Brand Name */}
        <div className="nav-brand" onClick={handleNav('home')} title="Go to Homepage">
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
          <span className="nav-brand-name">Somtochukwu</span>
        </div>

        {/* Directional Nav Links */}
        <nav className="nav-links">
          <a 
            href="#work" 
            className={`nav-item ${currentPage === 'home' ? 'is-active' : ''}`}
            onClick={handleNav('home', 'work')}
          >
            work <span className="nav-arrow">↓</span>
          </a>
          <a 
            href="#about" 
            className={`nav-item ${currentPage === 'about' ? 'is-active' : ''}`}
            onClick={handleNav('about')}
          >
            about <span className="nav-arrow">→</span>
          </a>
          <a 
            href="#testimonials" 
            className="nav-item"
            onClick={handleNav('home', 'testimonials')}
          >
            testimonials <span className="nav-arrow">↓</span>
          </a>
          
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

          <button
            onClick={() => setIsMenuOpen(true)}
            className="mobile-menu-toggle"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hamburger-icon">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </nav>
      </div>
    </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-top">
          <span className="mobile-menu-brand">Somtochukwu</span>
          <div className="mobile-menu-top-actions">
            <button
              onClick={onToggleTheme}
              className="mobile-theme-toggle-btn"
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
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mobile-menu-close"
              aria-label="Close menu"
            >
              {'{ CLOSE }'}
            </button>
          </div>
        </div>

        <nav className="mobile-menu-list" aria-label="Mobile Navigation">
          {mobileMenuLinks.map((link) => (
            <a
              key={link.label}
              href={link.targetId ? `#${link.targetId}` : '#'}
              className="mobile-menu-item"
              onClick={handleMobileNav(link.page, link.targetId)}
            >
              <span className="mobile-menu-link-text">{link.label}</span>
              <span className="mobile-menu-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}

          <a
            href="mailto:hello@somtochukwu.com"
            className="mobile-menu-item"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="mobile-menu-link-text">Get in Touch</span>
            <span className="mobile-menu-arrow-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </>
  )
}
