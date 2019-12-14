import React from 'react'
import ButtonBase from '../base/ButtonBase'
import styles from './SaveButton.module.scss'

function SaveButton () {
  return (
    <ButtonBase className={styles.saveButton} label='Save' />
  )
}

export default SaveButton
