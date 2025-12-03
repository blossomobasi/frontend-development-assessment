import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineGlobe } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";

import Text from "../ui/Text";

const OurCapabilities = () => {
	const capabilities = [
		{
			title: "54 African Markets",
			description: "Access trade opportunities across all African countries with seamless cross-border transactions.",
			Icon: HiOutlineGlobe,
			foreground: "text-primary",
			background: "bg-lightPrimary",
		},
		{
			title: "Trade Growth",
			description: "Leverage AfCFTA's $3.4 trillion market to expand your business and reach new customers.",
			Icon: FaArrowTrendUp,
			foreground: "text-secondary",
			background: "bg-lightSecondary",
		},
		{
			title: "Business Network",
			description: "Connect with verified businesses, exporters, and trade partners across Africa.",
			Icon: LuUsers,
			foreground: "text-accent",
			background: "bg-lightAccent",
		},
	];

	return (
		<section className="mt-5 mb-24">
			<Text>Our Capabilities</Text>

			<div className="grid sm:grid-cols-3 grid-cols-1 md:gap-7 gap-5 max-w-6xl mx-auto">
				{capabilities.map(({ title, description, Icon, foreground, background }) => (
					<div
						key={title}
						className="bg-white border border-stone-300 md:p-6 p-4 rounded-2xl hover:shadow-xl transition-shadow duration-300"
					>
						<div className={`md:p-2.5 p-1.5 w-fit rounded-lg mb-2 ${background}`}>
							<Icon size={25} className={`${foreground}`} />
						</div>
						<h3 className="md:text-xl text-base font-semibold mb-2">{title}</h3>
						<p className="text-gray md:text-base text-sm">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurCapabilities;
