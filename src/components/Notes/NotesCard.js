import React from 'react'
import styles from './NotesCard.module.scss'

function NotesCard () {
  return (
    <div className={styles.notesCard}>
      <p className={styles.title}>
        Grocery List Grocery List Grocery List Grocery List
      </p>
      <p className={styles.previewText}>
        Preview text Preview text Preview text Preview text Preview text Preview
        text Preview text Preview text Preview text Preview text Preview text Preview text Preview text Preview text Preview
        text Preview text Preview text Preview text
      </p>
    </div>
  )
}

export default NotesCard
