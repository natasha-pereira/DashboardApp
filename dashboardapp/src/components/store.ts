import { configureStore, createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
	name: "contactDetails",
	initialState: {
		value: [
			{
				id: 0,
				firstName: "",
				lastName: "",
				status: "",
			},
		],
	},
	reducers: {
		saveContactDetails: (state, action) => {
			const id = state.value.length;
			state.value.push({ ...action.payload, id });
		},
		updateContactDetails: (state, action) => {
			state.value.map((value) => {
				if (value.id === action.payload.id) {
					value.firstName = action.payload.firstName;
					value.lastName = action.payload.lastName;
					value.status = action.payload.status;
				}
				return 1;
			});
		},
		deleteContactDetails: (state, action) => {
			state.value = state.value.filter((user) => user.id !== action.payload.id);
		},
	},
});

export const {
	saveContactDetails,
	updateContactDetails,
	deleteContactDetails,
} = contactSlice.actions;

export const store = configureStore({
	reducer: {
		contactDetails: contactSlice.reducer,
	},
});
