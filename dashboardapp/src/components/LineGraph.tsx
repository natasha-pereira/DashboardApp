import React from "react";
import { useQuery } from "@tanstack/react-query";

const LineGraph = () => {
	const { data } = useQuery(["lineGraph"], async () => {
		return await fetch(
			"https://disease.sh/v3/covid-19/historical/all?lastdays=all"
		).then((res) => res.json());
	});

	console.log(data);

	// if (isLoading) console.log("isloading");

	return <div>LineGraph {}</div>;
};

export default LineGraph;
