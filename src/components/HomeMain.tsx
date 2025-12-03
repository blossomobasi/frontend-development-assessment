import Button from "../ui/Button";

const HomeMain = () => {
	return (
		<main className="flex justify-center md:mb-24 mb-14">
			<div className="flex flex-col items-center text-center">
				<span className="py-2 text-sm px-5 rounded-full bg-lightPrimary text-primary font-semibold mb-8">
					AfCFTA Digital Trade Platform
				</span>

				<h1 className="lg:text-6xl md:text-5xl text-3xl font-bold md:mb-10 mb-5 max-w-3xl">
					Join Africa&apos;s Digital Trade Revolution
				</h1>
				<p className="md:text-xl text-lg text-gray max-w-2xl">
					Connect with 54 African countries, access trade opportunities, and grow your business across the continent
					through the National AfCFTA Digital Trade Platform.
				</p>

				<div className="flex sm:flex-row flex-col gap-3 md:mt-10 mt-5 justify-center w-full">
					<Button className="sm:w-fit w-full">Start Registration</Button>
					<Button className="sm:w-fit w-full" variant="secondary">
						Learn More
					</Button>
				</div>
			</div>
		</main>
	);
};

export default HomeMain;
