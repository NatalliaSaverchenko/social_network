import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://travelata.ru/blog/wp-content/uploads/2019/06/plyazh-surim.jpg'
          alt=""
        />
      </div>
      <div className={classes.descriptionBlock}>ava + descrption</div>
    </div>
  )
}
export default ProfileInfo
