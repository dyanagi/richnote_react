import React from 'react'
import styles from './NotesCard.module.scss'
import * as PropTypes from 'prop-types'

function NotesCard ({ notebookId, note, onClick }) {
  return (
    <div className={styles.notesCard} onClick={onClick}>
      <p className={styles.title}>{note.title}</p>
      <p className={styles.previewText}>{note.content}</p>
    </div>
  )
}

NotesCard.propTypes = {
  note: PropTypes.object.isRequired,
  notebookId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NotesCard
