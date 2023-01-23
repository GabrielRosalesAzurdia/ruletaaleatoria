import { BingoNumber, Failure } from "../../models";

/**
 * Contract of the repository used by the {@link BingoMaxNumber}
 */
export interface BingoMaxNumberRepository {
	/**
	 * Contract of the addMax method
	 * @param item - A {@link BingoNumber} object that will be set
	 * @returns Either a string with the response from the local storage or a {@link Failure}
	 */
	addMax(item: BingoNumber): Promise<string | Failure>;
    /**
	 * Contract of the deleteMax method
	 * @returns Either a {@link BingoNumber} from the local storage or a {@link Failure}
	 */
	getMax(): Promise<BingoNumber | Failure>;
}
