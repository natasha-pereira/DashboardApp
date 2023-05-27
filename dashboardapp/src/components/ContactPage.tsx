import React, { useState } from "react";
import CreateContact from "./CreateContact";

import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";

const ContactPage = () => {
	const [addContact, setAddContact] = useState(false);

	// const { userid } = props;

	const userDetails = useSelector((state: any) => state.contactDetails.value);

	return addContact ? (
		<CreateContact />
	) : (
		<>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-40 py-2 px-4 rounded"
				onClick={() => setAddContact(true)}
			>
				Create contact
			</button>
			<div className="flex flex-row justify-start gap-x-4 flex-wrap">
				{userDetails.length === 1 ? (
					<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
						No Contacts Found. Please add contact by clicking on the Create
						Contact button
					</div>
				) : (
					userDetails
						.slice(1)
						.map((c: any, index: any) => <ContactCard {...c} key={index} />)
				)}
			</div>
		</>
	);
};

export default ContactPage;
