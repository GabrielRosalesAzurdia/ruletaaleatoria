import loadingReducer from "./slices/loadingSlice";
import bingoNumberListReducer from "./slices/bingoNumberListSlice"
import { configureStore } from "@reduxjs/toolkit";

/**
 * Store that handles the state of the app
 */
export const store = configureStore({
	/**
	 * State of the app
	 */
	reducer: {
		/**
		 * State of the loading spin
		 */
		loading: loadingReducer,
		/**
		 * State of the Bingo Numbers
		 */
		bingoNumberList: bingoNumberListReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
