import TextInput from "../../ui/TextInput";
import { FaRegBuilding, FaRegCalendarMinus } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const BusinessInformation = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-2">Business Information</h2>
			<p className="mb-6">Provide your official business registration details</p>

			<div className="space-y-6">
				<div>
					<label className="flex items-center gap-2 text-sm font-medium mb-2">
						<FaRegBuilding size={16} className="text-primary" />
						Registered Business Name
					</label>
					<TextInput placeholder="Enter your registered business name" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-medium mb-2">RC Number / CAC Number</label>
						<TextInput placeholder="e.g., RC1234567" />
					</div>
					<div>
						<label className="block text-sm font-medium mb-2">Business Type</label>
						<select className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent">
							<option>Select business type</option>
							<option>Sole Proprietorship</option>
							<option>Partnership</option>
							<option>Limited Liability Company</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="flex items-center gap-2 text-sm font-medium mb-2">
							<FaRegCalendarMinus size={16} className="text-primary" />
							Year of Incorporation
						</label>
						<TextInput type="number" placeholder="e.g., 2020" />
					</div>
					<div>
						<label className="flex items-center gap-2 text-sm font-medium mb-2">
							<CiGlobe size={16} className="text-primary" />
							Website <span>(Optional)</span>
						</label>
						<TextInput type="url" placeholder="https://www.example.com" />
					</div>
				</div>

				<div>
					<label className="flex items-center gap-2 text-sm font-medium mb-2">
						<IoLocationOutline size={16} className="text-primary" />
						Business Address
					</label>
					<TextInput placeholder="Enter your business address" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="block text-sm font-medium mb-2">State</label>
						<select className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent">
							<option>Select state</option>
							<option>Lagos</option>
							<option>Abuja</option>
							<option>Rivers</option>
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium mb-2">Local Government Area</label>
						<input
							type="text"
							placeholder="Enter LGA"
							className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessInformation;
