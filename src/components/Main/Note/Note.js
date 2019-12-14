import React from 'react'
import styles from './Note.module.scss'
import NoteEditor from './NoteEditor'
import NoteControlPanel from './NoteControlPanel'
import NoteHeader from './NoteHeader'

function Note () {
  return (
    <div className={styles.note}>
      <NoteHeader className={styles.noteHeader} />
      <NoteEditor className={styles.noteEditor} />
      <NoteControlPanel className={styles.noteControlPanel} />
    </div>
  )
}

export default Note
