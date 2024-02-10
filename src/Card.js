import React from "react";

const Card = ({ name, image }) => {
	return (
		<div className="container relative">
			<img
				className="max-w-80 max-h-[180px] rounded-xl shadow-gray-700 shadow-md"
				src={image}
				alt="continent-pic"
			/>
			<div className="absolute bottom-3 left-3 z-10 flex space-x-2 font-bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-6 h-6 "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
					/>
				</svg>
				<p>{name}</p>
			</div>
		</div>
	);
};

export default Card;
