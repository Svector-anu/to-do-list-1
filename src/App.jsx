import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FetchedList from "./pages/FetchedList/FetchedList";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/fetched-list" element={<FetchedList />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
