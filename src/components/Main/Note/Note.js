import React from 'react'
import styles from './Note.module.scss'
import NoteEditor from './NoteEditor'
import SaveButton from '../../common/buttons/SaveButton'

function Note () {
  return (
    <div className={styles.note}>
      <NoteEditor />
      <SaveButton />
    </div>
  )
}

export default Note
