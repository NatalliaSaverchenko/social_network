const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

let initialState={
  dialogsData: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Victor' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Why you so shy?' },
    { id: 3, message: 'Hello' },
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      }
      state.messagesData.push(newMessage)
      state.newMessageText = ''
      return state
    case UPDATE_MESSAGE:
      state.newMessageText = action.newMessageText
      return state
    default:
      return state
  }
}
export default messagesReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (message) => ({type: UPDATE_MESSAGE, newMessageText: message})