import React from 'react'
import actionMenuIconSvg from '../../../assets/images/action_menu_icon.svg'
import ImageButtonBase from '../../Common/ImageButtonBase'
import styles from './NotesHeaderActionMenuBtn.module.scss'

function NotesHeaderActionMenuBtn () {
  return (
    <ImageButtonBase className={styles.actionMenuBtn} src={actionMenuIconSvg} alt='Action Menu' />
  )
}

export default NotesHeaderActionMenuBtn
