const initState = {
  page: 'pageNote'
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_PAGE') {
    return { ...state, page: action.page }
  }

  return state
}

export default rootReducer
