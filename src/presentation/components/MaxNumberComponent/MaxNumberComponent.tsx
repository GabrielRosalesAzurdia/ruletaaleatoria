import React from "react";

interface MaxNumberComponentInterface {
	handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
	handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
	setmaxnumber: string;
}

const MaxNumberComponent: React.FC<MaxNumberComponentInterface> = ({
	handleSubmit,
	handleChange,
	setmaxnumber,
}) => {
	return (
		<form onSubmit={handleSubmit} >
			<div className="mb-6">
				<label htmlFor="" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
					Set Max Number
				</label>
				<input
					type="text"
					id="setmaxnumber"
					onChange={handleChange}
					name="setmaxnumber"
					value={setmaxnumber}
					className="bg-gray-50 border p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<button
				className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
				type="submit"
			>
				Ok
			</button>
		</form>
	);
};

export default MaxNumberComponent;
