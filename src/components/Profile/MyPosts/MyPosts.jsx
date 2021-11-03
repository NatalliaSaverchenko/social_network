import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'


const MyPosts = (props) => {
  let newPostElement = React.createRef()
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  let onPostChange = () => {
    let text=newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
          value={props.newPostText}
          onChange = {onPostChange}
            ref={newPostElement}
            name=""
            id=""
            cols="100"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.postsData.map((post) => (
          <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
          />
        ))}
      </div>
    </div>
  )
}
export default MyPosts
