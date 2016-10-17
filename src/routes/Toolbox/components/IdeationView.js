import React from 'react'

export const IdeationView = (props) => (
  <div>
    <h2>Ideation</h2>
    <div className='ideation-wrapper'>
      {props.createToolSquares(props.tools.ideation)}
    </div>
  </div>
)

export default IdeationView
