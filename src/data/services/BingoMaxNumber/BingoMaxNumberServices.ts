import { BingoNumber, BingoNumberList, LocalStorageError } from "../../../domain/models";
import { Responses } from "../../../domain/models/LocalStorageResponses/LocalStorageResponses";

/**
 * Gets the Bingo numbers list from the Local Storage
 * @returns the json list of numbers
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function getMaxFromLocalStorage(): string {
	let maxMumberFromLocalStorage = localStorage.getItem("maxnumber");
	if (!maxMumberFromLocalStorage) {
		throw new LocalStorageError("There is not bingo list");
	}
	return maxMumberFromLocalStorage;
}

/**
 * Adds a Bingo Number the local storage
 * @param item - A {@link BingoNumber} to be added
 * @returns a BingoNumber[]
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function addMaxToLocalStorage(
	item: BingoNumber
): string {
	localStorage.setItem("maxnumber", JSON.stringify(item));
	return Responses.SUCCESS_PUT;
}

export function setMaxInToLocalStorage(maxNumber: BingoNumber): string {
	localStorage.setItem("maxnumber", JSON.stringify(maxNumber));
	return Responses.SUCCESS_PUT;
}