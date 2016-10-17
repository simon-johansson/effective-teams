import React from 'react'
import { Link } from 'react-router'

export const ToolSquare = (props) => {
  return (
    <Link to={props.link}>
      <div className='tool-square'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  )
}

export default ToolSquare
