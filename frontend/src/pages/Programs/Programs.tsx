import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ProgramView } from "./ProgramView";

const Programs = () => {
	const location = useLocation();
	const getCurrPath = (fullpath: string) => {
		return fullpath.substring(1, fullpath.length);
	};
	const currentPath = getCurrPath(location.pathname);
	return <>{currentPath !== "programs" ? <Outlet /> : <ProgramView />}</>;
};

export default Programs;
