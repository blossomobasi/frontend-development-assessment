import React from "react";

import { PiShootingStarFill } from "react-icons/pi";
import { LuCircleCheck } from "react-icons/lu";

import Button from "../ui/Button";
import MultiStepRegistration from "./MultiStepRegistration";

const Registration = () => {
	const [startRegistration, setStartRegistration] = React.useState(false);

	return (
		<section>
			{!startRegistration && (
				<div className="flex items-center justify-center py-20 md:px-8 text-center">
					<div className="max-w-2xl w-full rounded-2xl shadow-lg flex flex-col items-center md:p-12 p-4 bg-white">
						<div className="w-fit py-2.5  px-5 rounded-full bg-secondary text-white font-semibold mb-8 flex items-center gap-2">
							<LuCircleCheck size={20} />

							<span>You are AfCFTA-Ready</span>
						</div>

						<div className="flex items-center gap-4 mb-2">
							<PiShootingStarFill size={30} className="text-accent animate-bounce" />
							<h2 className="md:text-4xl text-3xl font-bold">Congratulations!</h2>
						</div>

						<h3 className="md:text-2xl text-xl text-primary capitalize font-semibold mb-5">You can Register now</h3>

						<p className="text-lg text-gray">
							You passed the AfCFTA Readiness Assessment. Please complete your official registration to join the{" "}
							<span className="font-semibold text-black">National AfCFTA Digital Trade Platform.</span>
						</p>

						<div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-7 w-full">
							<div className="p-5 bg-[#F6F7F9] rounded-lg">
								<h4 className="text-2xl text-primary font-semibold">7</h4>
								<p className="text-gray">Simple Steps</p>
							</div>
							<div className="p-5 bg-[#F6F7F9] rounded-lg">
								<h4 className="text-2xl text-secondary font-semibold">10</h4>
								<p className="text-gray">Simple Steps</p>
							</div>
							<div className="p-5 bg-[#F6F7F9] rounded-lg">
								<h4 className="text-2xl text-accent font-semibold">∞</h4>
								<p className="text-gray">Simple Steps</p>
							</div>
						</div>

						<div className="mt-10">
							<Button onClick={() => setStartRegistration(true)}>Start Registration</Button>
							<p className="text-xs mt-2">Your progress will be automatically saved</p>
						</div>
					</div>
				</div>
			)}

			{startRegistration && <MultiStepRegistration />}
		</section>
	);
};

export default Registration;
