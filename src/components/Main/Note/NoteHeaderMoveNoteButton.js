import React from 'react'
import NotebookIconButton from '../../common/icon_buttons/NotebookIconButton'
import * as PropTypes from 'prop-types'
import styles from './NoteHeaderMoveNoteButton.module.scss'
import cx from 'classnames'

// The 'Move Note to...' menu.
function NoteHeaderMoveNoteButton (props) {
  const { className } = props
  return (
    <div className={cx(styles.noteHeaderMoveNoteButton, className)}>
      <NotebookIconButton />
      <p className={styles.label}>Notebook</p>
    </div>
  )
}

NoteHeaderMoveNoteButton.propTypes = {
  className: PropTypes.string
}

export default NoteHeaderMoveNoteButton
