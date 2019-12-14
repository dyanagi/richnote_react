import React from 'react'
import NoteHeaderMoveNoteButton from './NoteHeaderMoveNoteButton'
import MenuIconButton from '../../common/icon_buttons/MenuIconButton'
import * as PropTypes from 'prop-types'
import styles from './NoteHeader.module.scss'
import cx from 'classnames'

function NoteHeader (props) {
  const { className } = props
  return (
    <div className={cx(styles.noteHeader, className)}>
      <NoteHeaderMoveNoteButton className={styles.noteHeaderMoveNoteButton} />
      <MenuIconButton className={styles.menuIconButton} />
    </div>
  )
}

NoteHeader.propTypes = {
  className: PropTypes.string
}

export default NoteHeader
