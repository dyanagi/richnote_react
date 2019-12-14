import React, { Component } from 'react'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import Note from './Note/Note'
import Notes from './Notes/Notes'
import cx from 'classnames'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import { changePage } from '../actions/pageActions'
import SidebarIcon from './SidebarIcon'

class App extends Component {
  state = {
    isSidebarActive: false
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
      isSidebarActive: !this.state.isSidebarActive
    })
  }

  render () {
    const { isSidebarActive } = this.state
    const page = this.props.page

    const pageClassname = cx({
      [styles.pageNote]: page === 'pageNote',
      [styles.pageNotes]: page === 'pageNotes'
    })

    const sidebar = (
      <nav className={cx(styles.sidebarWrapper, pageClassname,
        { [styles.isActive]: isSidebarActive })}
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
        <SidebarIcon
          page={page} isSidebarActive={isSidebarActive}
          onClick={this.handleSidebarIconClick}
        />
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
