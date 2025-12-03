import { Slide } from "../animation/Slide";
import Button from "../ui/Button";

const BeginRegistrationProcess = () => {
	return (
		<section className="flex flex-col items-center justify-center text-center">
			<Slide>
				<h2 className="md:text-4xl text-3xl font-bold text-center mb-5">Ready to Go Continental?</h2>
			</Slide>
			<p className="max-w-3xl md:text-lg text-base text-gray mb-5">
				Take the first step towards expanding your business across Africa. Complete your registration today.
			</p>
			<Button href="/register">Begin Registration Process</Button>
		</section>
	);
};

export default BeginRegistrationProcess;
