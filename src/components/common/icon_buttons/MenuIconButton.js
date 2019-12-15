import React from 'react'
import actionMenuIconSvg from '../../../assets/images/action_menu_icon.svg'
import IconButtonBase from '../base/IconButtonBase'
import * as PropTypes from 'prop-types'

function MenuIconButton (props) {
  const { className } = props
  return (
    <IconButtonBase
      className={className} src={actionMenuIconSvg}
      alt='Menu'
    />
  )
}

export default MenuIconButton

MenuIconButton.propTypes = {
  className: PropTypes.string
}
