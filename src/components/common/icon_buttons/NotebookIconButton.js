import React from 'react'
import notebookIconSvg from '../../../assets/images/notebook_icon.svg'
import ImageButtonBase from '../base/ImageButtonBase'
import * as PropTypes from 'prop-types'

function NotebookIconButton (props) {
  const { className } = props
  return (
    <ImageButtonBase
      className={className} src={notebookIconSvg}
      alt='Notebook'
    />
  )
}

export default NotebookIconButton

NotebookIconButton.propTypes = {
  className: PropTypes.string
}
