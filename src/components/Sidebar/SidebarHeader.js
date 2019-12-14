import React from 'react'
import NewIconButton from '../common/icon_buttons/NewIconButton'
import MenuIconButton from '../common/icon_buttons/MenuIconButton'
import styles from './SidebarHeader.module.scss'

function SidebarHeader () {
  return (
    <div className={styles.sidebarHeader}>
      <NewIconButton className={styles.newBtn} />
      <MenuIconButton className={styles.menuBtn} />
    </div>
  )
}

export default SidebarHeader
