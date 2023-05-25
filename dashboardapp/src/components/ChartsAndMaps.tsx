import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LineGraph from "./LineGraph";

const queryClient = new QueryClient();

const ChartsAndMaps = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex flex-col content-start justify-center">
				<div className="container text-center bg-teal-500 p-4 h-24">
					Charts And Maps
				</div>
				<LineGraph />
			</div>
		</QueryClientProvider>
	);
};

export default ChartsAndMaps;
