import React, { Component } from 'react'
import './App.scss'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import NoteList from './NoteList/NoteList'
import cx from 'classnames'

class App extends Component {
  state = {
    sidebarActive: false
  }

  handleSidebarIconClick = () => {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    })
  }

  render () {
    const sidebarActive = this.state.sidebarActive

    return (
      <div className='App'>
        <div
          className={cx(styles.sidebarIcon,
            { [styles.isActive]: sidebarActive })}
          onClick={this.handleSidebarIconClick}
        >
          <span /><span /><span /><span />
        </div>

        <nav className={cx(styles.sidebarWrapper,
          { [styles.isActive]: sidebarActive })}
        >
          <Sidebar />
        </nav>
        <main>
          <NoteList />
          <Note />
        </main>
      </div>
    )
  }
}

export default App
