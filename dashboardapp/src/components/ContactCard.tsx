import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deleteContactDetails } from "./store";

const ContactCard = (props: any) => {
	const { firstName, lastName, status, id } = props;

	const dispatch = useDispatch();

	return (
		<div className="flex flex-col justify-center gap-y-4 border-solid border-black">
			<div className="flex flex-col gap-y-2 border-solid border-2 w-32 h-32 text-center">
				<h4 className="font-bold">Contact name</h4>
				<h5>
					{firstName} {lastName}
				</h5>
				<h4 className="font-bold">Status</h4>
				<h5>{status}</h5>
			</div>

			<Link
				to={"/editContact/" + id}
				className="self-center text-center bg-green-500 hover:bg-green-700 text-white font-bold rounded w-20 h-8"
			>
				Edit
			</Link>

			<button
				className="self-center bg-red-500 hover:bg-red-700 text-white font-bold rounded w-20 h-8"
				onClick={() => dispatch(deleteContactDetails({ id: id }))}
			>
				Delete
			</button>
		</div>
	);
};

export default ContactCard;
