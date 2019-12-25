import React, { Component } from 'react'
import cx from 'classnames'
import styles from './Overlay.module.sass'
import * as PropTypes from 'prop-types'

class Overlay extends Component {
  render () {
    const { isActive, onClick } = this.props

    return (
      <div
        className={cx(styles.overlay,
          { [styles.isActive]: isActive })}
        onClick={onClick}
      />
    )
  }
}

export default Overlay

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}
