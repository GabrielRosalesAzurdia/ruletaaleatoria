import React from "react";

interface ResetComponentInterface {
	handleClick(): void;
}

const ResetComponent: React.FC<ResetComponentInterface> = ({ handleClick }) => {
	return (
		<div>
			<button
				onClick={handleClick}
				className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
			>
				Reset
			</button>
		</div>
	);
};

export default ResetComponent;
