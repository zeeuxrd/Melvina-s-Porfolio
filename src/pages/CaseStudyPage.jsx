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
    tagline: 'A solution to help nursing mothers to lose weight and live a healthy lifestyle.',
    heroDescription: 'This case study showcases the successful mentorship journey of three product design mentees, guided through a transformative end-to-end process to deepen their UX research knowledge, elevate output quality, and improve hirability   delivering Fitflex, a validated weight-loss and healthy-lifestyle app designed around the real constraints of postpartum life. The work was grounded in secondary research, in-depth user interviews, and iterative usability testing with nursing mothers.',
    role: 'Lead Product Designer & Team Mentor',
    timeline: '6 Weeks',
    discipline: 'Maternal UX & Health Strategy',
    team: '3 Product Design Mentees & Lead',
    
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        text: 'Fitflex is a weight loss and healthy lifestyle app designed for nursing mothers   a group whose post-natal realities make conventional fitness solutions ineffective. Late-night feeds, broken sleep, unpredictable schedules, and the physical recovery demands of childbirth mean that one-size-fits-all workout plans and strict calorie regimes simply do not survive contact with a new mother\'s day. Fitflex was conceived as an alternative: an evidence-led product built around the real constraints of postpartum life, helping nursing mothers lose weight and build sustainable healthy habits without guilt or unrealistic expectations.\n\nBeyond the product itself, the project was structured as a dual-purpose engagement. The first objective was to design a validated, user-centred solution grounded in rigorous UX research   from in-depth interviews with nursing mothers and secondary benchmarking, through affinity synthesis, to rapid prototyping and iterative usability testing with real users. The second was to mentor three early-career product designers through the full end-to-end process over a 6-week sprint, strengthening their confidence and hirability.',

        mockLabel: 'Executive Scope & Mentorship Process Artifact',
        mockType: 'overview-mobile-flow',
      },
      {
        id: 'challenge',
        title: 'The Problem',
        text: 'Over 2.8 million people globally, die annually from being overweight or obese (WHO, 2021), yet 75% of weight loss attempts end in failure (International Journal of Obesity, 2018). For nursing mothers in particular, weight management is especially challenging due to limited time, low motivation, knowledge gaps, and unhealthy eating habits. These struggles often lead to obesity, chronic disease risks, and reduced well-being highlighting the need for more supportive, realistic solutions.\n\nFitflex answers this need with a deeply human approach: a weight loss and healthy lifestyle app built around the realities of postpartum life, not against them. It pairs realistic, sustainable habit design with meal and activity guidance that bends around a new mother\'s unpredictable day rather than demanding rigid schedules. Underpinned by rigorous research with nursing mothers, the product validates its core assumptions at every step, ensuring what it asks of users is achievable and what it delivers is genuinely effective. The result is a supportive companion that helps nursing mothers lose weight and build lasting healthy habits without guilt, burnout, or unrealistic expectations.',
        mockLabel: 'Maternal Friction Pathway & Drop-Off Nodes',
        mockType: 'fitflex-wavy-challenge',
      },
      {
        id: 'research',
        title: 'Research Methodology & Strategy',
        text: 'Secondary research revealed that 45% of women globally experience substantial weight gain (≥20 pounds) in the first year after childbirth (Journal of Women\'s Health). Nursing mothers represent extreme users whose unique challenges amplify common barriers such as time, motivation, and lifestyle constraints. Success with this segment not only addresses a critical need but also ensures broader applicability to other user groups, maximizing both impact and business value. The same protocol that validated the product doubled as the mentees\' hands-on runway, so every research stage built their independence as practitioners alongside the evidence for the design.',
        quote: '"I\'d never had a reason to go on a weightloss journey before childbirth"',
        quoteAuthor: 'Adebisi, Nursing Mother and Project Manager (Research participant from indepth interview session)',
        mockLabel: 'Field Methodology & Research Framework Matrix',
        mockType: 'sticky-board',
        stickyNotes: [
          {
            type: 'terracotta',
            tag: 'EXTREME USER RATIONALE',
            lines: [
              '• Target Segment: Postpartum nursing mothers facing extreme time, energy, and physical constraints.',
              '• Strategic Value: Extreme user insights uncover deep friction points standard fitness apps ignore.',
              '• Business Impact: Designing for extreme constraints ensures broader, more resilient product adoption.',
            ],
          },
          {
            type: 'yellow',
            tag: 'RESEARCH METHODOLOGY PROTOCOL',
            checklist: [
              '✓ Secondary Research & Industry Benchmarking',
              '✓ In-Depth User Interviews with Nursing Mothers',
              '✓ Data Synthesis: Affinity Mapping & Impact-Value Matrix',
              '✓ Rapid Interactive Prototyping & Usability Testing',
            ],
          },
          {
            type: 'pink',
            tag: 'MENTORSHIP & PROJECT SCOPE',
            checklist: [
              '✓ Lead Product Designer & Team Mentor guiding 3 product design mentees.',
              '✓ 6-Week Sprint: Miro (Synthesis) & Figma (Prototyping/Testing).',
              '✓ Goal: Deepen UXR process, elevate output quality & hirability.',
            ],
          },
        ],
      },
      {
        id: 'findings',
        title: 'Key Findings & Opportunity Areas',
        text: 'Through secondary research, we identified critical gaps in the existing landscape that our study could address. Our primary research further revealed recurring patterns, and by synthesizing user feedback, we identified two key opportunity areas with the highest potential for impact, using affinity mapping and an impact-value prioritization matrix. These themes emerged as the most frequent and recurring needs expressed by users, offering a clear direction for our solution to address.',
        mockLabel: 'Two Key Opportunity Areas & How Might We Framework',
        mockType: 'findings-bar-chart',
      },
      {
        id: 'testing',
        title: 'Testing and Validating Digital Solution',
        text: 'We conducted evaluative usability testing with 24 nursing mothers across 3 iterative rounds. Sessions focused on task completion, emotional response, and comprehension of key flows. Findings were used to refine interaction patterns, reduce friction, and confirm that the solution addressed real behavioural and motivational needs   not just surface-level usability.',

        mockLabel: 'Evaluative Usability Testing Scorecards & Task Logs',
        mockType: 'triple-card',
      },
      {
        id: 'ideation',
        title: 'Note for Future Self',
        text: 'To maintain momentum and ensure long-term product impact, we identified key strategic priorities for future iterations: Fitflex is designed to grow with its users, from pregnancy through early motherhood and beyond. Each future phase keeps maternal safety and accessibility at the core while expanding evidence-based support.',
        mockLabel: 'Future Product Benchmarking & Roadmap Strategy',
        mockType: 'ideation-slider-matrix',
      },
      {
        id: 'reflections',
        title: 'Reflections',
        text: 'This project was quite unique for me because it wasn\'t just about delivering value for the solution, but also because it provided an opportunity for me to transfer knowledge to younger designers, guide them to adopt proven design strategies, embrace industry best practices, and elevate the quality of their work, ultimately strengthening their confidence and hirability. Beyond that, I was reminded that meaningful design isn\'t just about aesthetics it adapts to real user needs, scales with them, and evolves through continuous feedback.',
        mockLabel: 'UXR Maturity & Project Timeline Framework',
        mockType: 'fitflex-timeline-reflection',
      },
    ],
  },
  
  'case-02': {
    title: 'Verse',
    heroImage: verseArchitectureImg,
    architectureImage: verseHeroImg,
    tagline: 'Streamlining B2B dealership credit orchestration.',
    heroDescription: 'Designed a comprehensive flow for a platform that addresses key pain points in the $1.3 trillion automotive retail market, with potential to increase conversion rates by 40% compared to traditional dealerships.',
    role: 'Senior UX Researcher & Systems Analyst',
    toolStack: 'Miro, Figma, Google Slides',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        text: 'The automotive industry has been slow to adapt to digital transformation, with 95% of car purchases still requiring physical dealership visits. Post-pandemic consumer behavior revealed a strong preference for contactless purchasing experiences. Verse was designed to close this gap   delivering an end-to-end digital purchasing flow for the $1.3 trillion automotive retail market, with the potential to increase buyer conversion rates by 40% compared to traditional dealerships. Built around the realities of dealership finance managers, Verse eliminates multi-portal data re-entry, automates credit decisioning, and streamlines deal execution during live negotiations. The result is a trusted, convenient path to vehicle ownership that removes the hassle of traditional dealership visits while meeting the flexible payment needs of urban buyers.',
        mockLabel: 'AI Automotive Financing & System Architecture Portal',
        mockType: 'overview-modules-grid',
      },
      {
        id: 'challenge',
        title: 'Challenge',
        text: 'Traditional car buying is inconvenient, time-consuming, and lacks transparency in pricing and payment options for urban customers in Nigeria. Middle-income professionals living in motorable cities need a trusted, more convenient way to purchase vehicles with flexible payment options   eliminating the hassle and time constraints of traditional dealership visits to better meet their needs.',
        mockLabel: 'Dealership Operational Friction & Task Analysis',
        mockType: 'problem-context-cards',
      },
      {
        id: 'research',
        title: 'Product Discovery & Research Strategy',
        text: 'Our research strategy spanned hypothesis prioritization, user research, feature ideation, and strategic metric alignment. We explored the Nigerian automotive market, conducted user surveys and interviews, mapped the end-to-end car-buying journey, and applied the MoSCoW framework to define an MVP roadmap aligned with key business OKRs.',
        mockLabel: 'Product Strategy & Research Execution Framework Matrix',
        mockType: 'sticky-board',
        stickyNotes: [
          {
            type: 'terracotta',
            tag: '01. DISCOVERY & HYPOTHESIS',
            lines: [
              '• Explored the Nigerian car market through market research & expert stakeholder calls.',
              '• Prioritized key hypotheses on trust, payments, inspections, & dealership networks.',
              '• Mapped assumptions using a Product Assumption Map to guide risk mitigation.',
            ],
          },
          {
            type: 'yellow',
            tag: '02. USER RESEARCH & MAPPING',
            checklist: [
              '✓ Conducted quantitative surveys & qualitative user interviews',
              '✓ Mapped end-to-end buyer journeys across motorable cities',
              '✓ Uncovered core needs: transparent pricing, flexible payments, & vehicle inspections',
              '✓ Validated documentation & verification friction points',
            ],
          },
          {
            type: 'pink',
            tag: '03. IDEATION & PRIORITIZATION',
            lines: [
              '1. Created comprehensive user stories & digital feature concepts.',
              '2. Prioritized essential MVP features using the MoSCoW framework.',
              '3. Focused sprint planning on critical user friction points first.',
            ],
          },
          {
            type: 'lilac',
            tag: '04. STRATEGY & BUSINESS OKRS',
            lines: [
              '• Defined actionable MVP OKRs directly aligned with overarching business objectives.',
              '• Goal: Become the most used car purchase platform in motorable Nigerian cities.',
              '• Measured adoption velocity, user trust indicators, & deal conversion lift.',
            ],
          },
        ],
      },
      {
        id: 'user-stories',
        title: 'User Stories & Persona Insights',
        text: 'Translating research insights into core user stories surfaced key requirements around pricing transparency, flexible financing options, and verified vehicle delivery for urban Nigerian professionals.',
        mockLabel: 'Urban Buyer User Stories & Requirement Scenarios',
        mockType: 'verse-user-stories',
      },
      {
        id: 'findings',
        title: 'Key Findings & Insights',
        text: 'Synthesizing 400+ deal logs surfaced three critical system breakdowns: (1) the "18-Minute Manual Entry Tax" of re-typing identical customer fields across 6 portals, (2) a Pre-Approval Predictability Gap where 71% of managers guessed lender fit blindly, and (3) Customer Trust Decay during long waiting periods with the buyer seated across the desk.',
        quote: '"If I lose 30 minutes fighting with credit entry screens while a customer sits in front of me, the deal is dead. They walk out to think about it and buy somewhere else."',
        quoteAuthor: 'F&I Director   12 Years Experience, Lagos Dealership',
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
        text: 'Deploying Verse across pilot dealerships cut deal transaction time by 65% (45 mins → 16 mins), lifted credit submittal approval rates by 31%, and reached 98% finance manager adoption within 30 days of rollout recovering an estimated $4.2M in annual deal slippage.',
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
        text: 'Enterprise UX research is about eliminating systemic friction so domain experts can focus on high-value human relationships. In high-stakes fintech, cutting transaction time from 45 to 16 minutes does not just optimize software it saves millions in business revenue.',
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
      { id: 'reflections', title: 'Reflections', text: 'Physical context like sticky fingers in a kitchen matters just as much as digital UI.', mockLabel: 'Contextual Research Notes', mockType: 'single-large' },
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
              <span className="hero-mock-icon">ðŸ’»</span>
              <span className="hero-mock-text">{data.title}   Main Product Hero Artifact</span>
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
              <span className="meta-key">TOOL STACK</span>
              <span className="meta-val">{data.toolStack || 'Miro, Figma, Google Slides'}</span>
            </div>
            {data.team && (
              <div className="meta-row">
                <span className="meta-key">TEAM</span>
                <span className="meta-val">{data.team}</span>
              </div>
            )}
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
                    <cite className="quote-cite">  {sec.quoteAuthor}</cite>
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
            <div className={`adekoya-section-canvas ${sec.mockType === 'overview-mobile-flow' ? 'adekoya-section-canvas--bleed' : ''}`} data-reveal data-delay="1">
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
