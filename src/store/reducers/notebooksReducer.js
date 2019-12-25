import {
  ADD_NOTEBOOK,
  DELETE_NOTEBOOK,
  EDIT_NOTEBOOK
} from '../../constants/ActionTypes'

const initState = [
  {
    id: 0,
    name: 'TODOs',
    notes: [
      { id: 0, title: 'Chores', content: 'Wash dishes, do vacuum, sleep more' },
      { id: 1, title: 'UX Design', content: 'Get a review' },
      {
        id: 2,
        title: 'Front-End Development',
        content: 'Create a first React app.'
      }
    ]
  },
  {
    id: 1,
    name: 'Web Design',
    notes: [
      { id: 0, title: 'Colours', content: '' },
      { id: 1, title: 'Animation', content: '' },
      { id: 2, title: 'Tools', content: '' }
    ]
  },
  {
    id: 2,
    name: 'Programming',
    notes: [
      { id: 0, title: 'React.js', content: '' },
      { id: 1, title: 'Next.js', content: '' },
      { id: 2, title: 'Type Script', content: '' }
    ]
  }
]

const notebooksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NOTEBOOK:
      return [
        ...state,
        {
          id:
            state.reduce(
              (maxId, notebook) => Math.max(notebook.id, maxId),
              -1
            ) + 1,
          title: action.title,
          notes: []
        }
      ]

    case EDIT_NOTEBOOK:
      return state.map(notebook =>
        notebook.id === action.id
          ? {
              ...notebook,
              title: action.title
            }
          : notebook
      )

    case DELETE_NOTEBOOK:
      return state.filter(notebook => notebook.id !== action.id)

    default:
      return state
  }
}

export default notebooksReducer
