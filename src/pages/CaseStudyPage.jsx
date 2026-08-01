import React, { useEffect } from 'react'
import './CaseStudyPage.css'
import fitflexHeroImg from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785430189021.jpg'
import architectureImg from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785429137899.png'
import overviewCard3Img from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785432917311.jpg'
import avatar1Img from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785437012275.png'
import avatar2Img from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785437030072.png'
import avatar3Img from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785437045137.png'
import verseHeroImg from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785441835053.png'
import verseArchitectureImg from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/bc996f2b-f821-4882-a4b8-3fb1816f1c5f/media__1785442702780.png'
import verseYellowCarImg from 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/f42ecc33-31ce-4b84-914f-2064914eddba/media__1785534267008.jpg'

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
        mockLabel: 'User Friction Map & Drop-Off Funnel Analysis',
        mockType: 'problem-context-cards',
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
        mockLabel: 'UXR Maturity & Retrospective Framework',
        mockType: 'reflections-bento-board',
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
        mockLabel: 'Single-Entry Orchestration & Pre-Screening Co-Design',
        mockType: 'ideation-slider-matrix',
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
    title: 'AfriChef',
    tagline: 'Connecting African culinary enthusiasts with step-by-step cooking guides.',
    heroDescription: 'AfriChef is a consumer cooking app celebrating traditional African recipes through video guides and ingredient delivery.',
    role: 'UX Researcher',
    timeline: '2024',
    discipline: 'Consumer Mobile & Food',
    team: 'AfriChef Product Team',
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
      {
        id: 'findings',
        title: 'Key Findings & Insights',
        text: 'Research revealed that 72% of accessibility failures stemmed from missing ARIA landmark roles and non-semantic DOM elements, while 64% of neurodivergent users experienced cognitive overload from unconfigurable animation loops.',
        quote: '"Accessibility isn\'t a feature checklist we append at launch—it\'s a fundamental human right that defines whether someone can independently navigate their digital life."',
        quoteAuthor: 'Inclusive Accessibility Advocate & Study Participant',
        mockLabel: 'Accessibility Impact & Cognitive Load Matrix',
        mockType: 'single-large',
      },
      {
        id: 'ideation',
        title: 'Ideation & Design Process',
        text: 'Co-created the Enterprise Inclusive Design System framework: standardized ARIA primitives, automated contrast color tokens, motion-reduction preference queries, and screen-reader-first interaction patterns.',
        mockLabel: 'Enterprise Inclusive Design System Blueprints',
        mockType: 'single-large',
      },
      {
        id: 'testing',
        title: 'Feedback & Testing Loops',
        text: 'Validated prototype components with 30 disabled participants, measuring task completion rate, screen reader announcement clarity, and keyboard navigation speed.',
        mockLabel: 'Assistive Usability & Task Completion Scorecard',
        mockType: 'triple-card',
      },
      {
        id: 'impact',
        title: 'Outcome & Impact',
        text: 'Achieved 100% WCAG 2.2 AAA compliance across audited product suites, boosted task completion rates by 82% for assistive technology users, and established enterprise-wide accessibility governance guidelines.',
        metrics: [
          { val: '100%', lbl: 'WCAG 2.2 AAA' },
          { val: '+82%', lbl: 'Assistive Speed' },
          { val: '0', lbl: 'Legal Barriers' },
        ],
        mockLabel: 'Digital Inclusion Impact Report',
        mockType: 'single-large',
      },
      {
        id: 'reflections',
        title: 'Reflections',
        text: 'Designing for extreme accessibility needs inevitably yields a cleaner, more robust, and intuitive experience for every single user.',
        mockLabel: 'Inclusive Governance & Ethics Framework Notes',
        mockType: 'single-large',
      },
    ],
  },
}

