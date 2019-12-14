import React, { Component } from 'react'
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar'
import cx from 'classnames'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import SidebarIcon from './SidebarIcon'
import Main from './Main/Main'
import { PAGE_NOTE } from '../constants/PageConstants'

class App extends Component {
  state = {
    isSidebarActive: false
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
      <>
        <SidebarIcon
          page={page} isSidebarActive={isSidebarActive}
          onClick={this.handleSidebarIconClick}
        />
        <div className={styles.container}>
          <Sidebar className={cx(styles.sidebar, pageClassname,
            { [styles.isActive]: isSidebarActive })}
          />
          <Main className={styles.main} page={page} />
        </div>
      </>
    )
  }
}

App.propTypes = {
  page: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
