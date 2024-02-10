import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { data } from "./data";
import Card from "./Card";

const Country = () => {
	const { continent } = useParams();

	const filteredContinent = data.continents.filter((c) => c.name === continent);


	return (
		<div className="bg-gray-800 border border-black text-white min-h-screen flex flex-col items-center">
			<div className="my-20 font-bold text-center">
				<h1 className="text-5xl">Welcome To Trip Advisor</h1>
				<h2 className="text-3xl text-blue-600 mt-5">
					Top Countries in {continent} for your next Holiday
				</h2>
			</div>
			<div>
				<div className="flex space-x-10">
					{filteredContinent[0].countries?.map((e) => (
						<NavLink to={`/${continent}/${e.name}`}>
							<Card name={e.name} image={e.image} />
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default Country;
