import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";
import Survey from "./pages/Survey";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="register" element={<Register />} />
			<Route path="survey" element={<Survey />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
export default App;
