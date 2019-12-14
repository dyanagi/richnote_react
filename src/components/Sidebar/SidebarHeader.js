import React from 'react'
import NewIconButton from '../common/icon_buttons/NewIconButton'
import ActionMenuIconButton from '../common/icon_buttons/ActionMenuIconButton'
import styles from './SidebarHeader.module.scss'

function SidebarHeader () {
  return (
    <div className={styles.sidebarHeader}>
      <NewIconButton className={styles.newBtn} />
      <ActionMenuIconButton className={styles.menuBtn} />
    </div>
  )
}

export default SidebarHeader
