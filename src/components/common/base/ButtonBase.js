import React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './ButtonBase.module.scss'

function ButtonBase ({ className, label, onClick }) {
  return (
    <button className={cx(styles.buttonBase, className)} onClick={onClick}>
      {label}
    </button>
  )
}

ButtonBase.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ButtonBase
