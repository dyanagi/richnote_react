import { combineReducers } from 'redux'
import navigationReducer from './navigationReducer'
import notebooksReducer from './notebooksReducer'

const rootReducer = combineReducers({
  navigation: navigationReducer,
  notebooks: notebooksReducer
})

export default rootReducer
