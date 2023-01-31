import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Failure, LocaLStorageFailure } from "../../../domain/models";
import { getListMethod } from "../../logic/BingoNumberList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setListReducer } from "../../redux/slices/bingoNumberListSlice";
import {
	turnOffHomePageNewNumber,
	turnOnHomePageNewNumber,
} from "../../redux/slices/loadingSlice";
import NumberComponent from "./NumberComponent";

interface NumberComponentContainerInterface {}

const NumberComponentContainer: React.FC<
	NumberComponentContainerInterface
> = () => {
	const bingoNumberListState = useAppSelector(
		(state) => state.bingoNumberList.value
	);
	const loadingState = useAppSelector(
		(state) => state.loading.homePageNewNumber
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(turnOnHomePageNewNumber());
		getListMethod().then((response) => {
			if (response instanceof LocaLStorageFailure) {
				toast.error("A Local Failure happened on the list :(");
				return;
			} else if (response instanceof Failure) {
				toast.error("A Failure happened on the list :(");
				return;
			}
			dispatch(setListReducer(response.value));
			dispatch(turnOffHomePageNewNumber());
		});
	}, []);

	return (
		<NumberComponent
			loading={loadingState}
			numberToShow={
				bingoNumberListState.length > 0
					? bingoNumberListState[bingoNumberListState.length - 1].value
					: "Game has not started yet"
			}
		/>
	);
};

export default NumberComponentContainer;
