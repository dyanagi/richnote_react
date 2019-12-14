import React from 'react'
import SaveButton from '../../common/buttons/SaveButton'
import CancelButton from '../../common/buttons/CancelButton'
import * as PropTypes from 'prop-types'
import Panel from '../../common/Panel'

function NoteControlPanel (props) {
  const { className } = props
  return (
    <Panel className={className}>
      <CancelButton />
      <SaveButton />
    </Panel>
  )
}

NoteControlPanel.propTypes = {
  className: PropTypes.string
}

export default NoteControlPanel
