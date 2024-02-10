import { BrowserRouter, Route, Routes } from "react-router-dom";
import Continents from "./Continents";
import Country from "./Country";
import Destinations from "./Destinations";
import DestinationDetails from "./DestinationDetails";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Continents/>} />
					<Route path="/:continent" element={<Country/>} />
					<Route path="/:continent/:country" element={<Destinations/>} />
					<Route path="/:continent/:country/:destinationDetails" element={<DestinationDetails/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
