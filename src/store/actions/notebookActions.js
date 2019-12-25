import {
  ADD_NOTEBOOK,
  DELETE_NOTEBOOK,
  EDIT_NOTEBOOK
} from '../../constants/ActionTypes'

export const createNotebook = name => ({ type: ADD_NOTEBOOK, name: name })
export const updateNotebook = (id, name) => ({
  type: EDIT_NOTEBOOK,
  id: id,
  name: name
})
export const deleteNotebook = id => ({ type: DELETE_NOTEBOOK, id: id })
