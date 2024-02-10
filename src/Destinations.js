import React from "react";
import { useParams } from "react-router";
import { data } from "./data";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const Destinations = () => {
	const { country } = useParams();
	const { continent } = useParams();

	const filteredContinent = data.continents.filter((c) => c.name === continent);

	const filteredCountry = filteredContinent[0].countries.filter(
		(c) => c.name === country
	);


	return (
		<div className="bg-gray-800 border border-black text-white min-h-screen flex flex-col items-center">
			<div className="my-20 font-bold text-center">
				<h1 className="text-5xl">Welcome To Trip Advisor</h1>
				<h2 className="text-3xl text-blue-600 mt-5">
					Top Destinations in {country} for your next Holiday
				</h2>
			</div>
			<div>
				<div className="flex space-x-10">
					{filteredCountry[0].destinations?.map((e) => (
						<NavLink to={`/${continent}/${country}/${e.name}`}>
							<Card name={e.name} image={e.image} />
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default Destinations;
