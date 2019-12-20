import { combineReducers } from 'redux'
import navigationReducer from './navigationReducer'
import notebooksReducer from './notebooksReducer'
import editorReducer from './editorReducer'

const rootReducer = combineReducers({
  navigation: navigationReducer,
  notebooks: notebooksReducer,
  editor: editorReducer
})

export default rootReducer
