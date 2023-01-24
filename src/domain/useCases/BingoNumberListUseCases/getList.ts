import { BingoNumberList, Failure } from "../../models";
import { BingoNumberListRepository } from "../../repositories/BingoNumberListRepository";

/**
 * Contract of the getList use case for {@link BingoNumberList}
 */
export interface getList {
	/**
	 * Contract of the getList method
	 * @returns Either a {@link BingoNumberList} or a {@link Failure}
	 */
	getList(): Promise<BingoNumberList | Failure>;
}

export class getListImpl implements getList{
	/**
	 * Connection with the repository
	 */
    repository:BingoNumberListRepository;

    /**
	 * Creaetes an getListImpl
	 * @param repository - A repository {@link BingoNumberListRepository}, when used give the
	 * implementation of the repository BingoMaxNumberRepositoryImpl
	 */
	constructor(repository: BingoNumberListRepository) {
		this.repository = repository;
	}

	/**
	 * Implementation of the getList method
	 * @returns Either a {@link BingoNumberList} or a {@link Failure}
	 */
	getList(): Promise<BingoNumberList | Failure> {
		return this.repository.getList();
	}
}