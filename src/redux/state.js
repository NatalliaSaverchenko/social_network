let rerenderEntireTree = () => {
  console.log('state changed')
}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: state.profilePage.postsData.length+1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText=''
  rerenderEntireTree(state)
}
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}
export const subscribe = (observer) => {
  rerenderEntireTree=observer
}

export default state
