const ADD_POST='ADD_POST'
const UPDATE_NEW_POST_TEXT='UPDATE_NEW_POST_TEXT'

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It is my first post.', likesCount: 20 },
      ],
      newPostText:'it-kamasutra'
    },
    messagesPage: {
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
    },
  },
  getState () {
    return this._state
  },
  _callSubscriber () {
    console.log('state changed')
  },

  // addPost () {
  //   let newPost = {
  //     id: this._state.profilePage.postsData.length+1,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   }
  //   this._state.profilePage.postsData.push(newPost)
  //   this._state.profilePage.newPostText=''
  //   this._callSubscriber(this._state)
  // },

  // updateNewPostText (newText) {
  //   this._state.profilePage.newPostText = newText
  //   this._callSubscriber(this._state)
  // },

  subscribe (observer) {
    this._callSubscriber=observer
  },
  
  dispatch (action) {
    if (action.type===ADD_POST) {
      let newPost = {
        id: this._state.profilePage.postsData.length+1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText=''
      this._callSubscriber(this._state)
    }
    if (action.type===UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText
    this._callSubscriber(this._state)

    }
  }
}
export default store
