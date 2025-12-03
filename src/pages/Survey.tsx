import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { FaHome, FaCheck, FaRegQuestionCircle } from "react-icons/fa";

import { surveyQuestions as surveyQuestionsAPI } from "../data/surveyQuestions";
import type { SurveyOption } from "../types/survey.types";

import Button from "../ui/Button";
import { Slide } from "../animation/Slide";

// Survey questions data
const surveyQuestions = surveyQuestionsAPI;

const Survey = () => {
	const navigate = useNavigate();
	const [currentView, setCurrentView] = useState<"survey" | "results">("survey");
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [answers, setAnswers] = useState<Record<number, string>>({});
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const totalQuestions = surveyQuestions.length;
	const progress = ((currentQuestion + 1) / totalQuestions) * 100;

	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;

	const handleStartSurvey = () => {
		setCurrentView("survey");
		setCurrentQuestion(0);
		setAnswers({});
		setSelectedOption(null);
	};

	const handleSelectOption = (value: string) => {
		setSelectedOption(value);
	};

	const handleNext = () => {
		if (selectedOption) {
			setAnswers({ ...answers, [currentQuestion]: selectedOption });

			if (currentQuestion < totalQuestions - 1) {
				setCurrentQuestion(currentQuestion + 1);
				setSelectedOption(null);
			}
		}
	};

	const handleBack = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
			setSelectedOption(answers[currentQuestion - 1] || null);
		}
	};

	const handleCompleteSurvey = () => {
		if (selectedOption) {
			setAnswers({ ...answers, [currentQuestion]: selectedOption });
			setCurrentView("results");
		}
	};

	const calculateScore = (): number => {
		const positiveAnswers = Object.values(answers).filter(
			(answer: string) => answer === "yes" || answer === "very"
		).length;
		return Math.round((positiveAnswers / totalQuestions) * 100);
	};

	// Survey Page
	if (currentView === "survey") {
		const question = surveyQuestions[currentQuestion];
		const isLastQuestion = currentQuestion === totalQuestions - 1;

		return (
			<div className="flex items-center justify-center p-6">
				<div className="w-full">
					<div className="text-center mb-8 w-full flex flex-col items-center">
						<p className="text-sm text-primary font-semibold mb-2">READINESS CHECK</p>
						<h1 className="md:text-3xl text-2xl font-bold mb-6">AfCFTA Readiness Survey</h1>

						<div className="max-w-4xl w-full">
							<div className="flex items-center justify-between text-sm mb-2">
								<span className="text-gray-600">
									Question {currentQuestion + 1} of {totalQuestions}
								</span>
								<span className="text-primary font-semibold">{Math.round(progress)}%</span>
							</div>

							<div className="w-full bg-stone-200 rounded-full h-2">
								<div
									className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
									style={{ width: `${progress}%` }}
								/>
							</div>
						</div>
					</div>

					<div className="text-center mb-8">
						<div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-6">
							<FaRegQuestionCircle size={35} />
						</div>

						<Slide>
							<h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">{question.question}</h2>
						</Slide>
					</div>

					<div className="space-y-4 mb-8 max-w-2xl mx-auto">
						{question.options.map((option: SurveyOption, index) => (
							<Slide key={option.value} towards={index % 2 === 0 ? "left" : "right"}>
								<button
									onClick={() => handleSelectOption(option.value)}
									className={`w-full px-5 py-7 rounded-xl border-2 text-left font-medium transition-all ${
										selectedOption === option.value
											? "border-primary bg-primary text-white"
											: "border-stone-300 bg-white text-gray-900 hover:border-stone-400"
									}`}
								>
									<div className="flex items-center justify-between">
										<span className="text-lg">{option.label}</span>
										<div
											className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
												selectedOption === option.value ? "border-white bg-white" : "border-stone-400"
											}`}
										>
											{selectedOption === option.value && <div className="w-3 h-3 rounded-full bg-primary" />}
										</div>
									</div>
								</button>
							</Slide>
						))}
					</div>

					<div className="flex gap-4 max-w-2xl mx-auto">
						{currentQuestion > 0 && (
							<Button variant="secondary" onClick={handleBack} className="flex-1">
								Back
							</Button>
						)}
						<button
							onClick={isLastQuestion ? handleCompleteSurvey : handleNext}
							disabled={!selectedOption}
							className={`flex-1 font-semibold px-6 py-3 rounded-xl transition-colors ${
								selectedOption
									? "bg-primary hover:bg-primary text-white"
									: "bg-gray-500 text-gray-500 cursor-not-allowed"
							}`}
						>
							{isLastQuestion ? "Complete Survey" : "Next"}
						</button>
					</div>
				</div>
			</div>
		);
	}

	// Results Page
	if (currentView === "results") {
		const score = calculateScore();
		const requirementsMet = Math.round((score / 100) * totalQuestions);
		const isPerfectScore = score === 100;

		return (
			<>
				<Confetti width={windowWidth} height={windowHeight} recycle={false} numberOfPieces={isPerfectScore ? 500 : 0} />

				<Slide className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
					<div className="max-w-2xl w-full">
						<div className="bg-white rounded-3xl md:p-12 p-4 text-center shadow-lg">
							<div
								className={`md:w-20 md:h-20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 ${
									isPerfectScore ? "bg-secondary" : "bg-accent"
								}`}
							>
								<FaCheck className="text-white md:text-5xl text-2xl" />
							</div>

							<h1 className="text-4xl font-bold text-gray-900 mb-2">
								{isPerfectScore ? "Congratulations! 🎉" : "Assessment Complete!"}
							</h1>
							<p className={`text-2xl font-semibold mb-8 ${isPerfectScore ? "text-secondary" : "text-accent"}`}>
								{isPerfectScore ? "You are AfCFTA-Ready" : "Almost There!"}
							</p>

							<div className="bg-green-50 rounded-2xl py-6 px-8 inline-block mb-8">
								<div className="text-5xl font-bold text-secondary mb-2">{score}%</div>
								<div className="text-gray-700">
									<span className="font-semibold">Perfect Score</span>
									<br />
									{requirementsMet}/{totalQuestions} Requirements Met
								</div>
							</div>

							<p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
								{isPerfectScore
									? "Your business meets all requirements to register on the AfCFTA Digital Trade Portal. You're ready to unlock continental trade opportunities!"
									: `You've met ${requirementsMet} out of ${totalQuestions} requirements. Complete the remaining requirements to become AfCFTA-ready.`}
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								{isPerfectScore ? (
									<>
										<button
											className="bg-primary hover:bg-primary text-white font-semibold px-8 py-3 rounded-xl transition-colors"
											onClick={() => navigate("/register?surveyCompleted=true")}
										>
											Proceed to Registration
										</button>
										<button
											onClick={() => setCurrentView("survey")}
											className="bg-white border-2 border-stone-300 text-gray-700 font-semibold px-8 py-3 rounded-xl inline-flex items-center justify-center gap-2"
										>
											<FaHome size={20} />
											Back to Home
										</button>
									</>
								) : (
									<button
										onClick={handleStartSurvey}
										className="bg-white border-2 border-stone-300 font-semibold px-8 py-3 rounded-xl"
									>
										Retake Survey
									</button>
								)}
							</div>
						</div>
					</div>
				</Slide>
			</>
		);
	}

	return null;
};

export default Survey;
