import React from 'react'
import Header from '../../../components/Header'
import ToolSquare from './ToolSquare'
import tools from '../../../tools'

const createToolSquares = (tools) => {
  return Object.keys(tools).map((tool, index) => (
    <ToolSquare
      link={`/tool/${tool}/guide`}
      title={tools[tool].title}
      description={tools[tool].description}
      key={'tool-' + index}
    />
  ))
}

class ToolboxView extends React.Component {

  render () {
    const menuLinks = [
      {link: '/toolbox/all', text: 'All'},
      {link: '/toolbox/team-routines', text: 'Team routines'},
      {link: '/toolbox/ideation', text: 'Ideation'}
    ]
    return (
      <div>
        <Header
          title='Toolbox'
          menuLinks={menuLinks}
          for='toolbox'
         />
        <section className='tab-content'>
          <div className='wrapper'>
            {React.cloneElement(this.props.children, { tools, createToolSquares })}
          </div>
        </section>
      </div>
    )
  }
}

ToolboxView.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default ToolboxView
