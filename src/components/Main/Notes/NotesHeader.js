import React from 'react'
import styles from './NotesHeader.module.sass'
import NewIconButton from '../../common/icon_buttons/NewIconButton'
import MenuIconButton from '../../common/icon_buttons/MenuIconButton'
import cx from 'classnames'
import * as PropTypes from 'prop-types'

function NotesHeader (props) {
  const { className } = props
  return (
    <div className={cx(styles.noteHeader, className)}>
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

NotesHeader.propTypes = {
  className: PropTypes.string
}

export default NotesHeader
