import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { OpenIMSDK } from "open-im-sdk";

// We'll use redux-logger just as an example of adding another middleware
// import logger from "redux-logger";

import createReducer from "./rootReducer";
export interface IStoreState {
  chat: {
    imStatus: boolean;
    chattingConversation: any;
    conversationList: any[];
    lastMinSeq: number;
    isEnd: boolean;
    topMessageList: any[];
    nftList: any[];
    groupMemberList: any[];
    panelState: any;
  };
  address: {
    activeUser: any;
    activeGroup: any;
    activeItemId: any;
  };
}

// export const openIM = new OpenIMSDK();

export function makeStore(preloadedState: IStoreState): any {
  const store = configureStore({
    reducer: createReducer(), // Adding the api middleware enables caching, invalidation, polling,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
  return store;
}

const store = makeStore({
  chat: {
    imStatus: false,
    chattingConversation: null,
    conversationList: [],
    lastMinSeq: 0,
    isEnd: false,
    topMessageList: [],
    nftList: [],
    groupMemberList: [],
    panelState: { name: "chat", value: "" },
  },
  address: {
    activeUser: null,
    activeGroup: null,
    activeItemId: null,
  },
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
