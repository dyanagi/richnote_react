import React from 'react'
import NoteEditor from './NoteEditor'
import SaveButton from '../Common/SaveButton'

function Note () {
  return (
    <div className='App'>
      <NoteEditor />
      <SaveButton />
    </div>
  )
}

export default Note
