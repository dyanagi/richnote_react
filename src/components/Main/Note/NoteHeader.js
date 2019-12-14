import React from 'react'
import NoteHeaderMoveNotePanel from './NoteHeaderMoveNotePanel'
import MenuIconButton from '../../common/icon_buttons/MenuIconButton'
import * as PropTypes from 'prop-types'

function NoteHeader (props) {
  const { className } = props
  return (
    <div className={className}>
      <NoteHeaderMoveNotePanel />
      <MenuIconButton />
    </div>
  )
}

NoteHeader.propTypes = {
  className: PropTypes.string
}

export default NoteHeader
