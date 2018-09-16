import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx";
import configureStore from "./store/store";
import actionCable from "actioncable";
import { fetchAllMessages, fetchMessage } from "./util/messages_api_util";
// import { requestMessage, createMessage } from './actions/message_actions;'

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // //
  // window.requestMessage = requestMessage;
  window.fetchAllMessages = fetchAllMessages;
  window.fetchMessage = fetchMessage;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
