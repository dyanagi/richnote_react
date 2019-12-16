import {
  CHANGE_PAGE,
  CREATE_NOTEBOOK, DELETE_NOTEBOOK,
  UPDATE_NOTEBOOK
} from '../../constants/ActionTypes'

export const changePage = (page) => ({ type: CHANGE_PAGE, page: page })
export const createNotebook = (name) => ({ type: CREATE_NOTEBOOK, name: name })
export const updateNotebook = (id, name) => ({
  type: UPDATE_NOTEBOOK,
  id: id,
  name: name
})
export const deleteNotebook = (id) => ({ type: DELETE_NOTEBOOK, id: id })
