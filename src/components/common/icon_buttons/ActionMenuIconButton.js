import React from 'react'
import actionMenuIconSvg from '../../../assets/images/action_menu_icon.svg'
import ImageButtonBase from '../base/ImageButtonBase'
import * as PropTypes from 'prop-types'

function ActionMenuIconButton (props) {
  const { className } = props
  return (
    <ImageButtonBase
      className={className} src={actionMenuIconSvg}
      alt='Menu'
    />
  )
}

export default ActionMenuIconButton

ActionMenuIconButton.propTypes = {
  className: PropTypes.string
}
