import { BingoMaxNumberRepositoryImpl } from "../../../data/repositoriesImpl";
import { BingoNumber, Failure } from "../../../domain/models";
import { addMaxImpl, getMaxImpl } from "../../../domain/useCases";

/**
 * addMaxImpl instance
 * @param item - A {@link BingoNumber} object that will be set
 * @returns Either a string with the response from the local storage or a {@link Failure}
 */
export async function addMaxMethod(
	selectedMax: number
): Promise<string | Failure> {
	let bingoMaxNumberRepository = new BingoMaxNumberRepositoryImpl();
	let bingoMaxNumberUseCase = new addMaxImpl(bingoMaxNumberRepository);
	let newbingoMaxNumber = await bingoMaxNumberUseCase.addMax({
		value: selectedMax,
	});
	return newbingoMaxNumber;
}

/**
 * getMaxImpl instance
 * @returns Either a {@link BingoMaxNumber} with the response from the local storage or a {@link Failure}
 */
export async function getMaxMethod(): Promise<BingoNumber | Failure> {
	let bingoMaxNumberRepository = new BingoMaxNumberRepositoryImpl();
	let bingoMaxNumberUseCase = new getMaxImpl(bingoMaxNumberRepository);
	let bingoMaxNumber = await bingoMaxNumberUseCase.getMax();
	return bingoMaxNumber;
}
