export type AboutFirstPageIntroType = {
	text: string[];
};
export type AboutFirstPageIntro2Type = {
	id: number;
	text: string;
};
export type AboutSecondPageDetailType = {
	education: {
		agency: string;
		date: string;
		subtitle: string;
		detail: string[];
	};
	experience: {
		agency: string;
		date: string;
		subtitle: string;
		detail: string[];
	};
	certificate: {
		agency: string;
		date: string;
		subtitle: null;
		detail: string[];
	};
};
export type AboutThirdPageDetailType = {
	algorithm: {
		title: string;
		date: string;
		detail: string[];
	};
	deepdive: {
		title: string;
		date: string;
		detail: string[];
	};
	interview: {
		title: string;
		date: string;
		detail: string[];
	};
};
