import React from 'react'
import { Link } from 'react-router'
import './Header.scss'

const createMenuLinks = links => {
  return links.map(({ link, text }, index) => (
    <Link to={link} activeClassName='selected' key={'menu-' + index}>
      <li className='tool-menu-item'>{text}</li>
    </Link>
  ))
}

export const Header = (props) => (
  <header className={'tool-header ' + props.for} >
    <div className='tool-header-wrapper'>
      <h1 className='tool-title'>{props.title}</h1>
      {props.description &&
        <p className='tool-description'>{props.description}</p>
      }
      <ul className='tool-menu'>
        {createMenuLinks(props.menuLinks)}
      </ul>
    </div>
  </header>
)

export default Header
