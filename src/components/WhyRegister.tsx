import React from "react";
import Text from "../ui/Text";
import { LuCircleCheck } from "react-icons/lu";

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
			<Text>Why Register with AfCFTA?</Text>

			<ul className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-10 mt-5">
				{lists.map((item, index) => (
					<React.Fragment key={index}>
						<li className="list-none flex items-center gap-2 md:text-base text-sm">
							<LuCircleCheck size={20} className="text-secondary" />
							{item}
						</li>
					</React.Fragment>
				))}
			</ul>
		</section>
	);
};

export default WhyRegister;
