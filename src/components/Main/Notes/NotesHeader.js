import React from 'react'
import styles from './NotesHeader.module.scss'
import NewIconButton from '../../common/icon_buttons/NewIconButton'
import MenuIconButton from '../../common/icon_buttons/MenuIconButton'

function NotesHeader () {
  return (
    <div className={styles.noteHeader}>
      <p className={styles.label}>
        All Notes Test Test Test
      </p>

      <div className={styles.newBtn}>
        <NewIconButton />
      </div>

      <div className={styles.menuBtn}>
        <MenuIconButton />
      </div>
    </div>
  )
}

export default NotesHeader
