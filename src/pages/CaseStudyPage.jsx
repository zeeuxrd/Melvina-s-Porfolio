import React, { useState, useEffect } from 'react'
import './CaseStudyPage.css'
import fitflexHeroImg from '../../images/assets/media__1785430189021.jpg'
import architectureImg from '../../images/assets/media__1785429137899.png'
import overviewCard3Img from '../../images/assets/media__1785432917311.jpg'
import verseHeroImg from '../../images/assets/media__1785441835053.png'
import verseArchitectureImg from '../../images/assets/media__1785442702780.png'
import { SECTION_RENDERERS, FallbackSection, normalizeSection } from '../components/caseSections'

const caseStudyData = {
  'case-01': {
    title: 'Fitflex',
    heroImage: fitflexHeroImg,
    architectureImage: architectureImg,
    overviewCard3Image: overviewCard3Img,
    tagline: 'Designing realistic post-natal health & retention solutions nursing mothers could trust.',
    heroDescription: 'Fitflex is a privacy-first maternal health platform designed to help new mothers build healthy, realistic routines. Many new mothers abandon traditional fitness apps because existing routines impose aggressive goals that ignore post-natal recovery, sleep deprivation, and tight schedules.',
    role: 'Lead UX Researcher & Product Strategist',
    timeline: '2025',
    discipline: 'Maternal UX & Health',
    team: 'DODO Team & Health Experts',
    
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        text: 'Fitflex set out to solve postpartum health retention for nursing mothers across West Africa. Research revealed that 78% of mothers abandoned traditional fitness apps within 14 days because current products impose high-intensity workouts that cause physical discomfort and emotional guilt during early motherhood.',
        mockLabel: 'Executive Research Scope & Problem Context Artifact',
        mockType: 'overview-mobile-flow',
      },
      {
        id: 'challenge',
        title: 'Challenge',
        text: 'Postpartum recovery is fraught with guilt and fatigue. Primary research highlighted that rigid daily workout notifications and unadapted core exercises created physical discomfort and anxiety. Our challenge was redesigning the core habit-building model around infant feeding schedules and post-natal physiological constraints.',
        mockLabel: 'Maternal Friction Pathway & Drop-Off Nodes',
        mockType: 'fitflex-wavy-challenge',
      },
      {
        id: 'research',
        title: 'Research & Discovery',
        text: 'To establish an evidence-led foundation, we executed a 12-week triangulated research protocol across 8 West African urban hubs (Lagos, Accra, Abuja, Abidjan, Dakar, Kumasi, Ibadan, Yaoundé). We combined 32 semi-structured qualitative interviews, 14 contextual in-home shadowing sessions during morning infant-care routines, and a 3-week WhatsApp diary study with 24 nursing mothers. Our research aimed to map the intersection between physical post-natal recovery, sleep fragmentation, and emotional guilt triggered by conventional fitness apps.',
        mockLabel: 'Field Methodology & 8-Country Sampling Matrix',
        mockType: 'sticky-board',
        stickyNotes: [
          {
            type: 'terracotta',
            tag: 'FIELD SCOPE & SAMPLING (N=32)',
            lines: [
              '• Target: First-time & multi-child nursing mothers (0-12 mos postpartum).',
              '• Markets: 8 West African urban hubs (Lagos, Accra, Abidjan, Dakar).',
              '• Screening: Experiencing fatigue, sleep fragmentation, or app abandonment within 30 days of birth.',
            ],
          },
          {
            type: 'yellow',
            tag: 'TRIANGULATED METHODOLOGY PROTOCOL',
            checklist: [
              '✓ 14 Contextual In-Home Shadowing Sessions (6 AM - 10 AM routines)',
              '✓ 3-Week WhatsApp Diary Study (tracking energy levels 1-10)',
              '✓ 18 Semi-Structured Remote Interviews (body image & spousal support)',
              '✓ Quantitative Drop-Off Cohort Analysis (12,000 baseline installs)',
            ],
          },
          {
            type: 'pink',
            tag: 'KEY BEHAVIORAL FRICTION FINDINGS',
            lines: [
              '1. The "Guilt Spiral" (78% Churn): Fixed daily streak counters triggered intense self-blame when missed.',
              '2. Infant-Governed Schedules: 92% reported baby feeding cycles rendered calendar notifications useless.',
              '3. Physical Trauma Fear: 64% feared unadapted core workouts worsened diastasis recti.',
            ],
          },
          {
            type: 'lilac',
            tag: 'DATA SYNTHESIS & FRAMEWORK',
            lines: [
              '• Dovetail Coding: 240+ tagged video clips & 18 affinity clusters.',
              '• Framework Built: "Maternal Energy-Cap Model" sorting routines into 3 tiers (5-min stretch, 15-min low-impact, recovery).',
              '• Strategy Shift: Replaced rigid streaks with "Zero-Guilt Adaptive Habits."',
            ],
          },
          {
            type: 'mint',
            tag: 'RESEARCH RIGOR & METRICS',
            lines: [
              'Duration: 12-Week Sprint | Transcripts Coded: 32 Hours | Dovetail Tags: 240+ | Cross-Functional Alignment: 100% agreement from PM, Engineering, & Medical Consultants.',
            ],
          },
        ],
      },
      {
        id: 'findings',
        title: 'Key Findings & Insights',
        text: 'Synthesizing qualitative data into Dovetail revealed three main themes: (1) Guilt & All-or-Nothing Mindsets when missing workouts, (2) Predictability Crises driven by baby sleep cycles, and (3) Post-Natal Physical Discomfort from standard unadapted exercise routines.',
        quote: '"I don\'t need an app to tell me I failed today. I need an app that understands I spent 4 hours soothing my baby and offers a 5-minute stretch instead."',
        quoteAuthor: 'Participant #14 — Nursing mother of 4-month-old',
        mockLabel: 'Dovetail Thematic Coding & Affinity Cluster Canvas',
        mockType: 'findings-bar-chart',
      },
      {
        id: 'ideation',
        title: 'Ideation & Design Process',
        text: 'Working cross-functionally with health specialists and product engineers, we facilitated Miro co-design workshops to frame "Adaptive Micro-Routines" and a "Post-Natal Safety Filter" that adjust workout recommendations based on real-time maternal energy levels.',
        mockLabel: 'Miro Co-Design Workshops & Journey Maps',
        mockType: 'ideation-slider-matrix',
      },
      {
        id: 'testing',
        title: 'Feedback & Testing Loops',
        text: 'We ran 3 iterative rounds of moderated usability testing labs with 24 nursing mothers. We measured task completion rates, comprehension of energy-based selection, and emotional confidence during session completion.',
        mockLabel: 'Evaluative Usability Testing Scorecards & Task Logs',
        mockType: 'triple-card',
      },
      {
        id: 'impact',
        title: 'Outcome & Impact',
        text: 'The research recommendations led to the launch of "Adaptive Micro-Routines" and a "Zero-Guilt System." 90-day retention increased by 42%, onboarding drop-off fell by 28%, and product teams permanently adopted our maternal mental model framework.',
        metrics: [
          { val: '+42%', lbl: '90-Day App Retention' },
          { val: '94%', lbl: 'Task Completion Rate' },
          { val: '3.8x', lbl: 'Habit Consistency' },
        ],
        mockLabel: 'Post-Launch Retention Analytics & Funnel Comparison',
        mockType: 'impact-dashboard-grid',
      },
      {
        id: 'reflections',
        title: 'Reflections',
        text: 'Designing for vulnerable user groups requires replacing growth hacks with authentic empathy. Complexity doesn\'t disappear when features are removed; it disappears when systems are organized around genuine human constraints.',
        mockLabel: 'UXR Maturity & Project Timeline Framework',
        mockType: 'fitflex-timeline-reflection',
      },
    ],
  },
  
  'case-02': {
    title: 'Verse',
    heroImage: verseArchitectureImg,
    architectureImage: verseHeroImg,
    tagline: 'Eliminating multi-portal friction in enterprise automotive financing for Nigerian dealerships.',
    heroDescription: 'Verse is a B2B automotive financing portal connecting dealership finance & insurance (F&I) managers with multi-tier lending institutions. Legacy credit systems forced managers to spend up to 45 minutes re-typing buyer data across disconnected lender portals—time that directly fed deal slippage during live negotiations.',
    role: 'Senior UX Researcher & Systems Analyst',
    timeline: '2024',
    discipline: 'Fintech & Enterprise Systems',
    team: 'Verse Product, Engineering & Lender API Partners',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        text: 'Verse is an AI-powered enterprise automotive financing and smart mobility portal connecting Nigerian franchise dealerships with multi-tier lending institutions. Conversational AI assistants, real-time credit orchestration, and automated pre-screening let dealership F&I managers calculate payments, review damage inspection reports, select insurance tiers, and arrange leases—such as Volvo EX30 electric crossover deployments—in under 5 minutes. The research goal was to eliminate multi-portal data re-entry and cut deal completion time from 45 minutes to 16.',
        mockLabel: 'AI Automotive Financing & System Architecture Portal',
        mockType: 'overview-modules-grid',
      },
      {
        id: 'challenge',
        title: 'Challenge',
        text: 'Legacy credit software treated each lending institution as an isolated silo. Redundant data entry, unpredictable lender pre-approval rules, and frequent session timeouts created intense friction during live customer negotiations—71% of finance managers could not predict which lender would approve a buyer before formal submittal. The mandate: dismantle multi-portal data entry and design an automated, single-entry credit orchestration system.',
        mockLabel: 'Dealership Operational Friction & Task Analysis',
        mockType: 'problem-context-cards',
      },
      {
        id: 'research',
        title: 'Research & Discovery',
        text: 'To quantify the true cost of fragmented credit workflows, we ran an 8-week field research program across 22 franchise dealerships in 5 major Nigerian markets (Lagos, Abuja, Port Harcourt, Ibadan, Kano). The protocol combined 20+ live contextual shadowing sessions during real customer deal closings, 24 semi-structured interviews with dealership F&I directors, and a technical integration audit of 6 legacy lender APIs. We benchmarked 400+ completed deal logs to pinpoint friction points from application origination to final contract execution.',
        mockLabel: 'Dealership Field Research & Shadow Logs Matrix',
        mockType: 'sticky-board',
        stickyNotes: [
          {
            type: 'terracotta',
            tag: 'FIELD SCOPE & SAMPLING (N=22 DEALERSHIPS)',
            lines: [
              '• Target: Franchise dealership finance managers & F&I directors handling live credit submittals.',
              '• Markets: 5 Nigerian metro regions (Lagos, Abuja, Port Harcourt, Ibadan, Kano).',
              '• Screening: Processing 15+ credit applications weekly across 2 or more lending institutions.',
            ],
          },
          {
            type: 'yellow',
            tag: 'TRIANGULATED METHODOLOGY PROTOCOL',
            checklist: [
              '✓ 20+ Live Shadowing Sessions During Real Customer Deal Closings',
              '✓ 24 Semi-Structured Interviews with Finance Directors & F&I Managers',
              '✓ System Audit of 6 Legacy Lender Portals & Credit APIs',
              '✓ Quantitative Deal-Time Benchmarking Across 400+ Closed Deals',
            ],
          },
          {
            type: 'pink',
            tag: 'KEY WORKFLOW FRICTION FINDINGS',
            lines: [
              '1. Redundant Data Entry (45-Min Average): Buyer & vehicle details re-typed across every disconnected lender portal.',
              '2. Opaque Pre-Approval Logic: 71% of managers could not predict lender decisions before formal submission.',
              '3. Silent Deal Loss: 18 minutes lost per deal to manual credit-field transfer directly correlated with walked customers.',
            ],
          },
          {
            type: 'lilac',
            tag: 'DATA SYNTHESIS & FRAMEWORK',
            lines: [
              '• Workflow Mapping: 400+ timed deal-completion logs & 12 lender-integration diagrams.',
              '• Framework Built: "Single-Entry Orchestration Model" routing one buyer profile across every tiered lender simultaneously.',
              '• Strategy Shift: Replaced sequential manual re-entry with real-time parallel pre-screening.',
            ],
          },
          {
            type: 'mint',
            tag: 'RESEARCH RIGOR & METRICS',
            lines: [
              'Duration: 8-Week Sprint | Dealerships Visited: 22 | Deals Observed: 400+ | Cross-Functional Alignment: 100% agreement from Product, Engineering, & Lending Partners.',
            ],
          },
        ],
      },
      {
        id: 'findings',
        title: 'Key Findings & Insights',
        text: 'Synthesizing 400+ deal logs surfaced three critical system breakdowns: (1) the "18-Minute Manual Entry Tax" of re-typing identical customer fields across 6 portals, (2) a Pre-Approval Predictability Gap where 71% of managers guessed lender fit blindly, and (3) Customer Trust Decay during long waiting periods with the buyer seated across the desk.',
        quote: '"If I lose 30 minutes fighting with credit entry screens while a customer sits in front of me, the deal is dead. They walk out to think about it and buy somewhere else."',
        quoteAuthor: 'F&I Director — 12 Years Experience, Lagos Dealership',
        mockLabel: 'Credit Processing Bottleneck & Time-Tax Analysis',
        mockType: 'findings-bar-chart',
      },
      {
        id: 'ideation',
        title: 'Ideation & Design Process',
        text: 'Iterative co-design workshops with 15 dealership F&I managers mapped user mental models and co-created human-centered credit intake workflows. The findings distilled into 4 core UX principles: single-screen data entry, visual pre-approval guidance, transparent status feedback, and simplified contract review.',
        mockLabel: 'F&I Credit Intake Miro Co-Design Canvas',
        mockType: 'verse-miro-codesign',
      },
      {
        id: 'testing',
        title: 'Feedback & Testing Loops',
        text: 'The unified platform was validated through 3 rounds of evaluative usability testing with 15 dealership finance managers using simulated live deal scenarios. We measured completion velocity, field error rates, and System Usability Scale (SUS) scores under realistic sales-desk stress conditions.',
        mockLabel: 'Evaluative Usability Testing Scorecard & Deal Velocity Benchmark',
        mockType: 'triple-card',
      },
      {
        id: 'impact',
        title: 'Outcome & Impact',
        text: 'Deploying Verse across pilot dealerships cut deal transaction time by 65% (45 mins → 16 mins), lifted credit submittal approval rates by 31%, and reached 98% finance manager adoption within 30 days of rollout—recovering an estimated $4.2M in annual deal slippage.',
        metrics: [
          { val: '-65%', lbl: 'Process Time (45m → 16m)' },
          { val: '+31%', lbl: 'Credit Approval Rate' },
          { val: '98%', lbl: 'Finance Manager Adoption' },
        ],
        mockLabel: 'Dealership Efficiency & Transaction Analytics',
        mockType: 'impact-dashboard-grid',
      },
      {
        id: 'reflections',
        title: 'Reflections',
        text: 'Enterprise UX research is about eliminating systemic friction so domain experts can focus on high-value human relationships. In high-stakes fintech, cutting transaction time from 45 to 16 minutes does not just optimize software—it saves millions in business revenue.',
        mockLabel: 'Enterprise Systems & Workflow Impact Framework',
        mockType: 'reflections-flow-impact',
      },
    ],
  },

  'case-03': {
    title: 'RecipeGo',
    tagline: 'Connecting African culinary enthusiasts with step-by-step cooking guides.',
    heroDescription: 'RecipeGo is a consumer cooking app celebrating traditional African recipes through video guides and ingredient delivery.',
    role: 'UX Researcher',
    timeline: '2024',
    discipline: 'Consumer Mobile & Food',
    team: 'RecipeGo Product Team',
    sections: [
      { id: 'overview', title: 'Overview', text: 'Home cooks abandoned recipes due to unstandardized ingredient measurements and hands-free cooking issues.', mockLabel: 'Culinary App Experience Architecture', mockType: 'single-large' },
      { id: 'challenge', title: 'Challenge', text: 'Navigating mobile screens while cooking with wet or messy hands caused immense user frustration.', mockLabel: 'Kitchen Friction & Drop-Off Study', mockType: 'triple-card' },
      { id: 'research', title: 'Research & Discovery', text: 'Conducted kitchen diary studies with 28 home cooks across 4 geographic regions.', mockLabel: 'Kitchen Diary Study & Field Records', mockType: 'triple-card' },
      { id: 'findings', title: 'Key Findings & Insights', text: 'Identified hands-free navigation and regional ingredient substitution anxiety as top churn factors.', quote: '"I want to cook authentic Jollof, but I can\'t touch my phone screen with oil on my hands!"', quoteAuthor: 'Diaspora Home Cook', mockLabel: 'Kitchen Mental Model Synthesis', mockType: 'single-large' },
      { id: 'ideation', title: 'Ideation & Design Process', text: 'Framed hands-free voice guidance and dynamic ingredient substitution options.', mockLabel: 'Voice Navigation Flow Diagrams', mockType: 'single-large' },
      { id: 'testing', title: 'Feedback & Testing Loops', text: 'Evaluative testing confirmed an 88% recipe completion rate using voice mode.', mockLabel: 'Voice Usability Testing Scorecard', mockType: 'triple-card' },
      { id: 'impact', title: 'Outcome & Impact', text: 'Increased recipe completion by 55% and achieved a 4.9★ App Store rating.', metrics: [{ val: '+55%', lbl: 'Recipe Completion' }, { val: '88%', lbl: 'Voice Adoption' }, { val: '4.9★', lbl: 'App Rating' }], mockLabel: 'Recipe Completion Funnel', mockType: 'single-large' },
      { id: 'reflections', title: 'Reflections', text: 'Physical context—like sticky fingers in a kitchen—matters just as much as digital UI.', mockLabel: 'Contextual Research Notes', mockType: 'single-large' },
    ],
  },

  'case-04': {
    title: 'Digital Inclusion',
    tagline: 'Pioneering WCAG 2.2 AAA accessibility standards and inclusive digital ecosystem strategy across enterprise platforms.',
    heroDescription: 'Digital Inclusion & Accessibility Strategy investigating multi-modal accessibility, assistive technology compliance, screen reader navigation, and cognitive load reduction across enterprise software ecosystems.',
    role: 'Lead Accessibility & Inclusive UX Researcher',
    timeline: '2024',
    discipline: 'Inclusive Design & Accessibility Strategy',
    team: 'Global Digital Inclusion & Accessibility Guild',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        text: 'Digital inclusion is a fundamental requirement for modern enterprise software. Millions of users with visual, motor, auditory, and cognitive disabilities face insurmountable barriers when software relies on unlabelled controls, low-contrast UI elements, and non-navigable DOM structures. Our mandate was to audit enterprise product suites, establish WCAG 2.2 AAA accessibility benchmarks, and embed inclusive design practices into product strategy.',
        mockLabel: 'Enterprise Accessibility Audit & WCAG 2.2 Ecosystem Map',
        mockType: 'single-large',
      },
      {
        id: 'challenge',
        title: 'Challenge',
        text: 'Legacy digital platforms lacked keyboard navigation paths, screen reader compatibility, and scalable contrast tokens. Over 68% of enterprise user flows failed basic WCAG compliance audits, exposing organizations to legal compliance risks and excluding impaired users from critical services.',
        mockLabel: 'Accessibility Failure Factors & Assistive Task Analysis',
        mockType: 'problem-context-cards',
      },
      {
        id: 'research',
        title: 'Research & Discovery',
        text: 'Executed an extensive inclusive research study with 45+ participants spanning diverse disability archetypes (blind/low-vision screen reader users, motor-impaired switch access users, and neurodivergent individuals). We benchmarked 120+ core user flows using JAWS, NVDA, VoiceOver, and eye-gaze assistive hardware.',
        mockLabel: 'Inclusive Research Participant Breakdown & Testing Matrix',
        mockType: 'triple-card',
      },
      { id: 'ideation', title: 'Ideation & Design Process', text: 'Co-created the Enterprise Inclusive Design System framework: standardized ARIA primitives, automated contrast color tokens, motion-reduction preference queries, and screen-reader-first interaction patterns.', mockLabel: 'Enterprise Inclusive Design System Blueprints', mockType: 'single-large' },
      { id: 'testing', title: 'Feedback & Testing Loops', text: 'Validated prototype components with 30 disabled participants, measuring task completion rate, screen reader announcement clarity, and keyboard navigation speed.', mockLabel: 'Assistive Usability & Task Completion Scorecard', mockType: 'triple-card' },
      { id: 'impact', title: 'Outcome & Impact', text: 'Achieved 100% WCAG 2.2 AAA compliance across audited product suites, boosted task completion rates by 82% for assistive technology users, and established enterprise-wide accessibility governance guidelines.', metrics: [{ val: '100%', lbl: 'WCAG 2.2 AAA' }, { val: '+82%', lbl: 'Assistive Speed' }, { val: '0', lbl: 'Legal Barriers' }], mockLabel: 'Digital Inclusion Impact Report', mockType: 'single-large' },
      { id: 'reflections', title: 'Reflections', text: 'Designing for extreme accessibility needs inevitably yields a cleaner, more robust, and intuitive experience for every single user.', mockLabel: 'Inclusive Governance & Ethics Framework Notes', mockType: 'single-large' },
    ],
  },
}

