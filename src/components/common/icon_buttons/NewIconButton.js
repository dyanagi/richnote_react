import React from 'react'
import plusIconSvg from '../../../assets/images/plus_icon.svg'
import ImageButtonBase from '../base/ImageButtonBase'
import * as PropTypes from 'prop-types'

function NewIconButton (props) {
  const { className } = props
  return (
    <ImageButtonBase className={className} src={plusIconSvg} alt='New' />
  )
}

export default NewIconButton

NewIconButton.propTypes = {
  className: PropTypes.string
}
