import React from "react";

interface NewNumberComponentInterface {
	handleClick(): void;
}

const NewNumberComponent: React.FC<NewNumberComponentInterface> = ({
	handleClick,
}) => {
	return (
		<div>
			<button
				className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleClick}
			>
				New Number
			</button>
		</div>
	);
};

export default NewNumberComponent;
