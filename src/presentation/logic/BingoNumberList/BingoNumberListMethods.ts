import { BingoNumberListRepositoryImpl } from "../../../data/repositoriesImpl";
import { BingoNumberList, Failure } from "../../../domain/models";
import { addItemImpl, getListImpl } from "../../../domain/useCases";

/**
 * getListImpl instance
 * @returns Either a {@link BingoNumberList} or a {@link Failure}
 */
export async function getListMethod(): Promise<BingoNumberList | Failure> {
	let bingoNumberListRepository = new BingoNumberListRepositoryImpl();
	let bingoNumberListUseCase = new getListImpl(bingoNumberListRepository);
	let bingoMaxNumber = await bingoNumberListUseCase.getList();
	return bingoMaxNumber;
}

/**
 * addItemImpl Instance
 * @oaram item - A {@link BingoNumber} to be added to the list
 * @returns Either a json respose from the local storage or a {@link Failure}
 */
export async function addItemMethod(
	newNumber: number
): Promise<BingoNumberList | Failure> {
	let bingoNumberListRepository = new BingoNumberListRepositoryImpl();
	let bingoNumberListUseCase = new addItemImpl(bingoNumberListRepository);
	let bingoMaxNumber = await bingoNumberListUseCase.addItem({
		value: newNumber,
	});
	return bingoMaxNumber;
}
