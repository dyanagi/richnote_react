import React from 'react'
import plusIconSvg from '../../../assets/images/plus_icon.svg'
import IconButtonBase from '../base/IconButtonBase'
import * as PropTypes from 'prop-types'

function NewIconButton (props) {
  const { className } = props
  return <IconButtonBase className={className} src={plusIconSvg} alt='New' />
}

export default NewIconButton

NewIconButton.propTypes = {
  className: PropTypes.string
}
