import React, { Component } from 'react'
import styles from './NotesCards.module.scss'
import NotesCard from './NotesCard'
import cx from 'classnames'
import * as PropTypes from 'prop-types'
import { openNote } from '../../../store/actions/navigationActions'
import { connect } from 'react-redux'

class NotesCards extends Component {
  handleClick = (notebookId, noteId) => {
    this.props.openNote(notebookId, noteId)
  }

  render () {
    const { className, notes, notebookId } = this.props

    if (notes.length > 0) {
      const noteList = notes.map(note => {
        return (
          <NotesCard
            key={note.id}
            notebookId={notebookId}
            note={note}
            onClick={() => {
              this.handleClick(notebookId, note.id)
            }}
          />
        )
      })
      return <div className={cx(styles.notesCards, className)}>{noteList}</div>
    } else {
      return <div className={cx(styles.notesCards, className)}>test</div>
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openNote: (notebookId, noteId) => dispatch(openNote(notebookId, noteId))
  }
}

NotesCards.propTypes = {
  className: PropTypes.string,
  notebookId: PropTypes.any.isRequired,
  notes: PropTypes.array.isRequired,
  openNote: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(NotesCards)
