import { PAGE_NOTE } from '../constants/PageConstants'

const initState = {
  page: PAGE_NOTE,
  notebooks: [
    { id: 0, name: 'TODOs' },
    { id: 1, name: 'Web Design' },
    { id: 2, name: 'Programming Tips & Tricks' }
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_PAGE') {
    return { ...state, page: action.page }
  }

  return state
}

export default rootReducer
