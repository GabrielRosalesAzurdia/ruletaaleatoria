import { BingoNumber } from "../BingoNumber/BingoNumber";

/**
 * Structure of the list of past numbers
 */
export interface BingoNumberList {
	/**
	 * Number getted in the bingo
	 */
	value: BingoNumber[];
}
