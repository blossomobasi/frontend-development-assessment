import React, { useState } from "react";
import {
	FaArrowLeft,
	FaArrowRight,
	FaCheck,
	FaBuilding,
	FaUser,
	FaIdCard,
	FaFileAlt,
	FaTh,
	FaGlobe,
} from "react-icons/fa";
import ComingSoon from "./ComingSoon";
import BusinessInformation from "./form/BusinessInformation";
import ContactDetails from "./form/ContactDetails";
import RegistrationSuccessful from "./RegistrationSuccessful";
import Button from "../ui/Button";
import { FiSave } from "react-icons/fi";

interface Step {
	number: number;
	label: string;
	mobileLabel: string;
	icon: React.ReactNode;
}

const steps: Step[] = [
	{ number: 1, label: "Business Information", mobileLabel: "Business", icon: <FaBuilding /> },
	{ number: 2, label: "Contact Details", mobileLabel: "Contact", icon: <FaUser /> },
	{ number: 3, label: "Identity Verification", mobileLabel: "Identity", icon: <FaIdCard /> },
	{ number: 4, label: "Documents", mobileLabel: "Docs", icon: <FaFileAlt /> },
	{ number: 5, label: "Categories", mobileLabel: "Categories", icon: <FaTh /> },
	{ number: 6, label: "Trade Markets", mobileLabel: "Markets", icon: <FaGlobe /> },
	{ number: 7, label: "Review & Submit", mobileLabel: "Review", icon: <FaCheck /> },
];
const MultiStepRegistration = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [completedSteps, setCompletedSteps] = useState<number[]>([]);
	const [showSuccess, setShowSuccess] = useState<boolean>(false);

	const handleNext = () => {
		if (currentStep < steps.length) {
			setCompletedSteps([...completedSteps, currentStep]);
			setCurrentStep(currentStep + 1);
		} else {
			setCompletedSteps([...completedSteps, currentStep]);
			setShowSuccess(true);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const isStepCompleted = (stepNumber: number) => completedSteps.includes(stepNumber);
	const isStepActive = (stepNumber: number) => currentStep === stepNumber;

	// Success Screen
	if (showSuccess) {
		return <RegistrationSuccessful />;
	}

	// Step Content Components
	const renderStepContent = () => {
		switch (currentStep) {
			case 1:
				return <BusinessInformation />;

			case 2:
				return <ContactDetails />;

			case 3:
				return <ComingSoon title="Step 3: Identity Verification" />;

			case 4:
				return <ComingSoon title="Step 4: Documents" />;

			case 5:
				return <ComingSoon title="Step 5: Categories" />;

			case 6:
				return <ComingSoon title="Step 6: Trade Markets" />;

			case 7:
				return <ComingSoon title="Step 7: Review & Submit" />;

			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 pb-8 px-4">
			<header className="mb-10 border-b-2 border-stone-300 flex items-center justify-between py-5 md:px-40 px-5 sticky top-0  backdrop-blur-md z-10">
				<div>
					<h1 className="text-xl font-bold">AfCFTA Registration</h1>
					<p className="text-sm">Complete your business registration</p>
				</div>

				<Button variant="secondary" className="inline-flex items-center gap-2">
					<FiSave />
					<span className="hidden sm:inline">Save & Exit</span>
				</Button>
			</header>

			{/* Stepper Header */}
			<div className="mb-8 max-w-6xl mx-auto">
				<div className="flex items-center justify-between">
					{steps.map((step, index) => (
						<React.Fragment key={step.number}>
							<div className="flex flex-col items-center">
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
										isStepCompleted(step.number)
											? "bg-secondary text-white"
											: isStepActive(step.number)
											? "bg-primary text-white"
											: "bg-white border-2 border-stone-300 text-gray-500"
									}`}
								>
									{isStepCompleted(step.number) ? <FaCheck /> : step.number}
								</div>
								<p
									className={`text-xs mt-2 text-center ${
										isStepActive(step.number) || isStepCompleted(step.number) ? "" : "text-gray"
									}`}
								>
									<span className="hidden sm:inline">{step.label}</span>
									<span className="sm:hidden">{step.mobileLabel}</span>
								</p>
							</div>

							{index < steps.length - 1 && (
								<div
									className={`flex-1 h-1 ${
										isStepCompleted(step.number) ? "bg-gradient-to-tr from-primary to-secondary" : "bg-stone-300"
									}`}
								/>
							)}
						</React.Fragment>
					))}
				</div>
			</div>

			<div className="max-w-4xl mx-auto">
				{/* Form Content */}
				<div className="bg-white border border-stone-300 rounded-2xl shadow-sm md:p-8 p-4 mb-6">
					{renderStepContent()}

					{/* Navigation Buttons */}
					<div className="flex items-center justify-between mt-10 border-t border-t-stone-300 pt-10">
						<Button
							variant="secondary"
							onClick={handleBack}
							disabled={currentStep === 1}
							className={`inline-flex items-center gap-2 ${
								currentStep === 1
									? "bg-gray-200 text-gray-400 cursor-not-allowed"
									: "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
							}`}
						>
							<FaArrowLeft size={16} />
							Back
						</Button>

						<p className="text-sm text-gray">
							Step {currentStep} of {steps.length}
						</p>

						<Button onClick={handleNext} className="inline-flex items-center gap-2">
							{currentStep === steps.length ? "Submit" : "Next"}
							<FaArrowRight size={16} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiStepRegistration;
