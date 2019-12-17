import { PAGE_NOTE } from '../../constants/PageConstants'
import { SET_PAGE } from '../../constants/ActionTypes'

// Store data for navigation
const navigationReducer = (state = {
  currentPage: PAGE_NOTE, // Display the left side of the screen
  currentNotebookId: 0, // Select the first one
  currentNoteId: null // Closed
}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, currentPage: action.page }
    case 'SET_CURRENT_NOTEBOOK':
      return { ...state }
    default:
      return state
  }
}

export default navigationReducer
