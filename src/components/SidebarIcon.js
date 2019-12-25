import React, { Component } from 'react'
import cx from 'classnames'
import styles from './SidebarIcon.module.scss'
import * as PropTypes from 'prop-types'
import { PAGE_NOTES } from '../constants/PageConstants'

class SidebarIcon extends Component {
  render () {
    const { page, isActive, onClick } = this.props

    const pageClassname = cx({
      [styles.pageNotes]: page === PAGE_NOTES
    })

    return (
      <div
        className={cx(styles.sidebarIcon, pageClassname, {
          [styles.isActive]: isActive
        })}
        onClick={onClick}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  }
}

export default SidebarIcon

SidebarIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
}
