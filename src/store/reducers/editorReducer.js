import {
  EDIT_EDITOR_STATE
} from '../../constants/ActionTypes'
import { EditorState } from 'draft-js'

const initState = {
  editorState: EditorState.createEmpty()
}

const editorReducer = (state = initState, action) => {
  switch (action.type) {
    case EDIT_EDITOR_STATE:
      return { ...state, editorState: action.editorState }
    default:
      return state
  }
}

export default editorReducer
