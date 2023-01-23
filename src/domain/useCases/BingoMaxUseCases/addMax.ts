import { BingoNumber, Failure } from "../../models";
import { BingoMaxNumberRepository } from "../../repositories/BingoMaxNumber";

/**
 * Contract of the addMax use case for {@link BingoMaxNumber}
 */
export interface addMax {
	/**
	 * Contract of the addMax method
	 * @param item - A {@link BingoNumber} object that will be set
	 * @returns Either a string with the response from the local storage or a {@link Failure}
	 */
	addMax(item: BingoNumber): Promise<string | Failure>;
}

export class addMaxImpl implements addMax{
	/**
	 * Connection with the repository
	 */
    repository:BingoMaxNumberRepository;

    /**
	 * Creaetes an addMaxImpl
	 * @param repository - A repository {@link BingoMaxNumberRepository}, when used give the
	 * implementation of the repository BingoMaxNumberRepositoryImpl
	 */
	constructor(repository: BingoMaxNumberRepository) {
		this.repository = repository;
	}

	/**
	 * Implementation of the addMax method
	 * @param item - A {@link BingoNumber} object that will be set
	 * @returns Either a string with the response from the local storage or a {@link Failure}
	 */
	addMax(item: BingoNumber): Promise<string | Failure> {
		return this.repository.addMax(item);
	}
}