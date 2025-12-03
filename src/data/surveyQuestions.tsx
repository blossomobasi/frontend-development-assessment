import type { SurveyQuestion } from "../types/survey.types";

export const surveyQuestions: SurveyQuestion[] = [
	{
		id: 1,
		question: "Is your business registered with CAC?",
		options: [
			{ value: "yes", label: "Yes, my business is registered" },
			{ value: "no", label: "No, not yet registered" },
		],
	},
	{
		id: 2,
		question: "Do you have a business plan?",
		options: [
			{ value: "yes", label: "Yes, I have a comprehensive business plan" },
			{ value: "no", label: "No, I don't have one yet" },
		],
	},
	{
		id: 3,
		question: "Do you export products or services?",
		options: [
			{ value: "yes", label: "Yes, we currently export" },
			{ value: "no", label: "No, but we plan to" },
			{ value: "not_planning", label: "No, not planning to export" },
		],
	},
	{
		id: 4,
		question: "Are you familiar with international trade regulations?",
		options: [
			{ value: "very", label: "Very familiar" },
			{ value: "somewhat", label: "Somewhat familiar" },
			{ value: "not", label: "Not familiar" },
		],
	},
	{
		id: 5,
		question: "Does your business have quality certifications?",
		options: [
			{ value: "yes", label: "Yes, we have certifications" },
			{ value: "in_progress", label: "In progress" },
			{ value: "no", label: "No certifications" },
		],
	},
	{
		id: 6,
		question: "Do you have a logistics partner for shipping?",
		options: [
			{ value: "yes", label: "Yes, we have established partnerships" },
			{ value: "no", label: "No, we need assistance" },
		],
	},
	{
		id: 7,
		question: "Is your business financially stable?",
		options: [
			{ value: "very", label: "Very stable" },
			{ value: "moderate", label: "Moderately stable" },
			{ value: "struggling", label: "Need improvement" },
		],
	},
	{
		id: 8,
		question: "Do you have experience with cross-border payments?",
		options: [
			{ value: "yes", label: "Yes, experienced" },
			{ value: "no", label: "No experience" },
		],
	},
	{
		id: 9,
		question: "Does your team understand export documentation?",
		options: [
			{ value: "yes", label: "Yes, we're well-versed" },
			{ value: "partial", label: "Partially" },
			{ value: "no", label: "No, we need training" },
		],
	},
	{
		id: 10,
		question: "Are you aware of AfCFTA trade benefits?",
		options: [
			{ value: "very", label: "Very aware" },
			{ value: "somewhat", label: "Somewhat aware" },
			{ value: "not", label: "Not aware" },
		],
	},
	{
		id: 11,
		question: "Do you have market research for target countries?",
		options: [
			{ value: "yes", label: "Yes, comprehensive research" },
			{ value: "basic", label: "Basic research only" },
			{ value: "no", label: "No research yet" },
		],
	},
	{
		id: 12,
		question: "Do you agree to comply with AfCFTA standards and regulations?",
		options: [
			{ value: "yes", label: "Yes, I agree to comply" },
			{ value: "no", label: "No, I cannot commit" },
		],
	},
];
