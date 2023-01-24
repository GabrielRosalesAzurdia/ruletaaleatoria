import React from "react";
import { toast } from "react-hot-toast";
import {
	BingoNumberList,
	Failure,
	LocaLStorageFailure,
} from "../../../domain/models";
import { addItemMethod, getListMethod } from "../../logic";
import { getMaxMethod } from "../../logic/BingoMaxNumber";
import { useAppDispatch } from "../../redux/hooks";
import { addItemReducer } from "../../redux/slices/bingoNumberListSlice";
import NewNumberComponent from "./NewNumberComponent";

interface NewNumberComponentContainerInterface {}

const NewNumberComponentContainer: React.FC<
	NewNumberComponentContainerInterface
> = () => {
	const dispatch = useAppDispatch();

	function findNewOne(
		random: number,
		max: number,
		lista: BingoNumberList
	): number {
		for (let i = 0; i < lista.value.length; i++) {
			if (lista.value[i].value == random) {
				return findNewOne(Math.floor(Math.random() * max), max, lista);
			}
		}
		return random;
	}

	const handleClick = () => {
		getMaxMethod().then((responseMax) => {
			if (responseMax instanceof LocaLStorageFailure) {
				toast.error("A Local Failure happened on the list :(");
				return;
			} else if (responseMax instanceof Failure) {
				toast.error("A Failure happened on the list :(");
				return;
			}
			getListMethod().then((responselist) => {
				if (responselist instanceof LocaLStorageFailure) {
					toast.error("A Local Failure happened on the list :(");
					return;
				} else if (responselist instanceof Failure) {
					toast.error("A Failure happened on the list :(");
					return;
				}
				let newNumber = findNewOne(
					Math.floor(Math.random() * responseMax.value),
					responseMax.value,
					responselist
				);
				addItemMethod(newNumber).then((response) => {
					if (response instanceof LocaLStorageFailure) {
						toast.error("A Local Failure happened on the list :(");
						return;
					} else if (response instanceof Failure) {
						toast.error("A Failure happened on the list :(");
						return;
					}
					dispatch(addItemReducer({ value: newNumber }));
					if(responseMax.value == responselist.value.length+1){
						toast.success("We ran out of numbers!")
					}
				});
			});
		});
	};

	return <NewNumberComponent handleClick={handleClick} />;
};

export default NewNumberComponentContainer;
