import React from 'react'
import styles from './Note.module.scss'
import NoteEditor from './NoteEditor'
import NoteControlPanel from './NoteControlPanel'
import NoteHeader from './NoteHeader'

function Note () {
  return (
    <div className={styles.note}>
      <NoteHeader />
      <NoteEditor />
      <NoteControlPanel />
    </div>
  )
}

export default Note
