import React from "react";

import SideBar from "./components/SideBar";
// import Body from "./components/Body";
// import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "../src/components/store";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="flex flex-row gap-x-2">
				{/* <h1>Hello World!</h1> */}
				{/* <Header /> */}
				<SideBar />
				<Outlet />
			</div>
		</Provider>
	);
}

export default App;
