import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './IconButtonBase.module.scss'
import cx from 'classnames'

function ImageButtonBase (props) {
  const { className, src, alt } = props
  return (
    <ImageButtonBase
      className={cx(styles.iconButtonBase, className)} src={src}
      alt={alt}
    />
  )
}

ImageButtonBase.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default ImageButtonBase
