import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import CreateContact from "./components/CreateContact";
import ChartsAndMaps from "./components/ChartsAndMaps";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/body",
				element: <Body />,
			},
			// {
			// 	path: "/",
			// 	element: <Body />,
			// },
			{
				path: "/editContact/:id",
				element: <CreateContact />,
			},
			{
				path: "/charts",
				element: <ChartsAndMaps />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={appRouter} />);
