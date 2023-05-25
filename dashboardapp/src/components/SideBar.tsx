import React from "react";

import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="bg-[#0e0e0e] min-h-screen w-64">
			<ul className="text-zinc-50">
				<h1>Menu</h1>
				<li>
					<Link to="/body">Contact</Link>
				</li>
				<li>
					<Link to="/charts">Charts and Maps</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
