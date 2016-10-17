import React from 'react'
import TeamRoutines from './TeamRoutinesView.js'
import Ideation from './IdeationView.js'

export const AllToolsView = (props) => {
  const { tools, createToolSquares } = props
  return (
    <div>
      <TeamRoutines tools={tools} createToolSquares={createToolSquares} />
      <Ideation tools={tools} createToolSquares={createToolSquares} />
    </div>
  )
}

export default AllToolsView
