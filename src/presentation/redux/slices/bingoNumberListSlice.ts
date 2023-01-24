import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BingoNumber, BingoNumberList } from "../../../domain/models";

//? Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = BingoNumberList;

/**
 * Initial state of the to do lsit is a strcuture with a value of an emtpy array
 */
const initialState: InitialState = { value: [] };

/**
 * Slice of the to do list
 */
export const bingoNumberListSlice = createSlice({
	name: "bingoNumberList",
	initialState,
	reducers: {
		/**
		 * Set's all the list to be the payload
		 * @param state - the current state structure
		 * @param action - receives a list of BingoNumber s
		 * @returns a completely new value for the state structure
		 */
		setListReducer: (state, action: PayloadAction<BingoNumber[]>) => {
			return (state = { value: action.payload });
		},
		/**
		 * Add's an item to the list
		 * @param state - the current state structure
		 * @param action - receives an item to add to the to do list
		 * @returns the same value for the state structure plus the new item given
		 */
		addItemReducer: (state, action: PayloadAction<BingoNumber>) => {
			return (state = { value: [...state.value, action.payload] });
		},
	},
});

export const { setListReducer, addItemReducer } = bingoNumberListSlice.actions;
export default bingoNumberListSlice.reducer;
