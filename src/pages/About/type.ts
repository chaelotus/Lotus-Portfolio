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
