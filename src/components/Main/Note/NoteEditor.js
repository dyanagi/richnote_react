import React, { Component } from 'react'
import 'draft-js/dist/Draft.css'
import { Editor, convertToRaw } from 'draft-js'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editEditorState } from '../../../store/actions/editorActions'

class NoteEditor extends Component {
  handleChange (editorState) {
    editEditorState(editorState)
  }

  render () {
    const { className, editorState, onChangeEditorState } = this.props

    const raw = convertToRaw(editorState.getCurrentContent())
    console.log(JSON.stringify(raw))

    return (
      <div className={className}>
        <Editor
          editorState={editorState}
          onChange={onChangeEditorState}
          placeholder='This is the editor.'
        />
      </div>
    )
  }
}

NoteEditor.propTypes = {
  className: PropTypes.string,
  editorState: PropTypes.object.isRequired,
  onChangeEditorState: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    editorState: state.editor.editorState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeEditorState: (editorState) => {
      dispatch(editEditorState(editorState))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteEditor)
