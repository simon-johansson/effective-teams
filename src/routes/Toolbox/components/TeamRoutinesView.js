import React from 'react'

export const TeamRoutinesView = (props) => (
  <div>
    <h2>Team routines</h2>
    <div className='team-routines-wrapper'>
      {props.createToolSquares(props.tools.teamRoutines)}
    </div>
  </div>
)

export default TeamRoutinesView
