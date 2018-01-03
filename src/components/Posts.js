import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Posts extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor (props, context) {
    super(props)

    console.log('Context：', context)
    console.log('State：', context.store.getState())
  }

  render () {
    return (
      <div>
        <h3>Posts</h3>
      </div>
    )
  }
}
// Posts.contextTypes = {
//   store: PropTypes.object
// }

export default Posts
