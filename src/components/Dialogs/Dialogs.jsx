import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.state.dialogsData.map((item) => (
          <DialogItem key={item.id} name={item.name} id={item.id} />
        ))}
      </div>
      <div className={classes.messages}>
        {props.state.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </div>
  )
}
export default Dialogs
