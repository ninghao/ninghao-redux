import React from 'react'
import { render } from 'react-dom'
import {
  createStore
} from 'redux'

import mainReducer from './reducers'
import App from './components/App'

// store
const store = createStore(mainReducer)

const log = () => {
  console.log(store.getState())
}

store.subscribe(log)
log()

store.dispatch({
  type: 'ADD_POST',
  post: {
    id: 1,
    title: 'welcome to ninghao.net'
  }
})
store.dispatch({
  type: 'ADD_COMMENT',
  comment: {
    id: 1,
    postId: 1,
    content: 'nice ~'
  }
})

render(
  <App />,
  document.getElementById('root')
)
