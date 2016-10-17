import React, { PropTypes } from 'react'

class GuideView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openStep: 0
    }
  }

  _createSteps (openStep) {
    return this.props.tool.steps.map((step, index) => {
      const opened = index === openStep ? 'opened' : ''
      const presentableIndex = index < 9 ? `0${index + 1}` : index + 1
      const icon = opened ? 'ion-chevron-up' : 'ion-chevron-down'

      return (
        <li className={`tool-guide-step ${opened}`} key={'step-' + index}>
          <p className='step-title' onClick={this._onStepClick.bind(this, index)}>
            <span className='step-index'>{presentableIndex}</span>
            {step.title}
            <i className={`icon ${icon}`} />
          </p>
          <div className='step-content'>
            <p>{step.content}</p>
          </div>
        </li>
      )
    })
  }

  _createInfo () {
    return this.props.tool.info.map((info, index) => {
      if (info.link) {
        return (
          <div key={`info-${index}`}>
            <h4 className='tool-info-heading'>
              <a href={info.link}>Download PDF</a>
            </h4>
            <p className='tool-info-description'>{info.description}</p>
          </div>
        )
      } else {
        return (
          <div key={`info-${index}`}>
            <h4 className='tool-info-heading'>{info.title}</h4>
            <p className='tool-info-description'>{info.description}</p>
          </div>
        )
      }
    })
  }

  _onStepClick (index) {
    this.setState({
      openStep: index
    })
  }

  render () {
    return (
      <div>
        <ul className='tool-guide-steps'>
          {this._createSteps(this.state.openStep)}
        </ul>
        <div className='tool-info'>
          {this._createInfo()}
        </div>
      </div>
    )
  }
}

GuideView.propTypes = {
}

export default GuideView
