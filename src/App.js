import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import { ExcerciseDetails, Home } from "./pages";
// components
import { Footer, Navbar } from "./components";
// styles
import { Box } from "@mui/material";

function App() {
	return (
		<Box width="400px">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/excercise/:id" element={<ExcerciseDetails />} />
        </Routes>
        <Footer/>
			</BrowserRouter>
		</Box>
	);
}

export default App;
