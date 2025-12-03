import React from "react";
import Text from "../ui/Text";
import { LuCircleCheck } from "react-icons/lu";
import { Slide } from "../animation/Slide";

const WhyRegister = () => {
	const lists = [
		"Verified business profile on national platform",
		"Access to trade financing and support",
		"Real-time market intelligence and insights",
		"Simplified customs and regulatory compliance",
		"Priority access to trade missions and events",
		"Business matchmaking with African partners",
	];

	return (
		<section className="max-w-4xl mx-auto border border-stone-300 md:p-10 p-6 rounded-2xl bg-[#fbfffd] mb-24">
			<Slide>
				<Text>Why Register with AfCFTA?</Text>
			</Slide>

			<ul className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-10 mt-5">
				{lists.map((item, index) => (
					<Slide key={index} towards={index % 2 === 0 ? "left" : "right"}>
						<li className="list-none flex items-center gap-2 md:text-base text-sm">
							<LuCircleCheck size={20} className="text-secondary" />
							{item}
						</li>
					</Slide>
				))}
			</ul>
		</section>
	);
};

export default WhyRegister;
