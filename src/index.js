import {
  createStore
} from 'redux'

// state shape
// {
//   posts: [
//     { id: 1, title: 'welcome to ninghao.net' }
//   ],
//   comments: [
//     { id: 1, postId: 1, content: 'nice ~' }
//   ]
// }

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

const mainReducer = (state = {}, action) => {
  return {
    posts: postsReducer(state.posts, action),
    comments: commentsReducer(state.comments, action)
  }
}

// store
const store = createStore(mainReducer)

const log = () => {
  console.log(store.getState())
}

store.subscribe(log)
log()
