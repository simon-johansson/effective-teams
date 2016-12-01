import React from 'react'
import { Link } from 'react-router'
import Header from '../../../components/Header'
import tools from '../../../tools'
import './ToolView.scss'

class ToolView extends React.Component {

  componentWillMount () {
    const { toolId } = this.props.params
    this.tool = tools.teamRoutines[toolId] || tools.ideation[toolId]
    if (!this.tool) {
      console.log('Fail!')
    } else {
      this.toolType = tools.teamRoutines[toolId] ? 'team-routine' : 'ideation'
    }
  }

  render () {
    const { tool, toolType } = this
    const menuLink = `/tool/${this.props.params.toolId}/`
    const menuLinks = [
      {link: menuLink + 'guide', text: 'Guide'},
      {link: menuLink + 'outcome', text: 'Outcome'},
      {link: menuLink + 'checklist', text: 'Checklist'}
    ]
    return (
      <div>
        {false &&
          <Link to='/create' className='close-preview'>
            <span>Close preview</span>
          </Link>
        }
        <Header
          title={tool.title}
          description={tool.description}
          menuLinks={menuLinks}
          for={toolType}
        />
        <section className='tab-content'>
          <div className='wrapper'>
            {React.cloneElement(this.props.children, { tool })}
          </div>
        </section>
      </div>
    )
  }
}

ToolView.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default ToolView
