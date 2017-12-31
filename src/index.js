import {
  createStore
} from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const store = createStore(counterReducer)

const log = () => {
  console.log(store.getState())
}

store.subscribe(log)
log()

store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'INCREMENT'
})
