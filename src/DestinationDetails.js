import React from "react";
import { useParams } from "react-router";
import { data } from "./data";
import { NavLink } from "react-router-dom";

const DestinationDetails = () => {
	const destination = useParams();

	const filteredContinent = data.continents.filter(
		(c) => c.name === destination.continent
	);

	const filteredCountry = filteredContinent[0].countries.filter(
		(c) => c.name === destination.country
	);

	const destinationDetails = filteredCountry[0].destinations.filter(
		(d) => d.name === destination.destinationDetails
	);


	const {
		image,
		description,
		location,
		name,
		openingHours,
		ratings,
		reviews,
		ticketPrice,
		website,
	} = destinationDetails[0];

	return (
		<div className="bg-gray-800 border border-black text-white min-h-screen flex flex-col items-center">
			<div className="max-w-[1100px]">
				<h1 className="text-4xl font-bold my-10 text-center">{name}</h1>
				<div className="flex space-x-8">
					<img
						className="max-w-96 rounded-xl shadow-gray-700 shadow-md"
						src={image}
						alt="destination"
					/>
					<div className="space-y-3">
						<p>
							{" "}
							<span className="font-bold text-blue-600">Description : </span>
							{description}
						</p>
						<p>
							{" "}
							<span className="font-bold text-blue-600">Rating : </span>{" "}
							{ratings}
						</p>
						<p>
							{" "}
							<span className="font-bold text-blue-600">Review : </span>
							{reviews}
						</p>
						<p>
							{" "}
							<span className="font-bold text-blue-600">Location : </span>
							{location}
						</p>
						<p>
							{" "}
							<span className="font-bold text-blue-600">Opening : </span>{" "}
							{openingHours}
						</p>
						<p>
							{" "}
							<span className="font-bold text-blue-600">Ticket : </span>{" "}
							{ticketPrice}
						</p>
						<NavLink to={website}>
							<p className="font-bold text-blue-400 mt-3">Website </p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinationDetails;
