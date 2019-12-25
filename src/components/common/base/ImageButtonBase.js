import React from 'react'
import * as PropTypes from 'prop-types'
import styles from './ImageButtonBase.module.sass'
import cx from 'classnames'

function ImageButtonBase (props) {
  const { className, src, alt } = props
  return (
    <button className={cx(styles.imageButtonBase, className)}>
      <img src={src} alt={alt} />
    </button>
  )
}

ImageButtonBase.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default ImageButtonBase
