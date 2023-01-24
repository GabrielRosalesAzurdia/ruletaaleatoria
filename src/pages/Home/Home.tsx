import React from "react";
import MaxNumberComponentContainer from "../../presentation/components/MaxNumberComponent/MaxNumberComponentContainer";
import NewNumberComponentContainer from "../../presentation/components/NewNumberComponent/NewNumberComponentContainer";
import NumberComponentContainer from "../../presentation/components/NumberComponent/NumberComponentContainer";
import ResetComponentContainer from "../../presentation/components/ResetComponent/ResetComponentContainer";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<section>
			<div className="text-base">
				<p className="signature">Gabriel R - 23/01/2023</p>
			</div>
			<div>
				<NumberComponentContainer />
			</div>
			<div className="grid grid-cols-2 gap-2 text-center pt-20">
				<NewNumberComponentContainer />
				<ResetComponentContainer />
			</div>
			<div className="text-center pt-5">
				<MaxNumberComponentContainer />
			</div>
		</section>
	);
};
export default Home;
