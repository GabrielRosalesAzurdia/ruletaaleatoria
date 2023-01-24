import { createSlice } from "@reduxjs/toolkit";

//* Se crea un tipo para el initialState para que sea fácil de manejar
type InitialState = {
	/**
	 * Flag for the loading spin at the Home Page
	 */
	homePageNewNumber: boolean
};

/**
 * Initial state of the loading spin is newNumberLoading in false
 */
const initialState: InitialState = {
	homePageNewNumber: false
};

/**
 * Slice of the loading spin
 */
export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		/**
		 * Turns on the homePageNewNumber property
		 * @param state - the current state structure
		 * @returns the property formTDLoading as true
		 */
		turnOnHomePageNewNumber: () => {
			return { homePageNewNumber: true };
		},
		/**
		 * Turns off the formTDLoading property
		 * @param state - the current state of the structure
		 * @returns the property formTDLoading as false
		 */
		turnOffHomePageNewNumber: () => {
			return { homePageNewNumber: false };
		},
	},
});

export const {
	turnOnHomePageNewNumber,
	turnOffHomePageNewNumber,
} = loadingSlice.actions;
export default loadingSlice.reducer;
