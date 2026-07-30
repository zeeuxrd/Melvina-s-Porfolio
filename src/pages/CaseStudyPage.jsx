import React, { useEffect } from 'react'
import './CaseStudyPage.css'

const caseStudyData = {
  'case-01': {
    title: 'Fitflex',
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
        mockType: 'single-large',
      },
      {
        id: 'challenge',
        title: 'Challenge',
        text: 'Postpartum recovery is fraught with guilt and fatigue. Primary research highlighted that rigid daily workout notifications and unadapted core exercises created physical discomfort and anxiety. Our challenge was redesigning the core habit-building model around infant feeding schedules and post-natal physiological constraints.',
        mockLabel: 'User Friction Map & Drop-Off Funnel Analysis',
        mockType: 'triple-card',
      },
      {
        id: 'research',
        title: 'Research & Discovery',
        text: 'To establish an evidence-led foundation, we executed a 12-week triangulated research protocol across 8 West African urban hubs (Lagos, Accra, Abuja, Abidjan, Dakar, Kumasi, Ibadan, Yaoundé). We combined 32 semi-structured qualitative interviews, 14 contextual in-home shadowing sessions during morning infant-care routines, and a 3-week WhatsApp diary study with 24 nursing mothers. Our research aimed to map the intersection between physical post-natal recovery, sleep fragmentation, and emotional guilt triggered by conventional fitness apps.',
        mockLabel: 'Field Methodology & 8-Country Sampling Matrix',
        mockType: 'sticky-board',
      },
      {
        id: 'findings',
        title: 'Key Findings & Insights',
        text: 'Synthesizing qualitative data into Dovetail revealed three main themes: (1) Guilt & All-or-Nothing Mindsets when missing workouts, (2) Predictability Crises driven by baby sleep cycles, and (3) Post-Natal Physical Discomfort from standard unadapted exercise routines.',
        quote: '"I don\'t need an app to tell me I failed today. I need an app that understands I spent 4 hours soothing my baby and offers a 5-minute stretch instead."',
        quoteAuthor: 'Participant #14 — Nursing mother of 4-month-old',
        mockLabel: 'Dovetail Thematic Coding & Affinity Cluster Canvas',
        mockType: 'single-large',
      },
      {
        id: 'ideation',
        title: 'Ideation & Design Process',
        text: 'Working cross-functionally with health specialists and product engineers, we facilitated Miro co-design workshops to frame "Adaptive Micro-Routines" and a "Post-Natal Safety Filter" that adjust workout recommendations based on real-time maternal energy levels.',
        mockLabel: 'Miro Co-Design Workshops & Journey Maps',
        mockType: 'single-large',
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
        mockType: 'single-large',
      },
      {
        id: 'reflections',
        title: 'Reflections',
        text: 'Designing for vulnerable user groups requires replacing growth hacks with authentic empathy. Complexity doesn\'t disappear when features are removed; it disappears when systems are organized around genuine human constraints.',
        mockLabel: 'UXR Maturity & Retrospective Framework',
        mockType: 'single-large',
      },
    ],
  },
  
  'case-02': {
    title: 'Verse',
    tagline: 'Streamlining enterprise automotive financing workflows for North American dealerships.',
    heroDescription: 'Verse is a B2B automotive financing portal connecting dealership finance managers with multi-tier lending institutions. Legacy credit systems forced managers to spend up to 45 minutes re-typing buyer data.',
    role: 'Senior UX Researcher & Systems Analyst',
    timeline: '2024',
    discipline: 'Fintech & Enterprise Systems',
    team: 'Verse Engineering & Product',
    sections: [
      { id: 'overview', title: 'Overview', text: 'Dealership finance managers were losing customer deals due to fragmented credit submittal software.', mockLabel: 'Enterprise System Architecture Overview', mockType: 'single-large' },
      { id: 'challenge', title: 'Challenge', text: 'Redundant data entry and opaque credit pre-approval rules led to a 45-minute average deal completion time.', mockLabel: 'Dealership Task Analysis & Error Funnel', mockType: 'triple-card' },
      { id: 'research', title: 'Research & Discovery', text: 'Shadowed 20+ dealership finance offices during live customer transactions to pinpoint bottlenecks.', mockLabel: 'Dealership Field Research & Shadow Logs', mockType: 'triple-card' },
      { id: 'findings', title: 'Key Findings & Insights', text: 'Discovered that managers lost 18 minutes manually transferring credit fields across legacy lender portals.', quote: '"If I lose 30 minutes fighting with credit entry screens while a customer sits in front of me, the deal is dead."', quoteAuthor: 'Dealership Finance Director', mockLabel: 'Credit Workflow Affinity Canvas', mockType: 'single-large' },
      { id: 'ideation', title: 'Ideation & Design Process', text: 'Designed a unified single-entry orchestration dashboard with real-time pre-screening.', mockLabel: 'Orchestration Dashboard Co-Design Wireframes', mockType: 'single-large' },
      { id: 'testing', title: 'Feedback & Testing Loops', text: 'Ran usability testing across 15 finance officers, demonstrating a 65% reduction in completion time.', mockLabel: 'Task Completion Usability Scorecard', mockType: 'triple-card' },
      { id: 'impact', title: 'Outcome & Impact', text: 'Reduced transaction time by 65% and increased credit submittal conversions by 31%.', metrics: [{ val: '-65%', lbl: 'Process Time' }, { val: '+31%', lbl: 'Approval Rate' }, { val: '98%', lbl: 'Satisfaction' }], mockLabel: 'Dealership Efficiency Analytics', mockType: 'single-large' },
      { id: 'reflections', title: 'Reflections', text: 'Enterprise UXR is about eliminating operational friction so human experts can focus on customer relationships.', mockLabel: 'Enterprise Systems Learning Notes', mockType: 'single-large' },
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
    title: 'Porsche HMI',
    tagline: 'Optimizing digital cockpit interactions for high-speed performance driving.',
    heroDescription: 'Porsche Telematics & HMI Strategy researching driver cognitive load and visual glance duration during performance driving.',
    role: 'Principal HMI Researcher',
    timeline: '2024',
    discipline: 'Automotive & HMI Strategy',
    team: 'Porsche Cockpit Ergonomics Lab',
    sections: [
      { id: 'overview', title: 'Overview', text: 'Balancing digital touchscreen capabilities with driving safety and glance duration limits.', mockLabel: 'Digital Cockpit HMI Architecture', mockType: 'single-large' },
      { id: 'challenge', title: 'Challenge', text: 'Preventing driver distraction caused by prolonged off-road visual glances at touchscreens.', mockLabel: 'Glance Duration & Lane Deviation Study', mockType: 'triple-card' },
      { id: 'research', title: 'Research & Discovery', text: 'Conducted high-fidelity simulator labs with 36 drivers using Tobii eye-tracking hardware.', mockLabel: 'Tobii Eye-Tracking Simulator Records', mockType: 'triple-card' },
      { id: 'findings', title: 'Key Findings & Insights', text: 'Confirmed that visual glances over 1.8 seconds dramatically increased lane deviation risks.', quote: '"At 120 mph on the Autobahn, I need to adjust settings by feel without taking my eyes off the road for a second."', quoteAuthor: 'Performance Test Driver', mockLabel: 'Cognitive Load & Eye Glance Matrix', mockType: 'single-large' },
      { id: 'ideation', title: 'Ideation & Design Process', text: 'Synthesized ergonomic guidelines for hybrid haptic-digital cockpit controls.', mockLabel: 'Hybrid Cockpit Ergonomics Blueprints', mockType: 'single-large' },
      { id: 'testing', title: 'Feedback & Testing Loops', text: 'Benchmarked 12 cockpit prototypes in driving simulators.', mockLabel: 'Simulator Usability Scorecard', mockType: 'triple-card' },
      { id: 'impact', title: 'Outcome & Impact', text: 'Reduced visual glance duration by 40% and established ISO-compliant ergonomics standards.', metrics: [{ val: '-40%', lbl: 'Glance Duration' }, { val: '100%', lbl: 'ISO Safety' }, { val: '15+', lbl: 'HMI Standards' }], mockLabel: 'HMI Ergonomics Impact Report', mockType: 'single-large' },
      { id: 'reflections', title: 'Reflections', text: 'In automotive UXR, safety and usability are indivisible.', mockLabel: 'HMI Safety Framework Notes', mockType: 'single-large' },
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
          <div className="hero-mock-placeholder">
            <span className="hero-mock-icon">💻</span>
            <span className="hero-mock-text">{data.title} — Main Product Hero Artifact</span>
          </div>
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
          <div className="mock-canvas-inner">
            <div className="large-screen-mock">
              <span className="mock-badge">PRIMARY INTERFACE &amp; RESEARCH FRAMEWORK</span>
              <p className="mock-title">{data.title} Product Architecture Overview</p>
            </div>
          </div>
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
              {sec.id === 'research' ? (
                <div className="research-sticky-board">
                  
                  {/* Sticky 1: Terracotta Ruled Note */}
                  <div className="research-sticky sticky-terracotta">
                    <div className="sticky-holes">
                      <span className="hole" />
                      <span className="hole" />
                      <span className="hole" />
                      <span className="hole" />
                    </div>
                    <span className="sticky-tag">FIELD SCOPE &amp; SAMPLING (N=32)</span>
                    <p className="sticky-text">
                      • Target: First-time &amp; multi-child nursing mothers (0-12 mos postpartum).<br />
                      • Markets: 8 West African urban hubs (Lagos, Accra, Abidjan, Dakar).<br />
                      • Screening: Experiencing fatigue, sleep fragmentation, or app abandonment within 30 days of birth.
                    </p>
                  </div>

                  {/* Sticky 2: Yellow Pinned Checklist Note */}
                  <div className="research-sticky sticky-yellow">
                    <div className="pin-accent" />
                    <span className="sticky-tag yellow-tag">TRIANGULATED METHODOLOGY PROTOCOL</span>
                    <ul className="sticky-checklist">
                      <li>✓ 14 Contextual In-Home Shadowing Sessions (6 AM - 10 AM routines)</li>
                      <li>✓ 3-Week WhatsApp Diary Study (tracking energy levels 1-10)</li>
                      <li>✓ 18 Semi-Structured Remote Interviews (body image &amp; spousal support)</li>
                      <li>✓ Quantitative Drop-Off Cohort Analysis (12,000 baseline installs)</li>
                    </ul>
                  </div>

                  {/* Sticky 3: Vibrant Pink Washi Tape Note */}
                  <div className="research-sticky sticky-pink">
                    <div className="tape-accent" />
                    <span className="sticky-tag pink-tag">KEY BEHAVIORAL FRICTION FINDINGS</span>
                    <p className="sticky-text-bold">
                      1. The "Guilt Spiral" (78% Churn): Fixed daily streak counters triggered intense self-blame when missed.<br />
                      2. Infant-Governed Schedules: 92% reported baby feeding cycles rendered calendar notifications useless.<br />
                      3. Physical Trauma Fear: 64% feared unadapted core workouts worsened diastasis recti.
                    </p>
                    <div className="sticky-fold" />
                  </div>

                  {/* Sticky 4: Lilac Research Synthesis Note */}
                  <div className="research-sticky sticky-lilac">
                    <span className="sticky-tag lilac-tag">DATA SYNTHESIS &amp; FRAMEWORK</span>
                    <p className="sticky-lilac-text">
                      • Dovetail Coding: 240+ tagged video clips &amp; 18 affinity clusters.<br />
                      • Framework Built: "Maternal Energy-Cap Model" sorting routines into 3 tiers (5-min stretch, 15-min low-impact, recovery).<br />
                      • Strategy Shift: Replaced rigid streaks with "Zero-Guilt Adaptive Habits."
                    </p>
                  </div>

                  {/* Sticky 5: Mint Perforated Ticket Note */}
                  <div className="research-sticky sticky-mint">
                    <span className="sticky-tag mint-tag">RESEARCH RIGOR &amp; METRICS</span>
                    <p className="sticky-mint-text">
                      Duration: 12-Week Sprint | Transcripts Coded: 32 Hours | Dovetail Tags: 240+ | Cross-Functional Alignment: 100% agreement from PM, Engineering, &amp; Medical Consultants.
                    </p>
                  </div>

                </div>
              ) : sec.mockType === 'triple-card' ? (
                <div className="mock-triple-grid">
                  <div className="triple-card-mock">
                    <span className="triple-card-num">01</span>
                    <p className="triple-card-lbl">{sec.mockLabel} — Screen A</p>
                  </div>
                  <div className="triple-card-mock">
                    <span className="triple-card-num">02</span>
                    <p className="triple-card-lbl">{sec.mockLabel} — Screen B</p>
                  </div>
                  <div className="triple-card-mock">
                    <span className="triple-card-num">03</span>
                    <p className="triple-card-lbl">{sec.mockLabel} — Screen C</p>
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
