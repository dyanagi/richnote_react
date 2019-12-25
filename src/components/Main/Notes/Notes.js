import React, { Component } from 'react'
import styles from './Notes.module.scss'
import NotesHeader from './NotesHeader'
import NotesCards from './NotesCards'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'

class Notes extends Component {
  state = {
    notebook_id: 0
  }

  notebook = this.props.notebooks.find(
    notebook => notebook.id === this.state.notebook_id
  )

  render () {
    return (
      <div className={styles.notes}>
        <NotesHeader
          className={styles.notesHeader}
          title={this.notebook.name}
        />
        <NotesCards
          className={styles.notesCards}
          notebookId={this.notebook.id}
          notes={this.notebook.notes}
        />
      </div>
    )
  }
}

Notes.propTypes = {
  notebooks: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks
  }
}

export default connect(mapStateToProps)(Notes)
