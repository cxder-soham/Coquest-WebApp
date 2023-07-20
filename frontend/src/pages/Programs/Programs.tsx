import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
const Programs = () => {
	const location = useLocation();
	const getCurrPath = (fullpath: string) => {
		return fullpath.substring(1, fullpath.length);
	};
	const [currentPath, setCurrentPath] = useState(
		getCurrPath(location.pathname)
	);
	return (
		<>
			{currentPath !== "programs" ? (
				<Outlet />
			) : (
				<div className="">Programs</div>
			)}
		</>
	);
};

export default Programs;
