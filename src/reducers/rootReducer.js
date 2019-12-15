import { PAGE_NOTE } from '../constants/PageConstants'

const initState = {
  page: PAGE_NOTE,
  notebooks: [
    {
      id: 0,
      name: 'TODOs',
      notes: [
        { id: 0, title: 'Chores', content: '' },
        { id: 1, title: 'UX Design', content: '' },
        { id: 2, title: 'Front-End Development', content: '' }
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
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_PAGE') {
    return { ...state, page: action.page }
  }

  return state
}

export default rootReducer
