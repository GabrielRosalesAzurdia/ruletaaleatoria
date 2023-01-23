import {
	BingoNumber,
	Failure,
	LocalStorageError,
} from "../../../domain/models";
import { BingoMaxNumberRepository } from "../../../domain/repositories/BingoMaxNumber";
import {
	setMaxInToLocalStorage,
	addMaxToLocalStorage,
	getMaxFromLocalStorage,
} from "../../services";

/**
 * Implementation of the repository used by the {@link BingoMaxNumber}
 */
export class BingoMaxNumberRepositoryImpl implements BingoMaxNumberRepository {
	/**
	 * Implementation of the addMax method
	 * @param item - A {@link BingoNumber} object that will be set
	 * @returns Either a string with the response from the local storage or a {@link Failure}
	 */
	async addMax(item: BingoNumber): Promise<string | Failure> {
		try {
			let response = addMaxToLocalStorage(item);
			return response;
		} catch (e) {
			if (e instanceof LocalStorageError) {
				setMaxInToLocalStorage({ value: 0 });
				let response = addMaxToLocalStorage(item);
				return response;
			}
		}
		return Failure;
	}

	/**
	 * Implementation of the getMax method
	 * @returns Either a {@link BingoNumber} from the local storage or a {@link Failure}
	 */
	async getMax(): Promise<BingoNumber | Failure> {
		try {
			let response = getMaxFromLocalStorage();
			return JSON.parse(response);
		} catch (e) {
			if (e instanceof LocalStorageError) {
				setMaxInToLocalStorage({ value: 0 });
				let response = getMaxFromLocalStorage();
				return response;
			}
		}
		return Failure;
	}
}
