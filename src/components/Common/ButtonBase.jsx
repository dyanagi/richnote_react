import React from 'react'
import * as PropTypes from 'prop-types'

function ButtonBase (props) {
  const { cssClass, label } = props
  return (
    <button className={'button ' + cssClass}>{label}</button>
  )
}

ButtonBase.propTypes = {
  cssClass: PropTypes.string,
  label: PropTypes.string
}

export default ButtonBase
