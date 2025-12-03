export interface SurveyOption {
	value: string;
	label: string;
}

export interface SurveyQuestion {
	id: number;
	question: string;
	options: SurveyOption[];
}
