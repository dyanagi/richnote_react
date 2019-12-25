import { PAGE_NOTES } from '../../constants/PageConstants'
import {
  SET_CURRENT_NOTE,
  SET_CURRENT_NOTEBOOK,
  SET_PAGE
} from '../../constants/ActionTypes'

// For Mobile Screen
export const setPage = page => ({ type: SET_PAGE, page: page })

export const setCurrentNotebook = notebookId => ({
  type: SET_CURRENT_NOTEBOOK,
  notebookId
})

export const setCurrentNote = (notebookId, noteId) => ({
  type: SET_CURRENT_NOTE,
  notebookId,
  noteId
})

function canOpenNote (state) {
  // false if the note is already opened
  return true
}

function setNoteView (dispatch, notebookId, noteId) {
  dispatch(setPage(PAGE_NOTES))
}

function setErrorMessage (dispatch, message) {
  dispatch(setPage(PAGE_NOTES))
}

export function openNote (notebookId, noteId) {
  return (dispatch, getState) => {
    if (canOpenNote(getState())) {
      setNoteView(dispatch, notebookId, noteId)
    } else {
      setErrorMessage(dispatch, 'err')
    }
  }
}
