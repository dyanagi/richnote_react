import React from 'react'
import * as PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './ButtonBase.module.scss'

function ButtonBase (props) {
  const { className, label } = props
  return (
    <button className={cx(styles.buttonBase, className)}>{label}</button>
  )
}

ButtonBase.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default ButtonBase
