import { EDIT_EDITOR_STATE } from '../../constants/ActionTypes'

export const editEditorState = editorState => ({
  type: EDIT_EDITOR_STATE,
  editorState: editorState
})
