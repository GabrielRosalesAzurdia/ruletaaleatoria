import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Failure } from "../../../domain/models";
import { addMaxMethod } from "../../logic";
import MaxNumberComponent from "./MaxNumberComponent";

interface MaxNumberComponentContainerInterface {}

const MaxNumberComponentContainer: React.FC<
	MaxNumberComponentContainerInterface
> = () => {
	const [formValues, setformValues] = useState({ setmaxnumber: "" });

	/**
	 * Handles the submit from the to do form
	 * @param e - The submit event from the form
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (
			isNaN(
				Number(
					(
						e.currentTarget.elements.namedItem(
							"setmaxnumber"
						) as HTMLInputElement
					).value
				)
			)
		) {
			toast.error("Dame datos válidos");
			return;
		}
		addMaxMethod(
			Number(
				(e.currentTarget.elements.namedItem("setmaxnumber") as HTMLInputElement)
					.value
			)
		).then((response) => {
			if (response instanceof Failure) {
				toast.error("A failure happened on the todo form :(");
				return;
			}
			setformValues({ setmaxnumber: "" });
		});
	};

	/**
	 * Handles the change event from the form fields to save their values
	 * @param e - The change event from the form fields
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setformValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<MaxNumberComponent
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			setmaxnumber={formValues.setmaxnumber}
		/>
	);
};

export default MaxNumberComponentContainer;
