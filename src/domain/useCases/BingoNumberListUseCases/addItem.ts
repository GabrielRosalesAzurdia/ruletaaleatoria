import { BingoNumber, BingoNumberList, Failure } from "../../models";
import { BingoNumberListRepository } from "../../repositories/BingoNumberListRepository";

/**
 * Contract of the addItem use case for {@link BingoNumberList}
 */
export interface addItem {
	/**
	 * Contract of the addItem method
     * @oaram item - A {@link BingoNumber} to be added to the list
	 * @returns Either a json respose from the local storage or a {@link Failure}
	 */
	addItem(item: BingoNumber): Promise<BingoNumberList | Failure>;
}

export class addItemImpl implements addItem{
	/**
	 * Connection with the repository
	 */
    repository:BingoNumberListRepository;

    /**
	 * Creaetes an addItemImpl
	 * @param repository - A repository {@link BingoMaxNumberRepository}, when used give the
	 * implementation of the repository BingoMaxNumberRepositoryImpl
	 */
	constructor(repository: BingoNumberListRepository) {
		this.repository = repository;
	}

	/**
	 * Implementation of the addItem method
     * @oaram item - A {@link BingoNumber} to be added to the list
	 * @returns Either a json respose from the local storage or a {@link Failure}
	 */
	addItem(item: BingoNumber): Promise<BingoNumberList | Failure> {
		return this.repository.addItem(item);
	}
}