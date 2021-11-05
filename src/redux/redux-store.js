import { combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from './sidebarReducer '

let reducers=combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
})

let store=createStore(reducers)
export default store