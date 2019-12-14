import React, { Component } from 'react'
import './App.scss'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import Notes from './Notes/Notes'
import cx from 'classnames'

class App extends Component {
  state = {
    sidebarActive: false,
    page: 'note'
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        page: 'notes'
      })
    }, 3000)

    setTimeout(() => {
      this.setState({
        page: 'note'
      })
    }, 4000)
  }

  handleSidebarIconClick = () => {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    })
  }

  render () {
    const { sidebarActive, page } = this.state

    const sidebarIcon = (
      <div
        className={cx(styles.sidebarIcon,
          { [styles.isActive]: sidebarActive })}
        onClick={this.handleSidebarIconClick}
      >
        <span /><span /><span /><span />
      </div>
    )

    const sidebar = (
      <nav className={cx(styles.sidebarWrapper,
        { [styles.isActive]: sidebarActive })}
      >
        <Sidebar />
      </nav>
    )

    const main = (
      <main className={cx(styles.mainFlexContainer, {
        [styles.note]: page === 'note',
        [styles.notes]: page === 'notes'
      })}
      >
        <Notes />
        <Note />
      </main>
    )

    const container = (
      <div className={styles.container}>
        {sidebar}
        {main}
      </div>
    )

    return (
      <div className='App'>
        {sidebarIcon}
        {container}
      </div>
    )
  }
}

export default App
