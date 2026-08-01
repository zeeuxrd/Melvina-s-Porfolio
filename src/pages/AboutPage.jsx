import React, { useState, useEffect } from 'react'
import './AboutPage.css'
import featureBannerImg from '../../images/assets/hero-image.png'
import polaroidImgDesk from '../../images/assets/media__1785187669727.jpg'
import polaroidImgMatcha from '../../images/assets/media__1785189117726.jpg'
import polaroidImgWorkshop from '../../images/assets/media__1785189276883.jpg'
import polaroidImgBooks from '../../images/assets/media__1785189547294.png'

const stats = [
  { number: '40+', label: 'Research Studies Led' },
  { number: '95%', label: 'Stakeholder Alignment' },
  { number: '25+', label: 'Product Decisions Influenced' },
]

const capabilities = [
  {
    title: 'Discovery & Generative Research',
    description: 'In-depth user interviews, contextual inquiry, field studies, and mental model mapping to uncover core user needs and unmet opportunities.',
  },
  {
    title: 'Evaluative & Usability Testing',
    description: 'Moderated and unmoderated usability labs, concept testing, A/B validation, and WCAG accessibility compliance across digital touchpoints.',
  },
  {
    title: 'Synthesis & Strategic Alignment',
    description: 'Customer journey mapping, persona synthesis, opportunity framing, and collaborative workshops that align cross-functional product teams.',
  },
  {
    title: 'Product Impact & Metrics',
    description: 'Prioritization matrices, usability benchmarking, and tracking post-launch behavioral metrics to measure genuine business and user outcomes.',
  },
]

const recognition = [
  { event: 'UXR Summit 2024', topic: 'De-risking AI Product Features Through User Research', year: '2024' },
  { event: 'Design & Strategy Journal', topic: 'Synthesizing Ambiguous Qualitative Feedback at Scale', year: '2023' },
  { event: 'Global HCD Conference', topic: 'Participatory Workshop Frameworks for Enterprise SaaS', year: '2023' },
]

const initialPositions = {
  terracotta: { x: -140, y: 20, rot: '-5deg' },
  peach: { x: 180, y: 240, rot: '4deg' },
  polaroid1: { x: 100, y: -240, rot: '7deg' },
  polaroid2: { x: -440, y: 180, rot: '-9deg' },
  polaroid3: { x: 420, y: -20, rot: '11deg' },
  polaroid4: { x: -20, y: -320, rot: '-6deg' },
  yellow: { x: -420, y: -140, rot: '-7deg' },
  lilac: { x: 380, y: -220, rot: '6deg' },
  mint: { x: 360, y: 310, rot: '-2deg' },
  lime: { x: 380, y: -350, rot: '-3deg' },
  blue: { x: -260, y: 280, rot: '-8deg' },
  quote: { x: -100, y: 165, rot: '5deg' },
  coral: { x: 210, y: -10, rot: '6deg' },
  music: { x: -350, y: -350, rot: '-4deg' },
}

