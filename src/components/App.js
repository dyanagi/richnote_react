import React, { Component } from 'react'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import Notes from './Notes/Notes'
import cx from 'classnames'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import { changePage } from '../actions/pageActions'

class App extends Component {
  state = {
    sidebarActive: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.changePage('pageNotes')
    }, 3000)

    setTimeout(() => {
      this.props.changePage('pageNote')
    }, 4500)
  }

  handleSidebarIconClick = () => {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    })
  }

  render () {
    const { sidebarActive } = this.state
    const page = this.props.page

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

App.propTypes = {
  changePage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => {
      dispatch(changePage(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
