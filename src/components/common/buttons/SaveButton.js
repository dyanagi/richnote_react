import React from 'react'
import ButtonBase from '../base/ButtonBase'
import styles from './SaveButton.module.scss'
import * as PropTypes from 'prop-types'

function SaveButton ({ onClick }) {
  return (
    <ButtonBase className={styles.saveButton} onClick={onClick} label='Save' />
  )
}

SaveButton.propTypes = {
  onClick: PropTypes.func
}

export default SaveButton