export default function AboutPage({ onBackToHome }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [positions, setPositions] = useState(initialPositions)
  const [activeDragId, setActiveDragId] = useState(null)
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 })
  const [initialCardPos, setInitialCardPos] = useState({ x: 0, y: 0 })
  const [highestZ, setHighestZ] = useState(60)
  const [zIndices, setZIndices] = useState({})
  const [showDragCue, setShowDragCue] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDragCue(false)
    }, 4500)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = (e) => {
    e.stopPropagation()
    setIsPlaying((prev) => !prev)
  }

  const handleStartDrag = (id) => (e) => {
    if (e.button !== undefined && e.button !== 0) return
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    const newZ = highestZ + 1
    setHighestZ(newZ)
    setZIndices((prev) => ({ ...prev, [id]: newZ }))

    setActiveDragId(id)
    setDragStartPos({ x: clientX, y: clientY })
    setInitialCardPos(positions[id] || { x: 0, y: 0 })
  }

  useEffect(() => {
    if (!activeDragId) return

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY

      const dx = clientX - dragStartPos.x
      const dy = clientY - dragStartPos.y

      setPositions((prev) => ({
        ...prev,
        [activeDragId]: {
          ...prev[activeDragId],
          x: initialCardPos.x + dx,
          y: initialCardPos.y + dy,
        },
      }))
    }

    const handleEnd = () => {
      setActiveDragId(null)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('touchend', handleEnd)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [activeDragId, dragStartPos, initialCardPos])

  const getStickerProps = (id) => {
    const cardData = positions[id] || { x: 0, y: 0, rot: '0deg' }
    const customZ = zIndices[id]

    return {
      onMouseDown: handleStartDrag(id),
      onTouchStart: handleStartDrag(id),
      style: {
        '--rot': cardData.rot,
        '--tx': `${cardData.x}px`,
        '--ty': `${cardData.y}px`,
        ...(customZ ? { zIndex: customZ } : {}),
      },
    }
  }

  return (
    <div className="about-page" aria-label="Standalone About Page">
      <div className="about-page-container">
        
        {/* Back Link */}
        <button type="button" className="about-page-back-btn" onClick={onBackToHome}>
          <span aria-hidden="true">←</span> Back to Home
        </button>

        {/* 1. Hero Headline Statement */}
        <div className="about-page-hero-block">
          <h1 className="about-page-hero-title">
            I am Somtochukwu; a <em>UX researcher</em> specialized in turning ambiguous user behaviour into <em>evidence-led product strategy</em>.
          </h1>
        </div>

        {/* 2. Expanded Interactive Draggable Sticker Canvas */}
        <div className="about-sticker-canvas" aria-label="Interactive Draggable About Stickers">
          
          {/* Interactive Animated Drag Cue (One-Time Onboarding Hint) */}
          {showDragCue && (
            <div className="canvas-drag-cue" aria-hidden="true">
              <span className="cue-hand-icon">👆</span>
              <span className="cue-text">Drag to explore</span>
            </div>
          )}
          
          {/* Sticker 1: Main Terracotta Note */}
          <div className="sticker-card sticker-terracotta" {...getStickerProps('terracotta')}>
            <div className="sticker-holes">
              <span className="hole" />
              <span className="hole" />
              <span className="hole" />
              <span className="hole" />
            </div>
            <p className="sticker-terracotta-text">
              Somtochukwu is a strategic UX researcher with a passion for human behavior, evidence-led design, storytelling, and complex product systems.
            </p>
          </div>

          {/* Sticker 2: Peach Folded Note */}
          <div className="sticker-card sticker-peach" {...getStickerProps('peach')}>
            <p className="sticker-peach-text">
              Spearheading user research &amp; strategy across Fintech, SaaS, and consumer apps—tinkering with AI workflows and probably drinking green tea.
            </p>
            <div className="sticker-fold" />
          </div>

          {/* Polaroid Photo Sticker 1: Tulips & Laptop */}
          <div className="sticker-card sticker-polaroid polaroid-1" {...getStickerProps('polaroid1')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgDesk} alt="Somtochukwu Workspace" className="polaroid-img" draggable="false" />
            </div>
            <span className="polaroid-caption">Research Desk ✨</span>
          </div>

          {/* Polaroid Photo Sticker 2: Mindset & Books */}
          <div className="sticker-card sticker-polaroid polaroid-2" {...getStickerProps('polaroid2')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgBooks} alt="Mindset, Growth & Readings" className="polaroid-img" draggable="false" />
            </div>
            <span className="polaroid-caption">Mindset &amp; Readings 📚</span>
          </div>

          {/* Polaroid Photo Sticker 3: Research Workshop */}
          <div className="sticker-card sticker-polaroid polaroid-3" {...getStickerProps('polaroid3')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgWorkshop} alt="Somtochukwu Leading Design Research Workshop" className="polaroid-img" draggable="false" />
            </div>
            <span className="polaroid-caption">Research Workshop 📋</span>
          </div>

          {/* Polaroid Photo Sticker 4: Matcha & Gratitude Journal */}
          <div className="sticker-card sticker-polaroid polaroid-4" {...getStickerProps('polaroid4')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgMatcha} alt="Slow Mornings & Gratitude Journal" className="polaroid-img" draggable="false" />
            </div>
            <span className="polaroid-caption">Slow Mornings 🍵</span>
          </div>

          {/* Sticker 4: Yellow Method Checklist Note */}
          <div className="sticker-card sticker-yellow" {...getStickerProps('yellow')}>
            <div className="pin-accent" />
            <span className="sticker-yellow-title">TOOLKIT &amp; METHODS</span>
            <ul className="sticker-checklist">
              <li>✓ In-Depth Interviews</li>
              <li>✓ Usability Testing Labs</li>
              <li>✓ Customer Journey Maps</li>
              <li>✓ Mental Model Framing</li>
              <li>✓ Dovetail &amp; Miro Synthesis</li>
            </ul>
          </div>

          {/* Sticker 5: Lilac AI & Future Research Note */}
          <div className="sticker-card sticker-lilac" {...getStickerProps('lilac')}>
            <span className="sticker-lilac-tag">CURRENT FOCUS</span>
            <p className="sticker-lilac-text">
              Exploring how AI agents &amp; LLMs enhance qualitative synthesis while preserving authentic human nuance.
            </p>
          </div>

          {/* Sticker 6: Mint Green Ticket Stamp */}
          <div className="sticker-card sticker-mint" {...getStickerProps('mint')}>
            <span className="mint-code">UXR-2025 // GLOBAL</span>
            <span className="mint-title">EVIDENCE-LED STRATEGY</span>
          </div>

          {/* Sticker 7: Lime Tag */}
          <div className="sticker-card sticker-lime" {...getStickerProps('lime')}>
            <span>RESEARCH &amp; STRATEGY</span>
          </div>

          {/* Sticker 8: Sky Blue Emoticon Badge */}
          <div className="sticker-card sticker-blue" {...getStickerProps('blue')}>
            <span className="sticker-emoji">(o) .-(|,' \|/</span>
          </div>

          {/* Sticker 9: Washi Tape Quote Strip */}
          <div className="sticker-card sticker-quote-strip" {...getStickerProps('quote')}>
            <span>"Trade guesswork for evidence."</span>
          </div>

          {/* Sticker 11: Baby Pink Pastel Note (Right of Orange Card) */}
          <div className="sticker-card sticker-coral" {...getStickerProps('coral')}>
            <span className="coral-emoji">💡</span>
            <p className="coral-text">Qualitative Deep-Diver &amp; User-Obsessed</p>
          </div>

          {/* Sticker 10: Spotify-Style Now Playing Music Card */}
          <div
            className={`sticker-card sticker-music ${isPlaying ? 'is-playing' : 'is-paused'}`}
            {...getStickerProps('music')}
            onClick={togglePlay}
            title={isPlaying ? 'Click to pause sound equalizer' : 'Click to play sound equalizer'}
          >
            <div className="music-header">
              <span className="music-tag">ON REPEAT 🎵</span>
              <div className="music-equalizer">
                <span className="bar bar-1" />
                <span className="bar bar-2" />
                <span className="bar bar-3" />
                <span className="bar bar-4" />
              </div>
            </div>

            <div className="music-body">
              <div className="music-cover">
                <div className="music-vinyl-disc" />
              </div>
              <div className="music-meta">
                <span className="music-title">Baruch Hashem</span>
                <span className="music-artist">Dunsin Oyekan</span>
              </div>
            </div>

            <div className="music-progress-wrap">
              <div className="music-progress-bar">
                <div className="music-progress-fill" />
              </div>
              <div className="music-time">
                <span>1:42</span>
                <span>3:15</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Core Philosophy & Big Stats */}
        <div className="about-page-philosophy-block" data-reveal>
          <p className="about-page-philosophy-text">
            I help product organizations trade guesswork for <em>evidence-led decisions</em>,
            captivate audiences with <em>magnetic research insights</em>, align stakeholders around what users actually need, and ship experiences that drive <em>lasting retention</em>.
          </p>

          <div className="about-page-stats-grid">
            {stats.map((stat) => (
              <div className="about-page-stat-card" key={stat.label}>
                <span className="about-page-stat-number">{stat.number}</span>
                <span className="about-page-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Capabilities / Research Rigor List */}
        <div className="about-page-capabilities-block" data-reveal>
          <div className="about-page-capabilities-header">
            <span className="about-page-sub-tag">SPECIALIZATIONS</span>
            <h2 className="about-page-section-heading">Research Capabilities &amp; Rigor</h2>
          </div>

          <div className="about-page-capabilities-list">
            {capabilities.map((item) => (
              <div className="about-page-capability-row" key={item.title}>
                <h3 className="about-page-capability-title">{item.title}</h3>
                <p className="about-page-capability-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Thought Leadership & Recognition Table */}
        <div className="about-page-recognition-block" data-reveal>
          <div className="about-page-recognition-header">
            <span className="about-page-sub-tag">RECOGNITION</span>
            <h2 className="about-page-section-heading">Speaking &amp; Publications</h2>
          </div>

          <div className="about-page-table">
            <div className="about-page-table-header">
              <span>Event / Platform</span>
              <span>Topic / Title</span>
              <span className="text-right">Year</span>
            </div>

            {recognition.map((item) => (
              <div className="about-page-table-row" key={item.event}>
                <span className="about-page-table-col1">{item.event}</span>
                <span className="about-page-table-col2">{item.topic}</span>
                <span className="about-page-table-col3">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Closing Inbound CTA */}
        <div className="about-page-cta-block" data-reveal>
          <h2 className="about-page-cta-title">
            Interested in collaborating?<br />
            Let's discuss your next research initiative.
          </h2>
          <div className="about-page-cta-actions">
            <a href="mailto:okechukwugentlesomto@gmail.com" className="about-page-cta-btn primary">
              Get in Touch <span aria-hidden="true">→</span>
            </a>
            <a href="/resume.pdf" className="about-page-cta-btn secondary">
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
