import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import classes from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts newPostText={props.profilePage.newPostText} postsData={props.profilePage.postsData} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
    </div>
  )
}
export default Profile
