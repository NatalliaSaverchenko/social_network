import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let newPostElement = React.createRef()
  let addPost = () => {
    props.addPost()
  }
  let onPostChange = (e) => {
    let text=newPostElement.current.value
    props.updateNewPostText(text)
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
