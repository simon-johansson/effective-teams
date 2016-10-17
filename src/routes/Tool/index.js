import ToolView from './components/ToolView'
import GuideView from './components/GuideView.js'
import OutcomeView from './components/OutcomeView'
import ChecklistView from './components/ChecklistView'

// Sync route definition
export default {
  path: 'tool/:toolId',
  component  : ToolView,
  indexRoute: { onEnter: (nextState, replace) => replace(`tool/${nextState.params.toolId}/guide`) },
  childRoutes : [{
    path: 'guide',
    component : GuideView
  },
  {
    path: 'outcome',
    component : OutcomeView
  },
  {
    path: 'checklist',
    component : ChecklistView
  }]
}
