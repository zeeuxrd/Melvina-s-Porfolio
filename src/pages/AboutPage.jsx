import React, { useState, useEffect } from 'react'
import './AboutPage.css'
import featureBannerImg from '../../images/assets/hero-image.png'
import polaroidImgDesk from '../../images/assets/media__1785187669727.jpg'
import polaroidImgMatcha from '../../images/assets/media__1785189117726.jpg'
import polaroidImgWorkshop from '../../images/assets/media__1785189276883.jpg'
import polaroidImgBooks from '../../images/assets/media__1785189547294.png'
import polaroidImgVacation from '../../images/assets/fifth-about-image.png'
import polaroidImgSixth from '../../images/assets/sixth-about-image.png'
import outsideUxImg1 from '../../images/assets/outside-of-ux.png'
import outsideUxImg2 from '../../images/assets/outisde-of-ux-too.jpg'
import outsideUxImg3 from '../../images/assets/ouside-of-ux-third image.png'

const stats = [
  { number: '300+', label: 'Women Researched Across Nigeria' },
  { number: '45%', label: 'BOSSCAB Crash Reduction' },
  { number: '300+', label: 'Young Beginners Mentored' },
]

const workExperience = [
  {
    company: 'DODO DESIGN LIMITED',
    period: '2023 - PRESENT',
    role: 'UX Researcher & Strategy Lead',
    highlights: [
      'Collaborated with design team to conduct comprehensive research in Northern and Southern Nigeria, capturing insights from 300+ women and translating them into strategies that improved adoption, engagement, and health outcomes.',
      'Developed a design critique tool that made feedback more actionable and forward-looking, increasing the quality of tracked and prioritized feedback by an estimated 20–40% compared to unstructured sessions.',
      'Optimized the design review process, leveraging strategic planning sessions to improve team efficiency, reducing cycle time by 20%.',
    ],
  },
  {
    company: 'NUGI TECHNOLOGIES',
    period: '2021 - 2023',
    role: 'Product Researcher & Usability Lead',
    highlights: [
      'Led usability testing for a ride-hailing product BOSSCAB, achieving a 45% reduction in app crashes and boosting user retention and trust.',
    ],
  },
  {
    company: 'UTIVA',
    period: 'JAN. 2021 - MAR. 2021',
    role: 'Product Trainer & Cross-Functional Lead',
    highlights: [
      'Led a cross-functional team through product planning, roadmapping, and execution, resulting in the successful training of over 300 young beginners in programming and product design in Enugu State, Nigeria.',
    ],
  },
]

