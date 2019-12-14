import React, { Component } from 'react'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import cx from 'classnames'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import { changePage } from '../actions/pageActions'
import SidebarIcon from './SidebarIcon'
import Main from './Main/Main'
import { PAGE_NOTE, PAGE_NOTES } from '../constants/PageConstants'

class App extends Component {
  state = {
    isSidebarActive: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.changePage(PAGE_NOTES)
    }, 3000)

    setTimeout(() => {
      this.props.changePage(PAGE_NOTE)
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
      [styles.pageNote]: page === PAGE_NOTE
    })

    return (
      <div className='App'>
        <SidebarIcon
          page={page} isSidebarActive={isSidebarActive}
          onClick={this.handleSidebarIconClick}
        />
        <div className={styles.container}>
          <nav className={cx(styles.sidebarWrapper, pageClassname,
            { [styles.isActive]: isSidebarActive })}
          >
            <Sidebar />
          </nav>
          <Main className={styles.main} page={page} />
        </div>
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
