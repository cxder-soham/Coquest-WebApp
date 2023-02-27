import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Toolbar from "./components/Toolbar";
import LeftSideBar from "./components/LeftSideBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./index.css";
import TaskCard from "./components/TaskCard";
import { CreateCoop, Operations } from "./pages/Coop";
import { Login } from "./pages/Login";

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

    {
        path: "/Coop/CreateCoop",
        element: <CreateCoop />,
    },
    {
        path: "/Coop/Operations",
        element: <Operations />,
    },
    {
        path: "/Login",
        element: <Login />,
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
