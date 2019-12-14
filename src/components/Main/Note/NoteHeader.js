import React from 'react'
import NoteHeaderMoveNotePanel from './NoteHeaderMoveNotePanel'
import MenuIconButton from '../../common/icon_buttons/MenuIconButton'

function NoteHeader () {
  return (
    <div className='App'>
      <NoteHeaderMoveNotePanel />
      <MenuIconButton />
    </div>
  )
}

export default NoteHeader
