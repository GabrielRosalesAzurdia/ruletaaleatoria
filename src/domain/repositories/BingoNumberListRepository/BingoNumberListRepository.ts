import { BingoNumber, BingoNumberList, Failure } from "../../models";

/**
 * Contract of the repository used by the {@link BingoNumberList}
 */
export interface BingoNumberListRepository {
	/**
	 * Contract of the getList method
	 * @returns Either the {@link BingoNumberList} with the id given by the local storage or a {@link Failure}
	 */
	getList(): Promise<BingoNumberList | Failure>;
	/**
	 * Contract of the addItem method
	 * @oaram item - A {@link BingoNumber} to be added to the list
	 * @returns Either a json respose from the local storage or a {@link Failure}
	 */
	addItem(item: BingoNumber): Promise<BingoNumberList | Failure>;
}
