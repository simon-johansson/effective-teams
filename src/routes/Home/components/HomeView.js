import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import tools from '../../../tools'
import './HomeView.scss'

class HomeView extends React.Component {

  render () {
    return (
      <div>
        <header className='tool-header'>
          <div className='tool-header-wrapper'>
            <h1 className='tool-title'>Toolbox</h1>
            <ul className='tool-menu'>
              <Link to={'/all'} activeClassName='selected'>
                <li className='tool-menu-item'>All</li>
              </Link>
              <Link to={'/team-routines'} activeClassName='selected'>
                <li className='tool-menu-item'>Team routines </li>
              </Link>
              <Link to={'/ideation'} activeClassName='selected'>
                <li className='tool-menu-item'>Ideation</li>
              </Link>
            </ul>
          </div>
        </header>
        <section className='tool-outcome'>
          <div className='wrapper'>
            <h2>Outcome</h2>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeView
