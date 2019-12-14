import React from 'react'
import styles from './NotesCards.module.scss'
import NotesCard from './NotesCard'

function NotesCards () {
  return (
    <div className={styles.notesCards}>
      <NotesCard />
      <NotesCard />
      <NotesCard />
    </div>
  )
}

export default NotesCards
