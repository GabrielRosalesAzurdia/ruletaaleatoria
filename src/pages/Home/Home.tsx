import React from 'react'
import NumberComponentContainer from '../../presentation/components/NumberComponent/NumberComponentContainer';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return (
		<section>
			<NumberComponentContainer />
		</section>
	);
};
export default Home