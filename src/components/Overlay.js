import React, { Component } from 'react'
import cx from 'classnames'
import styles from './Overlay.module.scss'
import * as PropTypes from 'prop-types'

class Overlay extends Component {
  render () {
    const { isOverlayActive, onClick } = this.props

    return (
      <div
        className={cx(styles.overlay,
          { [styles.isActive]: isOverlayActive })}
        onClick={onClick}
      />
    )
  }
}

export default Overlay

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOverlayActive: PropTypes.bool.isRequired
}
