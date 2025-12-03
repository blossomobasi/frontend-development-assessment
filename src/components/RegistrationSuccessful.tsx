import { FaHome } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { LuCircleCheck } from "react-icons/lu";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const RegistrationSuccessful = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex items-center justify-center md:p-6 relative overflow-hidden">
			<div className="max-w-2xl w-full bg-white rounded-3xl md:p-12 p-5 shadow-lg text-center relative z-10">
				<div className="md:w-28 md:h-28 w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
					<LuCircleCheck className="text-white md:text-7xl text-4xl" />
				</div>

				<h1 className="lg:text-4xl text-2xl font-bold mb-2">Registration Submitted Successfully!</h1>
				<p className="md:text-lg text-base text-gray mb-8">Your application is now under review</p>

				<div className="bg-stone-100 rounded-2xl p-6 mb-8 text-left">
					<h3 className="font-medium mb-4 text-center">What happens next?</h3>
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<LuCircleCheck size={16} className="text-secondary" />
							<p className="md:text-sm text-xs text-gray-700">
								Our team will verify your documents within 2-3 business days
							</p>
						</div>
						<div className="flex items-center gap-2">
							<LuCircleCheck size={16} className="text-secondary" />
							<p className="md:text-sm text-xs text-gray-700">
								You'll receive a notification once your profile is approved
							</p>
						</div>
						<div className="flex items-center gap-2">
							<LuCircleCheck size={16} className="text-secondary" />
							<p className="md:text-sm text-xs text-gray-700">
								Access to trade opportunities across 54 African countries
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
					<button
						className="bg-primary text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
						onClick={() => navigate("/")}
					>
						<FaHome size={18} />
						Go to Dashboard
					</button>
					<Button variant="secondary" className="inline-flex items-center justify-center gap-2">
						<FaDownload size={18} />
						Download Receipt
					</Button>
				</div>

				<p className="text-xs text-gray">Application ID: AFT-2025-1W0KFD</p>
			</div>
		</div>
	);
};

export default RegistrationSuccessful;
