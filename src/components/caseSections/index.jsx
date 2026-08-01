import StickyBoardSection from './StickyBoardSection'
import OverviewMobileFlowSection from './OverviewMobileFlowSection'
import OverviewModulesGridSection from './OverviewModulesGridSection'
import WavyChallengeSection from './WavyChallengeSection'
import ProblemContextCardsSection from './ProblemContextCardsSection'
import FindingsBarChartSection from './FindingsBarChartSection'
import VerseMiroCodeSection from './VerseMiroCodeSection'
import IdeationSliderMatrixSection from './IdeationSliderMatrixSection'
import IdeationBentoGridSection from './IdeationBentoGridSection'
import FindingsDotMatrixSection from './FindingsDotMatrixSection'
import TripleCardSection from './TripleCardSection'
import ImpactDashboardGridSection from './ImpactDashboardGridSection'
import FitflexTimelineSection from './FitflexTimelineSection'
import ReflectionsBentoSection from './ReflectionsBentoSection'
import ReflectionsFlowImpactSection from './ReflectionsFlowImpactSection'
import FallbackSection from './FallbackSection'

export const SECTION_RENDERERS = {
  'sticky-board': StickyBoardSection,
  'overview-mobile-flow': OverviewMobileFlowSection,
  'overview-modules-grid': OverviewModulesGridSection,
  'fitflex-wavy-challenge': WavyChallengeSection,
  'problem-context-cards': ProblemContextCardsSection,
  'findings-bar-chart': FindingsBarChartSection,
  'verse-miro-codesign': VerseMiroCodeSection,
  'ideation-slider-matrix': IdeationSliderMatrixSection,
  'ideation-bento-grid': IdeationBentoGridSection,
  'findings-dot-matrix': FindingsDotMatrixSection,
  'triple-card': TripleCardSection,
  'impact-dashboard-grid': ImpactDashboardGridSection,
  'fitflex-timeline-reflection': FitflexTimelineSection,
  'reflections-bento-board': ReflectionsBentoSection,
  'reflections-flow-impact': ReflectionsFlowImpactSection,
}

export default FallbackSection
export { FallbackSection }

export function normalizeSection(sec = {}) {
  return {
    title: sec.title || '',
    text: sec.text || '',
    mockType: sec.mockType || '',
    mockLabel: sec.mockLabel || 'Research Artifact',
    quote: sec.quote || null,
    quoteAuthor: sec.quoteAuthor || '',
    metrics: sec.metrics || [],
    stickyNotes: sec.stickyNotes || [],
    ...sec,
  }
}
