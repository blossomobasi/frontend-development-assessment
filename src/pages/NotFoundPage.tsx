import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-background md:py-24 py-14 px-5 text-center h-screen space-y-3">
			<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
			<p className="text-lg">The page you are looking for does not exist.</p>
			<Button onClick={() => navigate("/")}>Go to Home</Button>
		</div>
	);
};

export default NotFoundPage;
