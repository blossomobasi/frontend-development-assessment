import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { Slide } from "../animation/Slide";

const HomeMain = () => {
	const navigate = useNavigate();

	return (
		<main className="flex justify-center md:mb-24 mb-14">
			<div className="flex flex-col items-center text-center">
				<Slide className="py-2 text-sm px-5 rounded-full bg-lightPrimary text-primary font-semibold mb-8">
					AfCFTA Digital Trade Platform
				</Slide>

				<Slide>
					<h1 className="lg:text-6xl md:text-5xl text-3xl font-bold md:mb-10 mb-5 max-w-3xl">
						Join Africa&apos;s Digital Trade Revolution
					</h1>
				</Slide>

				<Slide>
					<p className="md:text-xl text-lg text-gray max-w-2xl">
						Connect with 54 African countries, access trade opportunities, and grow your business across the continent
						through the National AfCFTA Digital Trade Platform.
					</p>
				</Slide>

				<Slide delay={1} className="flex sm:flex-row flex-col gap-3 md:mt-10 mt-5 justify-center w-full">
					<Button className="sm:w-fit w-full" onClick={() => navigate("/register")}>
						Start Registration
					</Button>
					<Button className="sm:w-fit w-full" variant="secondary">
						Learn More
					</Button>
				</Slide>
			</div>
		</main>
	);
};

export default HomeMain;
