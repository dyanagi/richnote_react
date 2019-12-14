import React from 'react'
import styles from './Panel.module.scss'
import * as PropTypes from 'prop-types'
import cx from 'classnames'

// Panel shows up at the bottom which contains buttons to select the next action.
function Panel ({ className, children }) {
  return (
    <div className={cx(styles.panel, className)}>
      {children}
    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default Panel
