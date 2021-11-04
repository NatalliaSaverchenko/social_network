import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {
  updateMessageActionCreator,
  addMessageActionCreator,
} from './../../redux/state'

const Dialogs = (props) => {
  console.log(props)
  let newDialogElement = props.state.newMessageText

  const updateMessage = (e) => {
    let message = e.target.value
    props.dispatch(updateMessageActionCreator(message))
  }
  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div>
          {props.state.dialogsData.map((item) => (
            <div>
              <DialogItem
                newMessageText={props.state.newMessageText}
                dispatch={props.dispatch}
                key={item.id}
                name={item.name}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={classes.messages}>
        <div>
          {props.state.messagesData.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
        </div>

        <div>
          <textarea
            onChange={updateMessage}
            placeholder={'Add message'}
            value={newDialogElement}
            id={props.id}
          ></textarea>
          <div>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
