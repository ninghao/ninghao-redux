import React from 'react'
import { connect } from 'react-redux'

const PostItem = ({ entity, onClickDeleteButton }) => {
  return (
    <div>
      <h3>{ entity.title }</h3>
      <button onClick={ onClickDeleteButton }>DELETE</button>
    </div>
  )
}

const PostList = ({ entities, onClickDeleteButton }) => {
  const items = entities.map(item =>
    <PostItem
      key={ item.id }
      entity={ item }
      onClickDeleteButton={ () => onClickDeleteButton(item.id) }
    />
  )

  return (
    <div>{ items }</div>
  )
}

const mapStateToProps = (state) => {
  return {
    entities: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDeleteButton: (id) => {
      dispatch({
        type: 'DELETE_POST',
        id
      })
    }
  }
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

// class Posts extends Component {
//   static contextTypes = {
//     store: PropTypes.object
//   }
//
//   constructor (props, context) {
//     super(props)
//
//     console.log('Context：', context)
//     console.log('State：', context.store.getState())
//
//     this.store = context.store
//
//     this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
//   }
//
//   componentWillUnMount () {
//     this.unsubscribe()
//   }
//
//   onClickDeleteButton = (id) => {
//     this.store.dispatch({
//       type: 'DELETE_POST',
//       id
//     })
//   }
//
//   render () {
//     const entities = this.store.getState().posts
//     return (
//       <PostList
//         entities={ entities }
//         onClickDeleteButton={ this.onClickDeleteButton }
//       />
//     )
//   }
// }
// Posts.contextTypes = {
//   store: PropTypes.object
// }

export default Posts
