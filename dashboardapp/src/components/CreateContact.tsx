import React, { useEffect, useState } from "react";
import { saveContactDetails, updateContactDetails } from "./store";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ContactPage from "./ContactPage";
import { useParams, Link } from "react-router-dom";

const CreateContact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [status, setStatus] = useState("");

	const { id } = useParams();

	const [saveContact, setSaveContact] = useState(false);

	const dispatch = useDispatch();

	const user = useSelector((select: any) =>
		select.contactDetails.value.find((c: any) => c.id === Number(id))
	);

	useEffect(() => {
		if (user !== undefined) {
			setFirstName(user.firstName);
			setLastName(user.lastName);
			setStatus(user.status);
		}
	}, [user]);

	return saveContact ? (
		<ContactPage />
	) : (
		<>
			{user === undefined ? (
				<h1 className="text-center font-bold">Create Contact</h1>
			) : (
				<h1 className="text-center font-bold">Edit Contact</h1>
			)}
			<form className="self-center w-full max-w-sm">
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							First Name
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-full-name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-last-name"
						>
							Last Name
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							id="inline-last-name"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="status"
						>
							Status
						</label>
					</div>
					<label className="md:w-1/3 block text-gray-500 font-bold">
						<input
							className="mr-2 leading-tight"
							type="radio"
							name="status"
							value="active"
							checked={status === "active"}
							onChange={(e) => setStatus(e.target.value)}
						/>
						<span className="text-sm">Active</span>
					</label>
					<label className="md:w-1/3 block text-gray-500 font-bold">
						<input
							className="mr-2 leading-tight"
							type="radio"
							name="status"
							value="inactive"
							checked={status === "inactive"}
							onChange={(e) => setStatus(e.target.value)}
						/>
						<span className="text-sm">Inactive</span>
					</label>
				</div>
				{user === undefined ? (
					<div className="md:flex md:items-center">
						<div className="md:w-1/3"></div>
						<div className="md:w-2/3">
							<button
								className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
								type="button"
								onClick={() => {
									setSaveContact(true);
									dispatch(
										saveContactDetails({
											firstName: firstName,
											lastName: lastName,
											status: status,
										})
									);
								}}
							>
								Save Contact
							</button>
						</div>
					</div>
				) : (
					<div className="md:flex md:items-center">
						<div className="md:w-1/3"></div>
						<div className="md:w-2/3">
							<Link
								to="/body"
								className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
								type="button"
								onClick={() => {
									// setSaveContact(true);
									dispatch(
										updateContactDetails({
											id: user.id,
											firstName: firstName,
											lastName: lastName,
											status: status,
										})
									);
								}}
							>
								Save Edit
							</Link>
						</div>
					</div>
				)}
			</form>
		</>
	);
};

export default CreateContact;
