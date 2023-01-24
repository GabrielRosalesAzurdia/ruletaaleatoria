import React from "react";
import { LoadingSpin } from "../LoadingSpin";

interface NumberComponentInterface {
	numberToShow: Number | string;
	loading: Boolean;
}

const NumberComponent: React.FC<NumberComponentInterface> = ({
	loading,
	numberToShow,
}) => {
	return (
		<div className="text-center">
			<div className="spacer"></div>
			<div className="bodysquare">
				{!loading ? (
					typeof numberToShow == "number" ? (
						<div>
							<h1 className="squareCurrentNumber">{numberToShow.toString()}</h1>
							<div className="line"></div>
						</div>
					) : (
						<div>
							<h1 className="squareCurrentNumber2">{numberToShow.toString()}</h1>
							<div className="line"></div>
						</div>
					)
				) : (
					<LoadingSpin />
				)}
			</div>
		</div>
	);
};

export default NumberComponent;
