import TextInput from "../../ui/TextInput";
import { GoMail } from "react-icons/go";
import { FiPhone, FiUser } from "react-icons/fi";
import { LuBriefcase, LuMail } from "react-icons/lu";

const ContactDetails = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-2">Contact Details</h2>
			<p className="mb-6">Provide your primary contact information</p>

			<div className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="flex items-center gap-2 text-sm font-medium mb-2">
							<FiUser size={16} className="text-primary" />
							Contact Person Name
						</label>
						<TextInput type="text" placeholder="Enter full name" />
					</div>
					<div>
						<label className="flex items-center gap-2 text-sm font-medium mb-2">
							<LuBriefcase size={16} className="text-primary" />
							Position/Role
						</label>
						<TextInput type="text" placeholder="e.g., CEO, Manager, Director" />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label className="flex items-center gap-2 text-sm font-medium mb-2">
							<LuMail size={16} className="text-primary" />
							Official Email
						</label>
						<TextInput type="email" placeholder="contact@company.com" />
						<p className="text-xs text-gray mt-1">We'll send verification and updates to this email</p>
					</div>
					<div>
						<label className="flex items-center gap-2 text-sm font-medium mb-2">
							<FiPhone size={16} className="text-primary" />
							Phone Number
						</label>
						<div className="flex gap-2">
							<div className="w-20">
								<TextInput type="text" value="+234" readOnly />
							</div>
							<div className="w-full">
								<TextInput type="tel" placeholder="8012345678" />
							</div>
						</div>
					</div>
				</div>

				<div>
					<label className="flex items-center gap-2 text-sm font-medium mb-2">
						<FiPhone size={16} />
						Alternative Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
					</label>
					<div className="flex gap-2">
						<div className="w-16">
							<TextInput type="text" value="+234" readOnly />
						</div>
						<div className="w-[25rem]">
							<TextInput type="tel" placeholder="8012345678" />
						</div>
					</div>
				</div>

				<div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
					<div className="text-primary flex-shrink-0">
						<GoMail size={20} />
					</div>
					<div>
						<p className="text-sm font-semibold">Verification Required</p>
						<p className="text-sm text-gray">
							We'll send a verification code to your email address. Please ensure it's accurate and accessible.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
