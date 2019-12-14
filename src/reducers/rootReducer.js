import { PAGE_NOTE } from '../constants/PageConstants'

const initState = {
  page: PAGE_NOTE
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_PAGE') {
    return { ...state, page: action.page }
  }

  return state
}

export default rootReducer
