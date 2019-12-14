import React from 'react'
import styles from './Notes.module.scss'
import NotesHeader from './NotesHeader'
import NotesCards from './NotesCards'

function Notes () {
  return (
    <div className={styles.notes}>
      <NotesHeader />
      <NotesCards />
    </div>
  )
}

export default Notes
