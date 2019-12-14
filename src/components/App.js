import React, { Component } from 'react'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import Notes from './Notes/Notes'
import cx from 'classnames'

class App extends Component {
  state = {
    sidebarActive: false,
    page: 'pageNote'
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        page: 'pageNotes'
      })
    }, 3000)

    setTimeout(() => {
      this.setState({
        page: 'pageNote'
      })
    }, 5000)
  }

  handleSidebarIconClick = () => {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    })
  }

  render () {
    const { sidebarActive, page } = this.state
    const pageClassname = cx({
      [styles.pageNote]: page === 'pageNote',
      [styles.pageNotes]: page === 'pageNotes'
    })

    const sidebarIcon = (
      <div
        className={cx(styles.sidebarIcon, pageClassname,
          { [styles.isActive]: sidebarActive })}
        onClick={this.handleSidebarIconClick}
      >
        <span /><span /><span /><span />
      </div>
    )

    const sidebar = (
      <nav className={cx(styles.sidebarWrapper, pageClassname,
        { [styles.isActive]: sidebarActive })}
      >
        <Sidebar />
      </nav>
    )

    const main = (
      <main className={cx(styles.mainFlexContainer, pageClassname)}>
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
