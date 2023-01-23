import {
	BingoNumber,
	BingoNumberList,
	Failure,
	LocalStorageError,
} from "../../../domain/models";
import { BingoNumberListRepository } from "../../../domain/repositories/BingoNumberListRepository";
import {
	setMaxInToLocalStorage,
	addMaxToLocalStorage,
	getMaxFromLocalStorage,
	getListFromLocalStorage,
	setBingoNumberListLocalStorage,
	addItemToLocalStorage,
} from "../../services";

/**
 * Implementation of the repository used by the {@link BingoNumberList}
 */
export class BingoNumberListRepositoryImpl
	implements BingoNumberListRepository
{
	/**
	 * Implementation of the addItem method
	 * @oaram item - A {@link BingoNumber} to be added to the list
	 * @returns Either a json respose from the local storage or a {@link Failure}
	 */
	async addItem(item: BingoNumber): Promise<BingoNumberList | Failure> {
		try {
			let response = addItemToLocalStorage(item);
			return { value: response };
		} catch (e) {
			if (e instanceof LocalStorageError) {
				setBingoNumberListLocalStorage([]);
				let response = addItemToLocalStorage(item);
				return { value: response };
			}
		}
		return Failure;
	}

	/**
	 * Implementation of the getList method
	 * @returns Either the {@link BingoNumberList} with the id given by the local storage or a {@link Failure}
	 */
	async getList(): Promise<BingoNumberList | Failure> {
		try {
			let response = getListFromLocalStorage();
			return { value: JSON.parse(response) };
		} catch (e) {
			if (e instanceof LocalStorageError) {
				setBingoNumberListLocalStorage([]);
				let response = getListFromLocalStorage();
				return { value: JSON.parse(response) };
			}
		}
		return Failure;
	}
}