export default function CaseStudyPage({ caseStudyId = 'case-01', onBackToWork }) {
  const data = caseStudyData[caseStudyId] || caseStudyData['case-01']

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [caseStudyId])

  return (
    <div className="adekoya-case-page" aria-label="Case Study Page">
      <div className="adekoya-container">

        {/* Back Link */}
        <button type="button" className="adekoya-back-btn" onClick={onBackToWork}>
          <span aria-hidden="true">←</span> Back to projects
        </button>

        {/* Top Centered Huge Title */}
        <header className="adekoya-header">
          <h1 className="adekoya-main-title">{data.title}</h1>
        </header>

        {/* Massive Hero Image Mockup Canvas */}
        <div className="adekoya-hero-canvas">
          {data.heroImage ? (
            <div className="adekoya-hero-image-wrap">
              <img src={data.heroImage} alt={`${data.title} Main Product Hero Artifact`} className="adekoya-hero-img" />
              <div className="adekoya-hero-overlay-brand" />
            </div>
          ) : (
            <div className="hero-mock-placeholder">
              <span className="hero-mock-icon">💻</span>
              <span className="hero-mock-text">{data.title} — Main Product Hero Artifact</span>
            </div>
          )}
        </div>

        {/* Headline + 3-Column Meta Overview Bar */}
        <div className="adekoya-overview-bar">
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
        <div className="adekoya-section-canvas margin-bottom-lg">
          {data.architectureImage ? (
            <img src={data.architectureImage} alt={`${data.title} Product Architecture Overview`} className="adekoya-hero-img" />
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
            <div className="adekoya-section-text-row">
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
            <div className="adekoya-section-canvas">
              {sec.mockType === 'sticky-board' ? (
                <div className="research-sticky-board">
                  {sec.stickyNotes.map((note, noteIdx) => (
                    <div key={noteIdx} className={`research-sticky sticky-${note.type}`}>
                      {note.type === 'terracotta' && (
                        <div className="sticky-holes">
                          <span className="hole" />
                          <span className="hole" />
                          <span className="hole" />
                          <span className="hole" />
                        </div>
                      )}
                      {note.type === 'yellow' && <div className="pin-accent" />}
                      {note.type === 'pink' && <div className="tape-accent" />}

                      <span className={`sticky-tag ${note.type !== 'terracotta' ? `${note.type}-tag` : ''}`}>
                        {note.tag}
                      </span>

                      {note.checklist ? (
                        <ul className="sticky-checklist">
                          {note.checklist.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          className={
                            note.type === 'pink'
                              ? 'sticky-text-bold'
                              : note.type === 'lilac'
                              ? 'sticky-lilac-text'
                              : note.type === 'mint'
                              ? 'sticky-mint-text'
                              : 'sticky-text'
                          }
                        >
                          {note.lines.map((line, lineIdx) => (
                            <React.Fragment key={lineIdx}>
                              {line}
                              {lineIdx < note.lines.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      )}

                      {note.type === 'pink' && <div className="sticky-fold" />}
                    </div>
                  ))}
                </div>
              ) : sec.mockType === 'overview-mobile-flow' ? (
                <div className="overview-story-flow-container">
                  <div className="overview-story-grid">
                    
                    {/* Card 1: Light Typographic Card */}
                    <div className="story-phone story-phone--white">
                      <div className="phone-body phone-body--padded">
                        <div className="phone-top-content">
                          <h3 className="phone-hero-title">
                            West Africa<br />
                            Maternal Health<br />
                            Scope 2025
                          </h3>
                          <p className="phone-hero-subtitle">
                            Hosted by DODO Team
                          </p>
                        </div>
                        <div className="phone-bottom-badge">
                          <span className="phone-tag">8 URBAN HUBS</span>
                          <p className="phone-tag-sub">Lagos • Accra • Abidjan • Dakar</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Full-Bleed Graphic Card (Middle Position) */}
                    <div className="story-phone story-phone--graphic">
                      <div className="phone-graphic-wrap">
                        <img src={data.overviewCard3Image || data.heroImage} alt="Fitflex Active Lifestyle" className="phone-graphic-img" />
                      </div>
                    </div>

                    {/* Card 3: Vibrant Pink Statement Card */}
                    <div className="story-phone story-phone--pink">
                      <div className="phone-body phone-body--padded">
                        <p className="phone-statement-text">
                          78% of nursing mothers abandoned traditional fitness apps within 14 days because rigid streak counters triggered emotional guilt during early motherhood.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ) : sec.mockType === 'overview-modules-grid' ? (
                <div className="modules-grid-container">
                  {caseStudyId === 'case-02' && (
                    <div className="verse-faq-path-container">
                      {/* 4 Tilted Cards in Portfolio Palette with Dashed S-Curve Path */}
                      <div className="faq-cards-path-wrap">
                        {/* SVG Dashed Connecting Path Line */}
                        <svg className="faq-dashed-path-svg" viewBox="0 0 900 600" fill="none" preserveAspectRatio="none">
                          <path
                            d="M 220 120 C 450 30, 650 150, 680 240 C 700 320, 250 340, 220 420 C 190 500, 550 560, 680 500"
                            stroke="#d9d9d9"
                            strokeWidth="2.5"
                            strokeDasharray="6 6"
                            opacity="0.55"
                          />
                        </svg>

                        {/* Card 1: Soft Periwinkle Blue */}
                        <div className="verse-faq-card card-pos-1 verse-card--blue">
                          <div className="faq-card-num-badge">1</div>
                          <h4 className="faq-card-q">What's Verse financing about ?</h4>
                          <p className="faq-card-a">
                            an enterprise credit orchestration portal designed to help finance managers streamline buyer submittals and eliminate <span className="faq-hl-tag hl-darkblue">multi-portal friction.</span>
                          </p>

                        </div>

                        {/* Card 2: Soft Lime Green */}
                        <div className="verse-faq-card card-pos-2 verse-card--lime">
                          <div className="faq-card-num-badge">2</div>
                          <h4 className="faq-card-q">Why were dealerships losing deals ?</h4>
                          <p className="faq-card-a">
                            finance managers spent up to 45 minutes re-typing customer fields into 6+ lender portals, leading to customer drop-off <span className="faq-hl-tag hl-darkgreen">during live negotiations.</span>
                          </p>

                        </div>

                        {/* Card 3: Soft Golden Butter */}
                        <div className="verse-faq-card card-pos-3 verse-card--amber">
                          <div className="faq-card-num-badge">3</div>
                          <h4 className="faq-card-q">What was our research scope ?</h4>
                          <p className="faq-card-a">
                            shadowed 400+ live deal closings across 22 franchise dealerships in 5 Nigerian hubs to trace exact bottlenecks and <span className="faq-hl-tag hl-darkamber">arrive at solutions early.</span>
                          </p>

                        </div>

                        {/* Card 4: Soft Blush Pink */}
                        <div className="verse-faq-card card-pos-4 verse-card--pink">
                          <div className="faq-card-num-badge">4</div>
                          <h4 className="faq-card-q">What business impact was achieved ?</h4>
                          <p className="faq-card-a">
                            transaction time dropped by <span className="faq-hl-tag hl-darkpink">65% (45m to 16m)</span> and credit approvals increased by 31%, recovering an estimated $4.2M annually.
                          </p>

                        </div>
                      </div>
                    </div>
                  )}

                  {caseStudyId !== 'case-02' && (
                    <>
                      <div className="modules-grid-header margin-top-md">
                        <span className="modules-grid-eyebrow">platform.architecture</span>
                        <h3 className="modules-grid-title">Platform Capability Modules</h3>
                      </div>

                      <div className="modules-grid">
                        {/* Module 1: Soft Periwinkle Blue */}
                        <div className="module-card module-card--blue">
                          <div className="module-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16v10H4z" />
                              <path d="M4 14l4 4h8l4-4" />
                            </svg>
                          </div>
                          <h4 className="module-card-title">Unified Deal Entry</h4>
                          <p className="module-card-text">Single-entry buyer &amp; vehicle data capture that eliminates re-typing across every lender portal.</p>
                        </div>

                        {/* Module 2: Soft Lime Green */}
                        <div className="module-card module-card--lime">
                          <div className="module-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="6" cy="6" r="2.5" />
                              <circle cx="18" cy="6" r="2.5" />
                              <circle cx="12" cy="18" r="2.5" />
                              <path d="M8.2 7.3L11 16M15.8 7.3L13 16M8.5 6h7" />
                            </svg>
                          </div>
                          <h4 className="module-card-title">Multi-Lender Orchestration</h4>
                          <p className="module-card-text">Real-time routing engine that submits credit applications across tiered lending institutions simultaneously.</p>
                        </div>

                        {/* Module 3: Soft Golden Butter */}
                        <div className="module-card module-card--amber">
                          <div className="module-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 3l7 3.5v5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5v-5z" />
                              <path d="M9 12l2 2 4-4" />
                            </svg>
                          </div>
                          <h4 className="module-card-title">Credit Pre-Screening</h4>
                          <p className="module-card-text">Instant eligibility checks flag likely approvals before a formal application is ever submitted.</p>
                        </div>

                        {/* Module 4: Soft Blush Pink */}
                        <div className="module-card module-card--pink">
                          <div className="module-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 3h9l3 3v15H6z" />
                              <path d="M15 3v3h3" />
                              <path d="M9 12h6M9 16h6" />
                            </svg>
                          </div>
                          <h4 className="module-card-title">Document Automation</h4>
                          <p className="module-card-text">Auto-populated compliance disclosures and contracts pulled directly from the unified deal record.</p>
                        </div>

                        {/* Module 5: Soft Lilac */}
                        <div className="module-card module-card--lilac">
                          <div className="module-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 20V10M12 20V4M20 20v-7" />
                            </svg>
                          </div>
                          <h4 className="module-card-title">Deal Analytics Dashboard</h4>
                          <p className="module-card-text">Live visibility into approval status, funnel health, and time-to-close across every active deal.</p>
                        </div>

                        {/* Module 6: Soft Mint */}
                        <div className="module-card module-card--mint">
                          <div className="module-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11.5a8.5 8.5 0 1 1-4.06-7.24L21 3l-1.2 4.06c.13.46.2.94.2 1.44z" />
                            </svg>
                          </div>
                          <h4 className="module-card-title">Dealer-Lender Messaging</h4>
                          <p className="module-card-text">Centralized communication thread per deal, keeping finance managers and lenders in sync in one place.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : sec.mockType === 'problem-context-cards' ? (
                <div className="problem-context-container">
                  {/* Top Skim Metrics Row: 3 Columns */}
                  <div className="problem-top-metrics-row">
                    <div className="problem-metric-col">
                      <span className="problem-metric-val">{caseStudyId === 'case-02' ? '45 mins' : '78%'}</span>
                      <span className="problem-metric-lbl">{caseStudyId === 'case-02' ? 'Average deal processing duration' : 'Churn Rate within 14 days of birth'}</span>
                    </div>
                    <div className="problem-metric-col">
                      <span className="problem-metric-val">{caseStudyId === 'case-02' ? '22' : '32 hrs'}</span>
                      <span className="problem-metric-lbl">{caseStudyId === 'case-02' ? 'Dealerships shadowed across 5 hubs' : 'In-home shadowing'}</span>
                    </div>
                    <div className="problem-metric-col">
                      <span className="problem-metric-val">{caseStudyId === 'case-02' ? '71%' : '0'}</span>
                      <span className="problem-metric-lbl">{caseStudyId === 'case-02' ? 'Lacked pre-approval predictability' : 'Adaptive routines in market apps'}</span>
                    </div>
                  </div>

                  {/* 3 Vertical Color-Coded Scalloped Problem Cards Grid */}
                  <div className="problem-cards-grid">
                    
                    {/* Card 01: Soft Periwinkle Blue */}
                    <div className={`scallop-card scallop-card--blue ${caseStudyId === 'case-02' ? 'scallop-card--dark' : ''}`}>
                      <div className="scallop-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
                          <line x1="12" y1="2" x2="12" y2="22" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                          <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                        </svg>
                      </div>
                      <div className="scallop-card-body">
                        <span className="scallop-card-num">01.</span>
                        <h4 className="scallop-card-title">{caseStudyId === 'case-02' ? 'Redundant Data Entry' : 'Social Media & Guilt Spirals'}</h4>
                        <p className="scallop-card-text">
                          {caseStudyId === 'case-02'
                            ? 'Buyer & vehicle details manually re-typed across 6+ disconnected lender portals per deal.'
                            : 'Fixed daily streak counters triggered intense self-blame when workouts were missed due to baby care.'}
                        </p>
                      </div>
                    </div>

                    {/* Card 02: Soft Lime Green */}
                    <div className={`scallop-card scallop-card--lime ${caseStudyId === 'case-02' ? 'scallop-card--dark' : ''}`}>
                      <div className="scallop-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
                          <line x1="12" y1="2" x2="12" y2="22" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                          <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                        </svg>
                      </div>
                      <div className="scallop-card-body">
                        <span className="scallop-card-num">02.</span>
                        <h4 className="scallop-card-title">{caseStudyId === 'case-02' ? 'Opaque Pre-Approval Rules' : 'Energy & Sleep Crises'}</h4>
                        <p className="scallop-card-text">
                          {caseStudyId === 'case-02'
                            ? '71% of F&I managers could not predict lender approval fit before formal application submittal.'
                            : 'Severe sleep fragmentation meant rigid 45-minute workout plans were physically impossible.'}
                        </p>
                      </div>
                    </div>

                    {/* Card 03: Soft Golden Butter */}
                    <div className={`scallop-card scallop-card--amber ${caseStudyId === 'case-02' ? 'scallop-card--dark' : ''}`}>
                      <div className="scallop-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
                          <line x1="12" y1="2" x2="12" y2="22" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                          <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                        </svg>
                      </div>
                      <div className="scallop-card-body">
                        <span className="scallop-card-num">03.</span>
                        <h4 className="scallop-card-title">{caseStudyId === 'case-02' ? 'Silent Customer Deal Loss' : 'Physical Trauma Fear'}</h4>
                        <p className="scallop-card-text">
                          {caseStudyId === 'case-02'
                            ? '18 minutes lost per deal to manual credit field transfer directly correlated with walked buyers.'
                            : '64% of mothers feared unadapted core exercises would worsen diastasis recti or post-natal recovery.'}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ) : sec.mockType === 'findings-bar-chart' ? (
                caseStudyId === 'case-02' ? (
                  <div className="verse-stepped-insights-container">
                    {/* Top Report Header */}
                    <div className="stepped-report-header">
                      <div className="stepped-header-left">
                        <span className="stepped-brand-txt">Verse Dealership Insights: 2024 Report</span>
                        <span className="stepped-sub-txt">2024 Findings</span>
                      </div>
                    </div>

                    {/* Headline Banner */}
                    <div className="stepped-headline-wrap">
                      <h3 className="stepped-main-headline">
                        Of the 400+ live dealership deal closings observed during research...
                      </h3>
                    </div>

                    {/* 5 Stepped Horizontal Ribbon Bars (Staggered Indented Starts) */}
                    <div className="stepped-bars-stack">
                      {/* Bar 1: Pink */}
                      <div className="stepped-bar bar-color-pink pos-step-1">
                        <span className="bar-stat-val">74%</span>
                        <span className="bar-stat-desc">reported multi-portal manual re-entry was their primary operational bottleneck</span>
                      </div>

                      {/* Bar 2: Amber */}
                      <div className="stepped-bar bar-color-amber pos-step-2">
                        <span className="bar-stat-val">85%</span>
                        <span className="bar-stat-desc">saw an immediate increase in first-time credit approval velocity with pre-screening</span>
                      </div>

                      {/* Bar 3: Electric Blue */}
                      <div className="stepped-bar bar-color-blue pos-step-3">
                        <span className="bar-stat-val">87%</span>
                        <span className="bar-stat-desc">would adopt automated single-entry credit routing over legacy dealership software</span>
                      </div>

                      {/* Bar 4: Coral Red */}
                      <div className="stepped-bar bar-color-coral pos-step-4">
                        <span className="bar-stat-val">68%</span>
                        <span className="bar-stat-desc">said buyers walked out when credit application processing exceeded 25 minutes</span>
                      </div>

                      {/* Bar 5: Apple Lime Green */}
                      <div className="stepped-bar bar-color-lime pos-step-5">
                        <span className="bar-stat-val">58%</span>
                        <span className="bar-stat-desc">requested automated compliance disclosures integrated directly into credit workflows</span>
                      </div>
                    </div>

                    {/* Bottom Caption */}
                    <div className="stepped-report-footer">
                      <span className="footer-index-txt">(Research) Index No. 051 — Verse Dealership Insights 2024 – Verse</span>
                    </div>
                  </div>
                ) : (
                  <div className="findings-barchart-container">
                    {/* Left Column: Headline, Summary & Giant Stat Callout */}
                    <div className="findings-barchart-info">
                      <div className="barchart-header-tags">
                        <span className="barchart-tag">fitflex.research</span>
                      </div>

                      <div className="barchart-title-group">
                        <h3 className="barchart-main-title">Post-Natal Retention Breakdown</h3>
                        <p className="barchart-desc-text">
                          Primary research across 8 urban hubs revealed how streak guilt directly drives habit abandonment within the first 14 days of birth.
                        </p>
                      </div>

                      <div className="barchart-stat-anchor">
                        <span className="barchart-stat-num">78%</span>
                        <span className="barchart-stat-label">14-Day Churn Peak</span>
                      </div>
                    </div>

                    {/* Right Column: 3 Vertical Progress Bar Tracks */}
                    <div className="findings-barchart-visual">
                      {/* Bar 1 */}
                      <div className="bar-track-col">
                        <div className="bar-track-shell">
                          <div className="bar-fill bar-fill--blue" style={{ height: '92%' }}>
                            <div className="bar-label-inner">
                              <span className="bar-year">Day 01</span>
                              <span className="bar-val">92% Active</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bar 2 */}
                      <div className="bar-track-col">
                        <div className="bar-track-shell">
                          <div className="bar-fill bar-fill--lime" style={{ height: '48%' }}>
                            <div className="bar-label-inner">
                              <span className="bar-year">Day 07</span>
                              <span className="bar-val">48% Active</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bar 3 */}
                      <div className="bar-track-col">
                        <div className="bar-track-shell">
                          <div className="bar-fill bar-fill--pink" style={{ height: '22%' }}>
                            <div className="bar-label-inner">
                              <span className="bar-year">Day 14</span>
                              <span className="bar-val">22% Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : sec.mockType === 'ideation-slider-matrix' ? (
                caseStudyId === 'case-02' ? (
                  <div className="verse-ideation-flow-container">
                    {/* 4-Step Process Pipeline Grid */}
                    <div className="flow-pipeline-grid">
                      
                      {/* Step 01: Soft Periwinkle Blue */}
                      <div className="flow-step-col">
                        <div className="flow-node-wrapper">
                          <div className="flow-top-icon icon-bg--blue">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M11 5L6 9H2v6h4l5 4V5z" />
                              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                          </div>
                          <div className="flow-aura-ring aura--blue">
                            <div className="flow-center-dot" />
                          </div>
                        </div>
                        <div className="flow-step-content">
                          <span className="flow-step-num">Step 01</span>
                          <h4 className="flow-pillar-title">Single Intake Form</h4>
                          <p className="flow-pillar-desc">
                            Unified 6 portal log-ins into one single-screen credit intake form.
                          </p>
                        </div>
                      </div>

                      {/* Step 02: Soft Lime Green */}
                      <div className="flow-step-col">
                        <div className="flow-node-wrapper">
                          <div className="flow-top-icon icon-bg--green">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </div>
                          <div className="flow-aura-ring aura--green">
                            <div className="flow-center-dot" />
                          </div>
                        </div>
                        <div className="flow-step-content">
                          <span className="flow-step-num">Step 02</span>
                          <h4 className="flow-pillar-title">Eligibility Badges</h4>
                          <p className="flow-pillar-desc">
                            Mapped lender approval rules into instant visual fit indicators.
                          </p>
                        </div>
                      </div>

                      {/* Step 03: Soft Golden Butter / Amber */}
                      <div className="flow-step-col">
                        <div className="flow-node-wrapper">
                          <div className="flow-top-icon icon-bg--amber">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                              <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                          </div>
                          <div className="flow-aura-ring aura--amber">
                            <div className="flow-center-dot" />
                          </div>
                        </div>
                        <div className="flow-step-content">
                          <span className="flow-step-num">Step 03</span>
                          <h4 className="flow-pillar-title">Live Status Feedback</h4>
                          <p className="flow-pillar-desc">
                            Designed real-time progress indicators, easing customer anxiety.
                          </p>
                        </div>
                      </div>

                      {/* Step 04: Soft Blush Pink */}
                      <div className="flow-step-col">
                        <div className="flow-node-wrapper">
                          <div className="flow-top-icon icon-bg--pink">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="9" cy="21" r="1" />
                              <circle cx="20" cy="21" r="1" />
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                          </div>
                          <div className="flow-aura-ring aura--pink">
                            <div className="flow-center-dot" />
                          </div>
                        </div>
                        <div className="flow-step-content">
                          <span className="flow-step-num">Step 04</span>
                          <h4 className="flow-pillar-title">Fast Contract Review</h4>
                          <p className="flow-pillar-desc">
                            Auto-filled complex disclosure forms, cutting deal time to 16 mins.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ) : (
                  <div className="ideation-slider-container">
                    {/* Top Header Row with Title & Lime Badge */}
                    <div className="ideation-slider-header">
                      <h3 className="ideation-slider-title">User Research &amp; Co-Design Outcomes</h3>
                      <span className="ideation-slider-badge">3 Pillars</span>
                    </div>

                    {/* 3-Column Metric Progress Slider Matrix */}
                    <div className="ideation-slider-grid">
                      
                      {/* Column 1 */}
                      <div className="slider-col">
                        <div className="slider-track-wrap">
                          <div className="slider-axis-labels">
                            <span>0%</span>
                            <span className="slider-arrow" style={{ left: '88%' }}>▼</span>
                            <span>100%</span>
                          </div>
                          <div className="slider-pill-bar gradient-coral-yellow">
                            <div className="slider-pill-fill" style={{ width: '88%' }} />
                            <div className="slider-pill-rest" style={{ width: '12%' }} />
                          </div>
                        </div>
                        <div className="slider-stat-group">
                          <span className="slider-stat-num">88<span className="slider-stat-unit">%</span></span>
                          <p className="slider-stat-desc">
                            of nursing mothers preferred 5-to-15 minute energy-matched micro-stretches over fixed 45-minute workouts.
                          </p>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="slider-col">
                        <div className="slider-track-wrap">
                          <div className="slider-axis-labels">
                            <span>0%</span>
                            <span className="slider-arrow" style={{ left: '64%' }}>▼</span>
                            <span>100%</span>
                          </div>
                          <div className="slider-pill-bar gradient-yellow-green">
                            <div className="slider-pill-fill" style={{ width: '64%' }} />
                            <div className="slider-pill-rest" style={{ width: '36%' }} />
                          </div>
                        </div>
                        <div className="slider-stat-group">
                          <span className="slider-stat-num">64<span className="slider-stat-unit">%</span></span>
                          <p className="slider-stat-desc">
                            reduction in self-reported post-natal guilt after replacing daily streak counters with flexible weekly rest targets.
                          </p>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="slider-col">
                        <div className="slider-track-wrap">
                          <div className="slider-axis-labels">
                            <span>0%</span>
                            <span className="slider-arrow" style={{ left: '95%' }}>▼</span>
                            <span>100%</span>
                          </div>
                          <div className="slider-pill-bar gradient-blue-green">
                            <div className="slider-pill-fill" style={{ width: '95%' }} />
                            <div className="slider-pill-rest" style={{ width: '5%' }} />
                          </div>
                        </div>
                        <div className="slider-stat-group">
                          <span className="slider-stat-num">95<span className="slider-stat-unit">%</span></span>
                          <p className="slider-stat-desc">
                            safety confidence score during Obstetric &amp; Diastasis Recti co-design workshops with healthcare specialists.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              ) : sec.mockType === 'ideation-bento-grid' ? (
                <div className="ideation-bento-container">
                  <div className="ideation-bento-grid">
                    
                    {/* Card 1: Burnt Orange - Adaptive Micro-Routines (Concentric Circles) */}
                    <div className="bento-card bento-card--orange">
                      <div className="bento-card-art">
                        <svg viewBox="0 0 200 200" className="bento-line-svg">
                          <circle cx="100" cy="130" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="100" cy="130" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="100" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <text x="100" y="134" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">05m</text>
                          <text x="100" y="104" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">10m</text>
                          <text x="100" y="74" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">15m</text>
                        </svg>
                      </div>
                      <div className="bento-card-text">
                        <h4 className="bento-card-title">Adaptive Micro-Routines</h4>
                        <p className="bento-card-sub">Replacing rigid 45-min workout expectations with 5-15 min energy-matched stretches.</p>
                      </div>
                    </div>

                    {/* Card 2: Deep Charcoal - Zero-Guilt Streak Engine (Tangential Arc Wave) */}
                    <div className="bento-card bento-card--charcoal">
                      <div className="bento-card-art">
                        <svg viewBox="0 0 200 200" className="bento-line-svg">
                          <circle cx="25" cy="130" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="65" cy="130" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="145" cy="130" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="bento-card-text">
                        <h4 className="bento-card-title">Zero-Guilt Streak Engine</h4>
                        <p className="bento-card-sub">Eliminating daily streak counters to protect maternal mental well-being.</p>
                      </div>
                    </div>

                    {/* Card 3: Golden Mustard - Post-Natal Safety Matrix (3-Way Venn Diagram) */}
                    <div className="bento-card bento-card--mustard">
                      <div className="bento-card-art">
                        <svg viewBox="0 0 200 200" className="bento-line-svg">
                          <circle cx="100" cy="85" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="70" cy="135" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="130" cy="135" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <text x="100" y="80" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">1</text>
                          <text x="65" y="142" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">2</text>
                          <text x="135" y="142" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold">3</text>
                        </svg>
                      </div>
                      <div className="bento-card-text">
                        <h4 className="bento-card-title">Post-Natal Safety Matrix</h4>
                        <p className="bento-card-sub">Automated Core &amp; Diastasis Recti safety filtering tailored to recovery timeline.</p>
                      </div>
                    </div>

                    {/* Card 4: Linen Cream - Co-Design Synthesis (3D Mesh Hemisphere) */}
                    <div className="bento-card bento-card--cream">
                      <div className="bento-card-art">
                        <svg viewBox="0 0 200 200" className="bento-line-svg">
                          <ellipse cx="100" cy="130" rx="80" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <ellipse cx="100" cy="130" rx="55" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <ellipse cx="100" cy="130" rx="30" ry="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <line x1="20" y1="130" x2="180" y2="130" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div className="bento-card-text">
                        <h4 className="bento-card-title">Co-Design Synthesis</h4>
                        <p className="bento-card-sub">Miro workshops with 12 nursing mothers, Product Managers, &amp; Obstetric Consultants.</p>
                      </div>
                    </div>

                  </div>
                </div>
              ) : sec.mockType === 'findings-dot-matrix' ? (
                <div className="findings-matrix-container">
                  {/* Left Column: Stat Callout & Data Context */}
                  <div className="findings-stat-col">
                    <span className="findings-stat-val">84%</span>
                    <p className="findings-stat-desc">
                      of nursing mothers abandoned traditional fitness apps due to rigid streak counters triggering emotional guilt during early recovery.
                    </p>
                    <div className="findings-provenance-tag">
                      <span className="provenance-dot" />
                      <span className="provenance-txt">Dovetail Thematic Synthesis • 32 Interviews</span>
                    </div>
                  </div>

                  {/* Right Column: 10x10 Waffle Dot Grid Matrix */}
                  <div className="findings-matrix-col">
                    <div className="matrix-labels-wrap">
                      <span className="matrix-label matrix-label--purple">84% Habit Abandonment</span>
                      <span className="matrix-label matrix-label--lime">16% Maintained Routine</span>
                    </div>
                    <div className="waffle-grid-matrix">
                      {Array.from({ length: 100 }).map((_, i) => {
                        const isPurple = i < 84
                        return (
                          <div
                            key={i}
                            className={`waffle-dot ${isPurple ? 'waffle-dot--purple' : 'waffle-dot--lime'}`}
                            title={isPurple ? `Participant #${i + 1}: Abandoned due to streak guilt` : `Participant #${i + 1}: Maintained flexible micro-routine`}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : sec.mockType === 'triple-card' ? (
                <div className={`mock-triple-grid ${caseStudyId === 'case-02' ? 'mock-triple-grid--verse' : ''}`}>
                  {/* Card 01: Soft Purple Scalloped Cloud Card */}
                  <div className="scallop-card scallop-card--purple">
                    <div className="scallop-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
                        <line x1="12" y1="2" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                      </svg>
                    </div>
                    <div className="scallop-card-body">
                      <span className="scallop-card-num">{caseStudyId === 'case-02' ? '65%' : '92%'}</span>
                      <h4 className="scallop-card-title">{caseStudyId === 'case-02' ? 'Process Time Gain' : 'Task Success Rate'}</h4>
                      <p className="scallop-card-text">
                        {caseStudyId === 'case-02'
                          ? '15 dealership finance managers completed deal submittals in 16 minutes down from 45 minutes on legacy portals.'
                          : '22 of 24 nursing mothers completed energy-matched micro-stretches without schedule friction during postpartum testing.'}
                      </p>
                    </div>
                  </div>

                  {/* Card 02: Full-Bleed Image Card (Middle Position) */}
                  <div className="triple-card-mock testing-video-card testing-video-card--full">
                    <img 
                      src={caseStudyId === 'case-02' ? verseYellowCarImg : "https://assets.grok.com/users/a8dbd35a-7186-4f4d-9312-db52f52cdba5/generated/ab24a148-974d-4067-b8f4-e3b08abe52fa/image.jpg"} 
                      alt="Usability Testing Session" 
                      className="testing-full-video-media"
                    />
                  </div>

                  {/* Card 03: Soft Golden Butter Scalloped Cloud Card */}
                  <div className="scallop-card scallop-card--amber">
                    <div className="scallop-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scallop-badge-icon">
                        <line x1="12" y1="2" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                      </svg>
                    </div>
                    <div className="scallop-card-body">
                      <span className="scallop-card-num">{caseStudyId === 'case-02' ? '86.5' : '88.5'}</span>
                      <h4 className="scallop-card-title">SUS Score</h4>
                      <p className="scallop-card-text">
                        {caseStudyId === 'case-02'
                          ? 'System Usability Scale rated in the 95th percentile across 3 iterative testing rounds with dealership finance directors.'
                          : 'System Usability Scale rated in the 95th percentile across 3 iterative testing rounds with healthcare specialists.'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : sec.mockType === 'impact-dashboard-grid' ? (
                caseStudyId === 'case-02' ? (
                  <div className="verse-result-showcase-container">
                    {/* Eyebrow */}
                    <span className="result-eyebrow">Result</span>

                    {/* Main Headline / Impact Statement */}
                    <h3 className="result-main-headline">
                      Achieve measurable financing velocity with single-screen credit intake, real-time lender pre-screening, and automated contract execution for dealership growth
                    </h3>

                    {/* Testimonial Author Row */}
                    <div className="result-author-row">
                      <div className="result-avatar-circle">
                        <img src={avatar1Img} alt="Emeka Okafor" className="author-avatar-img" />
                      </div>
                      <div className="result-author-info">
                        <span className="author-name">Emeka Okafor</span>
                        <span className="author-role">F&amp;I Director, Apex Motors Group</span>
                      </div>
                    </div>

                    {/* Bottom Grid: 2 Visual Cards + Summary & 3 Stat Counters */}
                    <div className="result-bottom-grid">
                      
                      {/* Visual Analytics Column (2 Soft Cards) */}
                      <div className="result-cards-column">
                        
                        {/* Card 1: Grow Credit Approvals (Bar Chart) */}
                        <div className="res-visual-card">
                          <div className="res-card-top">
                            <span className="res-card-label">Grow Approvals</span>
                            <span className="res-card-num">+31%</span>
                          </div>
                          <div className="res-bar-chart">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug'].map((month, idx) => {
                              const heights = ['40%', '60%', '85%', '65%', '92%', '75%', '95%'];
                              return (
                                <div key={month} className="res-bar-col">
                                  <div className="res-bar-track">
                                    <div className="res-bar-fill" style={{ height: heights[idx] }} />
                                  </div>
                                  <span className="res-bar-month">{month}</span>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Card 2: Deal Time Reduction (Donut Ring Chart) */}
                        <div className="res-visual-card">
                          <div className="res-card-top">
                            <span className="res-card-label">Deal Time Saved</span>
                            <span className="res-card-num">-65%</span>
                          </div>
                          <div className="res-donut-chart">
                            <svg viewBox="0 0 120 120" className="donut-svg">
                              <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16" />
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#D9F5C2" strokeWidth="16" strokeDasharray="283" strokeDashoffset="180" strokeLinecap="round" transform="rotate(-90 60 60)" />
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#8C75FF" strokeWidth="16" strokeDasharray="283" strokeDashoffset="100" strokeLinecap="round" transform="rotate(20 60 60)" />
                            </svg>
                            <div className="donut-center-text">
                              <span className="donut-val">$4.2M</span>
                              <span className="donut-lbl">Recovered</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Right Column: Narrative Summary & 3 Metric Counters */}
                      <div className="result-details-column">
                        <p className="result-summary-text">
                          Deploying Verse across pilot dealerships eliminated multi-portal data entry friction, enabling finance directors to close deals faster while increasing customer trust at the sales desk.
                        </p>

                        <div className="result-counters-row">
                          <div className="result-counter-item">
                            <span className="res-counter-num">08</span>
                            <span className="res-counter-lbl">Weeks of field study</span>
                          </div>
                          <div className="result-counter-item">
                            <span className="res-counter-num">22</span>
                            <span className="res-counter-lbl">Dealerships evaluated</span>
                          </div>
                          <div className="result-counter-item">
                            <span className="res-counter-num">400+</span>
                            <span className="res-counter-lbl">Live deal logs analyzed</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                ) : (
                  <div className="impact-dashboard-container">
                  {/* Top Card: Wide Segment Slider Card (~100% Width) */}
                  <div className="impact-card impact-card--wide">
                    <div className="impact-slider-track-wrap">
                      <div className="impact-slider-axis">
                        <span>0%</span>
                        <div className="impact-slider-handle" style={{ left: '90%' }}>
                          <span className="handle-icon">
                            <img src={avatar1Img} alt="Participant Leader" className="avatar-img-fit" />
                          </span>
                          <div className="handle-crosshair" />
                        </div>
                        <span>100%</span>
                      </div>
                      <div className="impact-slider-bar-track">
                        <div className="impact-slider-bar-fill" style={{ width: '90%' }} />
                      </div>
                    </div>

                    <div className="impact-segments-row">
                      <div className="impact-segment-col">
                        <div className="segment-badge-wrap">
                          <span className="segment-pill segment-pill--green" />
                          <span className="segment-title">{caseStudyId === 'case-02' ? '-65% Deal Friction Time' : '+42% 90-Day Retention'}</span>
                        </div>
                        <div className="segment-avatars">
                          <img src={avatar1Img} alt="Participant 1" className="avatar-circle-img" />
                          <img src={avatar2Img} alt="Participant 2" className="avatar-circle-img" />
                          <img src={avatar3Img} alt="Participant 3" className="avatar-circle-img" />
                          <span className="avatar-count-pill">{caseStudyId === 'case-02' ? '22 Dealerships' : '+22 Active Mothers'}</span>
                        </div>
                      </div>

                      <div className="impact-segment-col">
                        <div className="segment-badge-wrap">
                          <span className="segment-pill segment-pill--grey" />
                          <span className="segment-title">{caseStudyId === 'case-02' ? '+31% Credit Approvals' : '-28% Churn Drop-Off'}</span>
                        </div>
                        <div className="segment-avatars">
                          <img src={avatar3Img} alt="Participant 4" className="avatar-circle-img" />
                          <span className="avatar-count-pill">{caseStudyId === 'case-02' ? '$4.2M Recovered' : '+2 Cohorts'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: 2 Equal Square Cards (~50% Width Each) */}
                  <div className="impact-bottom-row">
                    {/* Bottom-Left Card */}
                    <div className="impact-card impact-card--square">
                      <div className="histogram-header">
                        <span className="histogram-eyebrow">{caseStudyId === 'case-02' ? 'Transaction Velocity Density' : 'Micro-Routine Session Density'}</span>
                        <h4 className="histogram-title">{caseStudyId === 'case-02' ? '16-Min Deal Completion Adoption' : '5-Min & 10-Min Stretch Adoption'}</h4>
                        <span className="histogram-sublbl">{caseStudyId === 'case-02' ? 'Deal Submittal Completion Rate' : 'Daily Routine Completion Rate'}</span>
                      </div>

                      <div className="histogram-chart-wrap">
                        <div className="histogram-bars">
                          <div className="hist-bar hist-bar--muted" style={{ height: '35%' }} />
                          <div className="hist-bar hist-bar--muted" style={{ height: '45%' }} />
                          <div className="hist-bar hist-bar--active" style={{ height: '75%' }} />
                          <div className="hist-bar hist-bar--active" style={{ height: '95%' }} />
                          <div className="hist-bar hist-bar--active" style={{ height: '80%' }} />
                          <div className="hist-bar hist-bar--muted" style={{ height: '30%' }} />
                          <div className="hist-bar hist-bar--muted" style={{ height: '20%' }} />
                        </div>
                        <div className="histogram-range-slider">
                          <div className="range-handle-pill">{caseStudyId === 'case-02' ? '10 mins' : '05 mins'}</div>
                          <div className="range-track-line" />
                          <div className="range-handle-pill">{caseStudyId === 'case-02' ? '25 mins' : '15 mins'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom-Right Card */}
                    <div className="impact-card impact-card--square impact-card--venn">
                      <div className="venn-card-header">
                        <div className="venn-header-left">
                          <span className="venn-eyebrow">{caseStudyId === 'case-02' ? 'Approval & Adoption' : 'Retention & Completion'}</span>
                          <div className="venn-hero-val-wrap">
                            <span className="venn-hero-val">{caseStudyId === 'case-02' ? '98%' : '94%'}</span>
                          </div>
                        </div>
                      </div>

                      {/* 3-Bubble Cluster Visualization */}
                      <div className="venn-bubbles-container">
                        <div className="venn-bubble venn-bubble--pink">
                          <span>20%</span>
                        </div>
                        <div className="venn-bubble venn-bubble--lime">
                          <span>32%</span>
                        </div>
                        <div className="venn-bubble venn-bubble--blue">
                          <span>48%</span>
                        </div>
                      </div>

                      {/* Legend Rows */}
                      <div className="venn-legend-rows">
                        <div className="venn-legend-item">
                          <div className="venn-legend-label">
                            <span className="venn-dot venn-dot--blue" />
                            <span>{caseStudyId === 'case-02' ? 'Process Velocity' : '90-Day Retention'}</span>
                          </div>
                          <div className="venn-legend-val">
                            <span>48%</span>
                            <span className="venn-trend venn-trend--up">{caseStudyId === 'case-02' ? '↗ -65%' : '↗ +42%'}</span>
                          </div>
                        </div>

                        <div className="venn-legend-item">
                          <div className="venn-legend-label">
                            <span className="venn-dot venn-dot--lime" />
                            <span>{caseStudyId === 'case-02' ? 'Credit Approvals' : 'Micro-Routine Completion'}</span>
                          </div>
                          <div className="venn-legend-val">
                            <span>32%</span>
                            <span className="venn-trend venn-trend--up">{caseStudyId === 'case-02' ? '↗ +31%' : '↗ +28%'}</span>
                          </div>
                        </div>

                        <div className="venn-legend-item">
                          <div className="venn-legend-label">
                            <span className="venn-dot venn-dot--pink" />
                            <span>{caseStudyId === 'case-02' ? 'Manager Adoption' : 'Zero-Guilt Consistency'}</span>
                          </div>
                          <div className="venn-legend-val">
                            <span>20%</span>
                            <span className="venn-trend venn-trend--up">{caseStudyId === 'case-02' ? '↗ 98%' : '↗ +18%'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              ) : sec.mockType === 'reflections-bento-board' ? (
                <div className="strat-bento-container">
                  {/* Top Board Header */}
                  <div className="strat-bento-header">
                    <h3 className="strat-bento-title">Reflections &amp; Strategic Takeaways</h3>
                    <p className="strat-bento-subtitle">
                      Designing for vulnerable maternal cohorts required organizing product logic around genuine human constraints rather than artificial growth hacks.
                    </p>
                  </div>

                  {/* 6-Card Strategy Bento Grid */}
                  <div className="strat-bento-grid">
                    
                    {/* Card 1: Top Sky Blue Hero Card */}
                    <div className="strat-card strat-card--blue strat-card--full">
                      <div className="strat-card-top">
                        <span className="strat-card-tag">UXR MATURITY ROADMAP</span>
                      </div>
                      
                      <div className="roadmap-stepped-axis">
                        <div className="roadmap-step">
                          <span className="step-node">01</span>
                          <span className="step-label">Discovery</span>
                        </div>
                        <div className="roadmap-line" />
                        <div className="roadmap-step">
                          <span className="step-node">02</span>
                          <span className="step-label">Shadowing</span>
                        </div>
                        <div className="roadmap-line" />
                        <div className="roadmap-step">
                          <span className="step-node">03</span>
                          <span className="step-label">Co-Design</span>
                        </div>
                        <div className="roadmap-line" />
                        <div className="roadmap-step">
                          <span className="step-node">04</span>
                          <span className="step-label">Launch Impact</span>
                        </div>
                      </div>

                      <div className="roadmap-text-row">
                        <p className="roadmap-desc">
                          Initial discovery across 8 West African urban hubs revealed that 78% of nursing mothers abandoned traditional fitness apps within 14 days due to streak-induced guilt.
                        </p>
                        <p className="roadmap-desc">
                          Replacing rigid daily counters with flexible energy-matched micro-routines tripled 90-day retention and established clinical safety as a core product retainer.
                        </p>
                      </div>
                    </div>

                    {/* Middle Row Layout */}
                    <div className="strat-middle-row">
                      
                      {/* Card 2: Crisp White Card */}
                      <div className="strat-card strat-card--white">
                        <h3 className="bento-title-48">EMPATHY MENTAL MODEL</h3>
                        <div className="golden-circle-wrap">
                          <div className="golden-circle-art">
                            <svg viewBox="0 0 200 200" className="golden-circle-svg">
                              <circle cx="100" cy="100" r="90" fill="rgba(0, 0, 0, 0.03)" stroke="#121418" strokeWidth="1" strokeDasharray="3 3" />
                              <circle cx="100" cy="100" r="60" fill="rgba(0, 0, 0, 0.05)" stroke="#121418" strokeWidth="1.2" />
                              <circle cx="100" cy="100" r="30" fill="#121418" />
                              <text x="100" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">WHY</text>
                              <text x="100" y="58" textAnchor="middle" fill="#121418" fontSize="10" fontFamily="sans-serif" fontWeight="bold">HOW</text>
                              <text x="100" y="24" textAnchor="middle" fill="#121418" fontSize="10" fontFamily="sans-serif" fontWeight="bold">WHAT</text>
                            </svg>
                          </div>
                          
                          <div className="golden-circle-callouts">
                            <div className="callout-item">
                              <span className="callout-dot" />
                              <p><strong>WHY:</strong> Preserve maternal dignity &amp; mental well-being during postpartum recovery.</p>
                            </div>
                            <div className="callout-item">
                              <span className="callout-dot" />
                              <p><strong>HOW:</strong> Eliminate streak counters &amp; adapt routines to infant feeding schedules.</p>
                            </div>
                            <div className="callout-item">
                              <span className="callout-dot" />
                              <p><strong>WHAT:</strong> 5-to-15 min micro-stretches &amp; Diastasis Recti safety filters.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Stack */}
                      <div className="strat-right-stack">
                        {/* Card 3 */}
                        <div className="strat-card strat-card--green">
                          <span className="strat-card-tag dark-tag">RESEARCH VALUES</span>
                          <div className="pill-tags-grid">
                            <span className="bento-pill-tag active">Dignity First</span>
                            <span className="bento-pill-tag active">Clinical Safety</span>
                            <span className="bento-pill-tag active">Zero Guilt</span>
                            <span className="bento-pill-tag">Flexibility</span>
                            <span className="bento-pill-tag">Authentic Empathy</span>
                            <span className="bento-pill-tag">Co-Design</span>
                          </div>
                        </div>

                        {/* Card 4 */}
                        <div className="strat-card strat-card--pink">
                          <span className="strat-card-tag dark-tag">MATERNAL ARCHETYPES</span>
                          <div className="pill-tags-grid">
                            <span className="bento-pill-tag active">First-Time Moms</span>
                            <span className="bento-pill-tag active">Multi-Child Moms</span>
                            <span className="bento-pill-tag">Postpartum Recovery</span>
                            <span className="bento-pill-tag">Sleep Deprived</span>
                            <span className="bento-pill-tag">Infant Governed</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Row Layout */}
                    <div className="strat-bottom-row">
                      
                      {/* Card 5 */}
                      <div className="strat-card strat-card--purple">
                        <span className="strat-card-tag dark-tag">PRODUCT PRINCIPLES SLIDERS</span>
                        <div className="bento-sliders-list">
                          <div className="slider-item">
                            <div className="slider-labels">
                              <span>Streak Guilt</span>
                              <span>Zero-Guilt Engine</span>
                            </div>
                            <div className="slider-bar-track">
                              <div className="slider-fill-bar" style={{ width: '85%' }} />
                            </div>
                          </div>

                          <div className="slider-item">
                            <div className="slider-labels">
                              <span>Fixed 45-Min Workouts</span>
                              <span>Adaptive Micro-Routines</span>
                            </div>
                            <div className="slider-bar-track">
                              <div className="slider-fill-bar" style={{ width: '90%' }} />
                            </div>
                          </div>

                          <div className="slider-item">
                            <div className="slider-labels">
                              <span>One-Size-Fits-All</span>
                              <span>Diastasis Recti Safety</span>
                            </div>
                            <div className="slider-bar-track">
                              <div className="slider-fill-bar" style={{ width: '95%' }} />
                            </div>
                          </div>

                          <div className="slider-item">
                            <div className="slider-labels">
                              <span>Growth Hacks</span>
                              <span>Maternal Empathy</span>
                            </div>
                            <div className="slider-bar-track">
                              <div className="slider-fill-bar" style={{ width: '88%' }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card 6 */}
                      <div className="strat-card strat-card--yellow">
                        <span className="strat-card-tag dark-tag">FITFLEX POSITIONING MATRIX</span>
                        <div className="matrix-chart-wrap">
                          <div className="matrix-quad-grid">
                            <div className="matrix-axis-label axis-y-top">Zero Guilt</div>
                            <div className="matrix-axis-label axis-y-bottom">High Guilt</div>
                            <div className="matrix-axis-label axis-x-left">Fixed Routines</div>
                            <div className="matrix-axis-label axis-x-right">Adaptive Routines</div>
                            
                            <div className="matrix-line-h" />
                            <div className="matrix-line-v" />
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ) : sec.mockType === 'reflections-flow-impact' ? (
                <div className="flow-impact-container">
                  {/* Top: Legacy vs. Verse Workflow Diagram */}
                  <div className="flow-diagram-card reflection-dark-card">
                    <span className="flow-diagram-tag">LEGACY VS. VERSE WORKFLOW</span>

                    <div className="flow-row">
                      <span className="flow-row-label flow-row-label--legacy">LEGACY FLOW</span>
                      <div className="flow-steps">
                        {['Buyer Intake', 'Manual Re-Entry ×4 Lenders', 'Sequential Review', '45-Min Wait', 'Deal Risk'].map((step, i, arr) => (
                          <React.Fragment key={step}>
                            <span className="flow-step flow-step--muted">{step}</span>
                            {i < arr.length - 1 && <span className="flow-arrow">→</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="flow-divider" />

                    <div className="flow-row">
                      <span className="flow-row-label flow-row-label--verse">VERSE FLOW</span>
                      <div className="flow-steps">
                        {['Buyer Intake', 'Single-Entry Record', 'Parallel Multi-Lender Routing', 'Real-Time Pre-Screening', 'Fast Close'].map((step, i, arr) => (
                          <React.Fragment key={step}>
                            <span className="flow-step flow-step--accent">{step}</span>
                            {i < arr.length - 1 && <span className="flow-arrow flow-arrow--accent">→</span>}
                          </React.Fragment>
                        ))}
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
              ) : (
                <div className="mock-canvas-inner">
                  <div className="large-screen-mock">
                    <span className="mock-badge">RESEARCH ARTIFACT {index + 1}</span>
                    <p className="mock-title">{sec.mockLabel}</p>
                  </div>
                </div>
              )}
            </div>

          </section>
        ))}

        {/* Footer Next Project Navigation */}
        <footer className="adekoya-footer">
          <div className="footer-next-wrap">
            <span className="next-lbl">NEXT CASE STUDY</span>
            <button type="button" className="next-title-btn" onClick={onBackToWork}>
              Explore Selected Works →
            </button>
          </div>
        </footer>

      </div>
    </div>
  )
}
