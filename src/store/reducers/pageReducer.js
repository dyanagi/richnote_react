import { PAGE_NOTE } from '../../constants/PageConstants'
import { CHANGE_PAGE } from '../../constants/ActionTypes'

const initState = PAGE_NOTE

const pageReducer = (state = initState, action) => {
  if (action.type === CHANGE_PAGE) {
    return action.page
  }

  return state
}

export default pageReducer
