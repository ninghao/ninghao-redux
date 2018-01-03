import React, { Component } from 'react'
import PropTypes from 'prop-types'

const PostItem = ({ entity }) => {
  return (
    <div>
      <h3>{ entity.title }</h3>
    </div>
  )
}

const PostList = ({ entities }) => {
  const items = entities.map(item =>
    <PostItem
      key={ item.id }
      entity={ item }
    />
  )

  return (
    <div>{ items }</div>
  )
}

class Posts extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor (props, context) {
    super(props)

    console.log('Context：', context)
    console.log('State：', context.store.getState())

    this.store = context.store
  }

  render () {
    const entities = this.store.getState().posts
    return (
      <PostList entities={ entities } />
    )
  }
}
// Posts.contextTypes = {
//   store: PropTypes.object
// }

export default Posts
