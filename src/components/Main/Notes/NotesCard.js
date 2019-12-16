import React from 'react'
import styles from './NotesCard.module.scss'
import { changePage } from '../../../store/actions/Actions'
import { connect } from 'react-redux'
import { PAGE_NOTES } from '../../../constants/PageConstants'
import * as PropTypes from 'prop-types'

function NotesCard (props) {
  const handleClick = () => {
    props.changePage(PAGE_NOTES)
  }

  return (
    <div className={styles.notesCard} onClick={handleClick}>
      <p className={styles.title}>
        Grocery List Grocery List Grocery List Grocery List
      </p>
      <p className={styles.previewText}>
        Preview text Preview text Preview text Preview text Preview text Preview
        text Preview text Preview text Preview text Preview text Preview text
        Preview text Preview text Preview text Preview
        text Preview text Preview text Preview text
      </p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => {
      dispatch(changePage(page))
    }
  }
}

NotesCard.propTypes = {
  changePage: PropTypes.func
}

export default connect(null, mapDispatchToProps)(NotesCard)
