import React from "react";
import { data } from "./data";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const Continents = () => {
	return (
		<div className="bg-gray-800 border border-black text-white min-h-screen flex flex-col items-center">
			<div className="my-20 font-bold text-center">
				<h1 className="text-5xl">Welcome To Trip Advisor</h1>
				<h2 className="text-3xl text-blue-600 mt-5">
					Top Continents for your Next Holiday
				</h2>
			</div>
			<div>
				<div className="flex space-x-10">
					{data.continents.map((e) => (
						<NavLink to={`/${e.name}`}>
							<Card name={e.name } image={e.image } />
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default Continents;
