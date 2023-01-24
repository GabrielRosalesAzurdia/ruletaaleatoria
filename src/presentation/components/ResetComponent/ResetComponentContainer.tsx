import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setListReducer } from "../../redux/slices/bingoNumberListSlice";
import ResetComponent from "./ResetComponent";

interface ResetComponentContainerInterface {}

const ResetComponentContainer: React.FC<
	ResetComponentContainerInterface
> = () => {
	const dispatch = useAppDispatch();


	const handleClick= ()=>{
		localStorage.removeItem("bingonumberlist")
		localStorage.removeItem("maxnumber")
		dispatch(setListReducer([]))
	}

	return <ResetComponent handleClick={handleClick} />;
};

export default ResetComponentContainer;
