import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import AboutPage from './pages/AboutPage'
import CaseStudyPage from './pages/CaseStudyPage'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [isLoading, setIsLoading] = useState(true);
  const [contentRevealed, setContentRevealed] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCaseId, setSelectedCaseId] = useState('case-01');

  useScrollReveal(`${currentPage}-${selectedCaseId}`);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (page, targetId) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);

    if (page === 'home' && targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenCase = (caseId) => {
    setSelectedCaseId(caseId);
    setCurrentPage('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {isLoading && (
        <Preloader
          onExitStart={() => setContentRevealed(true)}
          onComplete={() => setIsLoading(false)}
        />
      )}

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      <div className={`app-reveal ${contentRevealed || !isLoading ? 'app-reveal--visible' : ''}`}>
        {currentPage === 'about' ? (
          <main>
            <AboutPage onBackToHome={() => handleNavigate('home')} />
          </main>
        ) : currentPage === 'case-study' ? (
          <main>
            <CaseStudyPage
              caseStudyId={selectedCaseId}
              onBackToWork={() => handleNavigate('home', 'work')}
            />
          </main>
        ) : (
          <main>
            <Hero onSelectCase={handleOpenCase} />
            <Work onSelectCase={handleOpenCase} />
            <About onReadMore={() => handleNavigate('about')} />
            <Testimonials />
          </main>
        )}

        <Footer />
      </div>
    </div>
  )
}

export default App

