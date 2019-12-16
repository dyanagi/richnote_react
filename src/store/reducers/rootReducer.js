import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import notebooksReducer from './notebooksReducer'

const rootReducer = combineReducers({
  page: pageReducer,
  notebooks: notebooksReducer
})

export default rootReducer
