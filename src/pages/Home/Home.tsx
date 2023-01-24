import React from "react";
import MaxNumberComponentContainer from "../../presentation/components/MaxNumberComponent/MaxNumberComponentContainer";
import NewNumberComponentContainer from "../../presentation/components/NewNumberComponent/NewNumberComponentContainer";
import NumberComponentContainer from "../../presentation/components/NumberComponent/NumberComponentContainer";
import ResetComponentContainer from "../../presentation/components/ResetComponent/ResetComponentContainer";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<section>
			<div className="text-base font-bold">
				<p>Gabriel R - 23/01/2023</p>
			</div>
			<div>
				<NumberComponentContainer />
			</div>
			<div className="grid grid-cols-3 gap-1 text-center pt-20">
				<NewNumberComponentContainer />
				<MaxNumberComponentContainer />
				<ResetComponentContainer />
			</div>
		</section>
	);
};
export default Home;
