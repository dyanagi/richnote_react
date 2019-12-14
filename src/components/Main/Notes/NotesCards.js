import React from 'react'
import styles from './NotesCards.module.scss'
import NotesCard from './NotesCard'
import cx from 'classnames'
import * as PropTypes from 'prop-types'

function NotesCards (props) {
  const { className } = props
  return (
    <div className={cx(styles.notesCards, className)}>
      <NotesCard />
      <NotesCard />
      <NotesCard />
    </div>
  )
}

NotesCards.propTypes = {
  className: PropTypes.string
}

export default NotesCards
