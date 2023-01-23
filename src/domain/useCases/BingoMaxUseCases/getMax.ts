import { BingoNumber, Failure } from "../../models";
import { BingoMaxNumberRepository } from "../../repositories/BingoMaxNumber";

/**
 * Contract of the getMax use case for {@link BingoMaxNumber}
 */
export interface getMax {
	/**
	 * Contract of the getMax method
	 * @returns Either a {@link BingoMaxNumber} with the response from the local storage or a {@link Failure}
	 */
	getMax(): Promise<BingoNumber | Failure>;
}

export class getMaxImpl implements getMax{
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
	 * @returns Either a string with the response from the local storage or a {@link Failure}
	 */
	getMax(): Promise<BingoNumber | Failure> {
		return this.repository.getMax();
	}
}