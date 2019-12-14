import React from 'react'
import plusIconSvg from '../../../assets/images/plus_icon.svg'
import ImageButtonBase from '../../Common/ImageButtonBase'
import styles from './NotesHeaderNewBtn.module.scss'

function NotesHeaderNewBtn () {
  return (
    <ImageButtonBase className={styles.newBtn} src={plusIconSvg} alt='New' />
  )
}

export default NotesHeaderNewBtn
