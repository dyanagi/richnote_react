import React from 'react'
import SaveButton from '../../common/buttons/SaveButton'
import CancelButton from '../../common/buttons/CancelButton'
import * as PropTypes from 'prop-types'
import Panel from '../../common/Panel'
import { setPage } from '../../../store/actions/navigationActions'
import { connect } from 'react-redux'
import { PAGE_NOTE } from '../../../constants/PageConstants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RichUtils } from 'draft-js'
import { editEditorState } from '../../../store/actions/editorActions'

function NoteControlPanel ({ className, editorState, editEditorState, changePage }) {
  const handleSave = () => {
    changePage(PAGE_NOTE)
  }

  const handleChange = (editorState) => {
    editEditorState(editorState)
  }

  const handleStyleButtonClick = (style) => {
    handleChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  return (
    <Panel className={className}>
      <CancelButton />
      <SaveButton onClick={handleSave} />
      <FontAwesomeIcon
        icon='bold'
        onClick={() => { handleStyleButtonClick('BOLD') }}
      />
      <FontAwesomeIcon
        icon='italic'
        onClick={() => { handleStyleButtonClick('ITALIC') }}
      />
      <FontAwesomeIcon
        icon='underline'
        onClick={() => { handleStyleButtonClick('UNDERLINE') }}
      />
      <FontAwesomeIcon
        icon='heading'
        onClick={() => { handleStyleButtonClick('header-three') }}
      />
    </Panel>
  )
}

NoteControlPanel.propTypes = {
  changePage: PropTypes.func.isRequired,
  className: PropTypes.string,
  editEditorState: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    editorState: state.editor.editorState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editEditorState: (editorState) => {
      dispatch(editEditorState(editorState))
    },
    changePage: (page) => {
      dispatch(setPage(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteControlPanel)
