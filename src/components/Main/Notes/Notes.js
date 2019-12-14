import React from 'react'
import styles from './Notes.module.scss'
import NotesHeader from './NotesHeader'
import NotesCards from './NotesCards'

function Notes () {
  return (
    <div className={styles.notes}>
      <NotesHeader className={styles.notesHeader} />
      <NotesCards className={styles.notesCards} />
    </div>
  )
}

export default Notes