const capabilities = [
  {
    title: 'Discovery & Generative Fieldwork',
    description: 'Conducting comprehensive field research across diverse regions (e.g. Northern & Southern Nigeria), capturing authentic insights to shape strategic adoption and health/social outcomes.',
  },
  {
    title: 'Evaluative Testing & Crash Reduction',
    description: 'Leading usability testing labs (e.g. BOSSCAB ride-hailing app), identifying critical user pain points to achieve a 45% crash reduction and boost retention.',
  },
  {
    title: 'Critique Tooling & Review Optimization',
    description: 'Developing custom design critique tools that make feedback actionable, boosting tracked feedback quality by 20–40% and cutting review cycle times by 20%.',
  },
  {
    title: 'Community Building & Mentorship',
    description: 'Leading cross-functional teams to plan and execute training programs, actively mentoring over 300 young beginners in product design and programming.',
  },
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
            With a background in <em>Chemical Engineering</em>, I’ve always been drawn to systems, problem-solving, and the <em>"why"</em> behind details.
          </h1>
          <p className="about-page-hero-sub">
            Coupled with my strength as an active listener, design became the space where these skills come together to create meaningful impact. The process most times is what makes the difference, so I thrive in making sense of the fuzziness of the design process.
          </p>
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
          
          {/* Polaroid Photo Sticker: Sixth About Image */}
          <div className="sticker-card sticker-polaroid polaroid-terracotta" {...getStickerProps('terracotta')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgSixth} alt="Design Process & Systems" className="polaroid-img" draggable="false" loading="lazy" decoding="async" />
            </div>
            <span className="polaroid-caption">Systems &amp; Storytelling ✨</span>
          </div>

          {/* Sticker 4: Yellow Method Checklist Note */}
          <div className="sticker-card sticker-yellow" {...getStickerProps('yellow')}>
            <div className="pin-accent" />
            <span className="sticker-yellow-title">IMPACT SNAPSHOT</span>
            <ul className="sticker-checklist">
              <li>✓ 300+ Women Health Research</li>
              <li>✓ BOSSCAB: 45% Crash Cut</li>
              <li>✓ Critique Tool: 20-40% Lift</li>
              <li>✓ Review Cycle: 20% Faster</li>
            </ul>
          </div>

          {/* Arch Portal Photo Sticker: Sun & Sea Vacation */}
          <div className="sticker-card sticker-arch-portal polaroid-singing" {...getStickerProps('peach')}>
            <div className="tape-accent" />
            <div className="arch-img-frame">
              <img src={polaroidImgVacation} alt="Sun, Sea & Vacation Vibes" className="arch-img" draggable="false" loading="lazy" decoding="async" />
            </div>
            <span className="arch-caption">Sun, Sea &amp; Naps 🌸</span>
          </div>

          {/* Sticker 5: Lilac AI & Future Research Note */}
          <div className="sticker-card sticker-lilac" {...getStickerProps('lilac')}>
            <span className="sticker-lilac-tag">CRITIQUE FRAMEWORKS</span>
            <p className="sticker-lilac-text">
              Developing design review &amp; critique tools that turn feedback into actionable forward-looking design direction.
            </p>
          </div>

          {/* Polaroid Photo Sticker 1: Tulips & Laptop */}
          <div className="sticker-card sticker-polaroid polaroid-1" {...getStickerProps('polaroid1')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgDesk} alt="Somtochukwu Workspace" className="polaroid-img" draggable="false" loading="lazy" decoding="async" />
            </div>
            <span className="polaroid-caption">Research Desk &amp; Tulips 🌷</span>
          </div>

          {/* Sticker 6: Mint Green Ticket Stamp */}
          <div className="sticker-card sticker-mint" {...getStickerProps('mint')}>
            <span className="mint-code">CHEMICAL ENG ➔ UXR</span>
            <span className="mint-title">SYSTEMS &amp; HUMAN PROCESS</span>
          </div>

          {/* Polaroid Photo Sticker 2: Mindset & Books */}
          <div className="sticker-card sticker-polaroid polaroid-2" {...getStickerProps('polaroid2')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgBooks} alt="Mindset, Growth & Readings" className="polaroid-img" draggable="false" loading="lazy" decoding="async" />
            </div>
            <span className="polaroid-caption">Strategy &amp; Mindset 📚</span>
          </div>

          {/* Sticker 11: Baby Pink Pastel Note */}
          <div className="sticker-card sticker-coral" {...getStickerProps('coral')}>
            <span className="coral-emoji">🎙️</span>
            <p className="coral-text">Singing, Long Naps &amp; Road Trips</p>
          </div>

          {/* Polaroid Photo Sticker 3: Research Workshop */}
          <div className="sticker-card sticker-polaroid polaroid-3" {...getStickerProps('polaroid3')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgWorkshop} alt="Somtochukwu Leading Design Research Workshop" className="polaroid-img" draggable="false" loading="lazy" decoding="async" />
            </div>
            <span className="polaroid-caption">Mentorship &amp; Labs 📋</span>
          </div>

          {/* Sticker 10: Spotify-Style Now Playing Music Card */}
          <div
            className={`sticker-card sticker-music ${isPlaying ? 'is-playing' : 'is-paused'}`}
            {...getStickerProps('music')}
            onClick={togglePlay}
            title={isPlaying ? 'Click to pause sound equalizer' : 'Click to play sound equalizer'}
          >
            <div className="music-header">
              <span className="music-tag">ROAD TRIP VIBES 🎵</span>
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
                <span>3:50</span>
              </div>
            </div>
          </div>

          {/* Polaroid Photo Sticker 4: Matcha & Gratitude Journal */}
          <div className="sticker-card sticker-polaroid polaroid-4" {...getStickerProps('polaroid4')}>
            <div className="tape-accent" />
            <div className="polaroid-img-frame">
              <img src={polaroidImgMatcha} alt="Slow Mornings & Gratitude Journal" className="polaroid-img" draggable="false" loading="lazy" decoding="async" />
            </div>
            <span className="polaroid-caption">Matcha &amp; Slow Mornings 🍵</span>
          </div>

          {/* Sticker 9: Washi Tape Quote Strip */}
          <div className="sticker-card sticker-quote-strip" {...getStickerProps('quote')}>
            <span>"The process is what makes the difference."</span>
          </div>
        </div>

        {/* 3. Core Philosophy & Big Stats */}
        <div className="about-page-philosophy-block" data-reveal>
          <p className="about-page-philosophy-text">
            I bridge the gap between <em>users and businesses</em> to deliver measurable impact by designing systems, services, and digital experiences rooted in human-centered approaches. Through transforming deep user research into <em>design direction</em>, I ensure organizations move from <em>uncertainty to clarity</em> in decision-making.
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

        {/* 4. Structured Work Experience Timeline & Impact */}
        <div className="about-page-capabilities-block" data-reveal>
          <div className="about-page-capabilities-header">
            <span className="about-page-sub-tag">CAREER HISTORY</span>
            <h2 className="about-page-section-heading">Overview of Work Experience</h2>
          </div>

          <div className="about-page-experience-list">
            {workExperience.map((exp) => (
              <div className="about-page-experience-card" key={exp.company}>
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-company-title">{exp.company}</h3>
                    <span className="experience-role-lbl">{exp.role}</span>
                  </div>
                  <span className="experience-period-badge">{exp.period}</span>
                </div>
                <ul className="experience-bullets-list">
                  {exp.highlights.map((bullet, i) => (
                    <li key={i} className="experience-bullet-item">
                      <span className="bullet-dot" aria-hidden="true">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Outside of UX & Mentorship Section */}
        <div className="about-page-recognition-block" data-reveal style={{ marginTop: '5rem' }}>
          <div className="about-page-recognition-header">
            <span className="about-page-sub-tag">LIFE &amp; COMMUNITY</span>
            <h2 className="about-page-section-heading">Outside of UX</h2>
          </div>

          <div className="about-page-outside-card">
            <p className="about-page-outside-text">
              I sing, take a ride or go on a road trip, read or take long naps, spend time with family and friends. I’m also passionate about mentorship—having benefited from it myself, I actively guide younger designers and have mentored several over the years.
            </p>

            <div className="about-page-outside-collage">
              {/* Main Anchor Hero Image */}
              <div className="outside-main-card">
                <div className="outside-main-img-frame">
                  <img src={outsideUxImg1} alt="Somtochukwu Outside of UX Main" className="outside-main-img" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
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
