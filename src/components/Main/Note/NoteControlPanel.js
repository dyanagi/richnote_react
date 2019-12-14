import React from 'react'
import SaveButton from '../../common/buttons/SaveButton'
import CancelButton from '../../common/buttons/CancelButton'
import * as PropTypes from 'prop-types'

function NoteControlPanel (props) {
  const { className } = props
  return (
    <div className={className}>
      <SaveButton />
      <CancelButton />
    </div>
  )
}

NoteControlPanel.propTypes = {
  className: PropTypes.string
}

export default NoteControlPanel
