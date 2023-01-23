import { BingoNumber, LocalStorageError } from "../../../domain/models";
import { Responses } from "../../../domain/models/LocalStorageResponses/LocalStorageResponses";

/**
 * Gets the Bingo numbers list from the Local Storage
 * @returns the json list of numbers
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function getListFromLocalStorage(): string {
	let listFromLocalStorage = localStorage.getItem("bingonumberlist");
	if (!listFromLocalStorage) {
		throw new LocalStorageError("There is not bingo list");
	}
	return listFromLocalStorage;
}

/**
 * Adds a Bingo Number the local storage
 * @param item - A {@link BingoNumber} to be added
 * @returns a BingoNumber[]
 *
 * @throws {@link LocalStorageError}
 * This error happens if the list does not exist in the local storage
 */
export function addItemToLocalStorage(
	item: BingoNumber
): BingoNumber[] {
	const listLocalStorage = localStorage.getItem("bingonumberlist");
	if (!listLocalStorage) {
		throw new LocalStorageError("There is not bingo list");
	}
	const list:BingoNumber[] = JSON.parse(listLocalStorage);
	list.push(item);
	localStorage.setItem("bingonumberlist", JSON.stringify(list));
	return list;
}

export function setBingoNumberListLocalStorage(bingoNumberList: BingoNumber[]): string {
	localStorage.setItem("bingonumberlist", JSON.stringify(bingoNumberList));
	return Responses.SUCCESS_PUT;
}