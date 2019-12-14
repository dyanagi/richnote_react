import React from 'react'
import styles from './NotesHeader.module.scss'
import NotesHeaderNewBtn from './NotesHeaderNewBtn'
import NotesHeaderActionMenuBtn from './NotesHeaderActionMenuBtn'

function NotesHeader () {
  return (
    <div className={styles.noteHeader}>
      <p className={styles.label}>
        All Notes Test Test Test
      </p>

      <div className={styles.newBtn}>
        <NotesHeaderNewBtn />
      </div>

      <div className={styles.actionMenuBtn}>
        <NotesHeaderActionMenuBtn />
      </div>
    </div>
  )
}

export default NotesHeader