export default function CaseStudyPage({ caseStudyId = 'case-01', onBackToWork }) {
  const data = caseStudyData[caseStudyId] || caseStudyData['case-01']

  const [stickyPos, setStickyPos] = useState({})
  const [drag, setDrag] = useState(null)
  const [highestZ, setHighestZ] = useState(60)
  const [zIndices, setZIndices] = useState({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [caseStudyId])

  const handleStickyDown = (id) => (e) => {
    if (e.button !== undefined && e.button !== 0) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const cur = stickyPos[id] || { x: 0, y: 0 }
    const newZ = highestZ + 1
    setHighestZ(newZ)
    setZIndices((prev) => ({ ...prev, [id]: newZ }))
    setDrag({ id, startX: clientX, startY: clientY, initX: cur.x, initY: cur.y })
  }

  useEffect(() => {
    if (!drag) return

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const dx = clientX - drag.startX
      const dy = clientY - drag.startY
      setStickyPos((prev) => ({
        ...prev,
        [drag.id]: { x: drag.initX + dx, y: drag.initY + dy },
      }))
    }

    const handleEnd = () => setDrag(null)

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
  }, [drag])

  return (
    <div className="adekoya-case-page" aria-label="Case Study Page">
      <div className="adekoya-container">



        {/* Top Centered Huge Title */}
        <header className="adekoya-header" data-reveal>
          <h1 className="adekoya-main-title">{data.title}</h1>
        </header>

        {/* Massive Hero Image Mockup Canvas */}
        <div className="adekoya-hero-canvas" data-reveal>
          {data.heroImage ? (
            <div className="adekoya-hero-image-wrap">
              <img src={data.heroImage} alt={`${data.title} Main Product Hero Artifact`} className="adekoya-hero-img" loading="eager" fetchpriority="high" />
            </div>
          ) : (
            <div className="hero-mock-placeholder">
              <span className="hero-mock-icon">💻</span>
              <span className="hero-mock-text">{data.title} — Main Product Hero Artifact</span>
            </div>
          )}
        </div>

        {/* Headline + 3-Column Meta Overview Bar */}
        <div className="adekoya-overview-bar" data-reveal>
          <div className="overview-headline-col">
            <h2 className="overview-headline">{data.tagline}</h2>
          </div>

          <div className="overview-desc-col">
            <p className="overview-desc-text">{data.heroDescription}</p>
          </div>

          <div className="overview-meta-col">
            <div className="meta-row">
              <span className="meta-key">ROLE</span>
              <span className="meta-val">{data.role}</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">TIMELINE</span>
              <span className="meta-val">{data.timeline}</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">DISCIPLINE</span>
              <span className="meta-val">{data.discipline}</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">TEAM</span>
              <span className="meta-val">{data.team}</span>
            </div>
          </div>
        </div>

        {/* Full-Width Large Screen Mockup Container */}
        <div className="adekoya-section-canvas adekoya-section-canvas--flush margin-bottom-lg" data-reveal>
          {data.architectureImage ? (
            <img src={data.architectureImage} alt={`${data.title} Product Architecture Overview`} className="adekoya-hero-img" loading="lazy" decoding="async" />
          ) : (
            <div className="mock-canvas-inner">
              <div className="large-screen-mock">
                <span className="mock-badge">PRIMARY INTERFACE &amp; RESEARCH FRAMEWORK</span>
                <p className="mock-title">{data.title} Product Architecture Overview</p>
              </div>
            </div>
          )}
        </div>

        {/* 8 Structured Sections Following Adeola Adekoya's Exact Asymmetric 2-Column + Canvas Layout */}
        {data.sections.map((sec, index) => (
          <section key={sec.id} className="adekoya-section" id={sec.id}>
            
            {/* Asymmetric 2-Column Text Row: Left Section Title (1/3) | Right Text Paragraph (2/3) */}
            <div className="adekoya-section-text-row" data-reveal>
              <div className="section-title-col">
                <h3 className="section-title-lbl">{sec.title}</h3>
              </div>
              <div className="section-content-col">
                <p className="section-body-text">{sec.text}</p>

                {/* Optional Quote Block if present */}
                {sec.quote && (
                  <blockquote className="section-quote">
                    <p className="quote-body">{sec.quote}</p>
                    <cite className="quote-cite">— {sec.quoteAuthor}</cite>
                  </blockquote>
                )}

                {/* Optional Metrics Grid if present */}
                {sec.metrics && (
                  <div className="section-metrics-grid">
                    {sec.metrics.map((m, idx) => (
                      <div key={idx} className="metric-tile">
                        <span className="metric-tile-val">{m.val}</span>
                        <span className="metric-tile-lbl">{m.lbl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Massive Full-Width Light Grey / Dark Container for Visual Artifacts */}
            <div className="adekoya-section-canvas" data-reveal data-delay="1">
              {(() => {
                const SectionRenderer = SECTION_RENDERERS[sec.mockType] || FallbackSection
                const safeSec = normalizeSection(sec)
                return (
                  <SectionRenderer
                    sec={safeSec}
                    data={data}
                    caseId={caseStudyId}
                    index={index}
                    stickyPos={stickyPos}
                    drag={drag}
                    zIndices={zIndices}
                    onStickyDown={handleStickyDown}
                  />
                )
              })()}
            </div>

          </section>
        ))}

        {/* Footer Next Project Navigation */}
        <footer className="adekoya-footer">
          <div className="footer-next-wrap" data-reveal>
            <span className="next-lbl">NEXT CASE STUDY</span>
            <button type="button" className="next-title-btn" onClick={onBackToWork}>
              Explore Selected Works <span className="next-title-arrow">→</span>
            </button>
          </div>
        </footer>

      </div>
    </div>
  )
}
