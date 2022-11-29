import { combineReducers } from "@reduxjs/toolkit";
// import chatReducer from "@containers/Chat/chatSlice";
// import addressReducer from "@containers/Addressbook/addressSlice";
import counterReducer from "../features/counter/counterSlice";

export default function createReducer(): any {
  return combineReducers({
    counter: counterReducer,
    // chat: chatReducer,
    // address: addressReducer,
  });
}
