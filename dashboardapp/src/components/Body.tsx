import React from "react";
import ContactPage from "./ContactPage";

const Body = () => {
	return (
		<div className=" flex flex-col gap-y-4 grow">
			<div className="container text-center bg-teal-500 p-4">Contact Page</div>
			<ContactPage />
		</div>
	);
};

export default Body;
