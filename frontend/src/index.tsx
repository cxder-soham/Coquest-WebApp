import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import LeftSideBar from "./components/LeftSideBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Message } from "./pages/Message";
import { Notifications } from "./pages/Notifications";
import "./index.css";
import TaskCard from "./components/TaskCard";
// Program flow Imports

import {
	ProjectBasicInformation,
	ProjectOperations,
	Events,
	H10,
	H11,
	H12,
	H13,
	H14,
	H20,
} from "./pages/Projects/Create";




/*
import {
	BasicInformation,
	Budgeting,
	CreateProgram,
	Operations,
	Promotion,
} from "./pages/Programs/CreateProgram";
*/

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);


const router = createBrowserRouter([
	{
		path: "/",
		element: <div></div>,
	},
	{
		path: "/home",
		element: (
			<div>
				<b>Home</b>
			</div>
		),
	},
	/*	
	{
		path: "/programs/create",
		element: <CreateProgram />,
		children: [
			{
				path: "basic-information",
				element: <BasicInformation />,
			},
			{
				path: "operations",
				element: <Operations />,
			},
			{
				path: "budgeting",
				element: <Budgeting />,
			},
			{
				path: "promotion",
				element: <Promotion />,
			},
		],
	},
	*/
	{
		path: "/projects/events",
		element: <Events />,
		children: [
			{
				path: "basic-information",
				element: <ProjectBasicInformation />,
			},
			{
				path: "operations",
				element: <ProjectOperations />,
			},
			{
				path: "H10",
				element: <H10 />,
			},
			{
				path: "H11",
				element: <H11 />,
			},
			{
				path: "H12",
				element: <H12 />,
			},
			{
				path: "H13",
				element: <H13 />,
			},
			{
				path: "H14",
				element: <H14 />,
			},
			{
				path: "H20",
				element: <H20 />,
			},
		],
	},
	{
		path: "/message",
		element: <Message />,
	},
	{
		path: "/notifications",
		element: <Notifications />,
	},
]);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Toolbar />
			<LeftSideBar />
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
