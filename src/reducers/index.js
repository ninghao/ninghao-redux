import { combineReducers } from 'redux'

// reducers
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        { ...action.post }
      ]
    default:
      return state
  }
}

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { ...action.comment }
      ]
    default:
      return state
  }
}

const mainReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
})

export default mainReducer
