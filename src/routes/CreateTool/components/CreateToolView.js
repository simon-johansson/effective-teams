import React from 'react'
import { Link } from 'react-router'
import SimpleMDE from 'react-simplemde-editor'
import tools from '../../../tools'
import './CreateToolView.scss'

class CreateTool extends React.Component {
  constructor (props) {
    super(props)

    this.state = Object.assign({}, {
      title: '',
      description: '',
      type: 'teamRoutines',
      steps: [],
      info: []
    }, JSON.parse(localStorage.getItem('preview')))

    this._addStep = this._addStep.bind(this)
    this._onTypeChanged = this._onTypeChanged.bind(this)
    this._onTitleChange = this._onTitleChange.bind(this)
    this._onDescriptionChange = this._onDescriptionChange.bind(this)
    this._clearPreview = this._clearPreview.bind(this)
  }

  componentWillMount () {
    window.location.hash = window.location.hash || 'guide'
  }

  _onTypeChanged (e) {
    this.setState({
      type: e.currentTarget.value
    })
  }

  _onTitleChange (e) {
    this.setState({
      title: e.currentTarget.value
    })
  }

  _onDescriptionChange (e) {
    this.setState({
      description: e.currentTarget.value
    })
  }

  _createSteps () {
    return this.state.steps.map((step, index) => {
      const onTitleChange = event => {
        const value = event.target.value
        const steps = this.state.steps.slice()
        steps[index].title = value
        this.setState({ steps })
      }
      const onTextChange = value => {
        const steps = this.state.steps.slice()
        steps[index].content = value
        this.setState({ steps })
      }

      return (
        <div className='step' key={'step-' + index}>
          <h4>{index + 1}.</h4>
          <input
            type='text'
            value={step.title || ''}
            onChange={onTitleChange}
          /><br /><br />
          <SimpleMDE
            onChange={onTextChange}
            options={{
              initialValue: step.content,
              status: false
            }}
          />
          <br />
          <hr />
        </div>
      )
    })
  }

  _addStep () {
    let steps = this.state.steps.slice()
    steps.push({
      title: '',
      content: ''
    })
    this.setState({ steps })
  }

  _clearPreview () {
    if (confirm('Are you sure you want to clear?')) {
      this.setState({
        title: '',
        description: '',
        type: 'teamRoutines',
        steps: [],
        info: []
      })
    }
  }

  render () {
    const { state } = this
    const showPreviewButton = state.title && state.description && state.type
    const hashIncludes = hash => window.location.hash.includes(hash)

    localStorage.setItem('preview', JSON.stringify(state))
    tools[state.type].preview = state

    return (
      <div className='create-tool-wrapper'>
        <form>
          Title:<br />
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this._onTitleChange}
          /><br />

          Description:<br />
          <textarea
            name='description'
            rows='3'
            cols='30'
            onChange={this._onDescriptionChange}
            defaultValue={this.state.description}
          /><br />

          <input
            type='radio'
            name='type'
            value='teamRoutines'
            checked={this.state.type === 'teamRoutines'}
            onChange={this._onTypeChanged} /> Team routine<br />
          <input
            type='radio'
            name='type'
            value='ideation'
            checked={this.state.type === 'ideation'}
            onChange={this._onTypeChanged} /> Ideation<br />
        </form>

        <ul className='nav nav-tabs'>
          <li role='presentation' className={hashIncludes('guide') ? 'active' : ''}>
            <Link to='/create#guide'>
              Guide
            </Link>
          </li>
          <li role='presentation' className={hashIncludes('outcome') ? 'active' : ''}>
            <Link to='/create#outcome'>
              Outcome
            </Link>
          </li>
          <li role='presentation' className={hashIncludes('checklist') ? 'active' : ''}>
            <Link to='/create#checklist'>
              Checklist
            </Link>
          </li>
        </ul>

        { window.location.hash.includes('guide') &&
          <div className='steps'>
            <h2>Steps</h2>
            { this._createSteps() }
            <button onClick={this._addStep}>Add step</button>
          </div>
        }

        { showPreviewButton &&
          <Link to={'/tool/preview/guide'}>
            <button>Preview</button>
          </Link>
        }

        <button onClick={this._clearPreview}>Clear</button>

      </div>
    )
  }
}

CreateTool.propTypes = {
}

export default CreateTool
