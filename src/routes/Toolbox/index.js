import ToolboxView from './components/ToolboxView'
import AllToolsView from './components/AllToolsView'
import TeamRoutinesView from './components/TeamRoutinesView'
import IdeationView from './components/IdeationView'

// Sync route definition
export default {
  path: 'toolbox',
  component  : ToolboxView,
  indexRoute: { onEnter: (nextState, replace) => replace('toolbox/all') },
  childRoutes : [{
    path: 'all',
    component : AllToolsView
  },
  {
    path: 'team-routines',
    component : TeamRoutinesView
  },
  {
    path: 'ideation',
    component : IdeationView
  }]
}
