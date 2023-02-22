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
} from "./pages/Projects/Events";

import {
	NewProject1,
} from "./pages/Projects/Build";


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
		],
	},
	{
		path: "/projects/build",
		element: <Events />,
		children: [
			{
				path: "newproject1",
				element: <NewProject1 />,
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
