import React from 'react'
import ButtonBase from '../base/ButtonBase'
import styles from './CancelButton.module.scss'

function CancelButton () {
  return (
    <ButtonBase className={styles.cancelButton} label='Cancel' />
  )
}

export default CancelButton
