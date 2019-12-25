import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './IconButtonBase.module.scss'
import cx from 'classnames'
import ImageButtonBase from './ImageButtonBase'

function IconButtonBase (props) {
  const { className, src, alt } = props
  return (
    <ImageButtonBase
      className={cx(styles.iconButtonBase, className)}
      src={src}
      alt={alt}
    />
  )
}

IconButtonBase.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default IconButtonBase
