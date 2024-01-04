import {
	AboutFirstPageIntroType,
	AboutFirstPageIntro2Type,
	AboutSecondPageDetailType,
} from './type';

export const AboutTitle = 'ABOUT ME';
export const AboutFirstPageIntro: AboutFirstPageIntroType = {
	text: ['아래의 문장들로 저를 설명할 수 있어요.', '저는'],
};
export const AboutFirstPageIntro2: AboutFirstPageIntro2Type[] = [
	{
		id: 1,
		text: 'ReactQuery, Styled-Components 같은 신기술을 공부하고 적용합니다.',
	},
	{
		id: 2,
		text: 'React Query로 캐싱에 대한 이해를 바탕으로 백엔드 call 수를 줄이려고 노력합니다.',
	},
	{
		id: 3,
		text: 'Redux를 활용한 상태관리로 re-rendering 방지를 지향하는 설계를 합니다.',
	},
	{
		id: 4,
		text: '프로젝트 진행시 커뮤니케이션을 위한 문서 작성 후 최상의 Quality를 이끌어냅니다.',
	},
	{
		id: 5,
		text: '정보처리기사 자격증을 보유하고 있습니다.',
	},
];
export const AboutSubTitle1 = 'EDUCATION';
export const AboutSubTitle2 = 'EXPERIENCE';
export const AboutSubTitle3 = 'CERTIFICATE';
export const AboutSubTtile4 = 'STUDIES';

export const AboutSecondPageDetail: AboutSecondPageDetailType = {
	education: {
		agency: '동아대학교',
		date: '2017.03 - 2022.02',
		subtitle: '전기·전자·컴퓨터공학부 컴퓨터공학과 졸업',
		detail: [
			'공학교육인증제 이수',
			'C프로그래밍, JAVA, 자료 구조, 데이터베이스, 운영체제 등 과목 수강',
		],
	},
	experience: {
		agency: '코드스테이츠',
		date: '2023.02 - 2023.08',
		subtitle: '프론트엔드 개발자 과정 수료',
		detail: [
			'JavaScript, React 기본 문법, 네트워크, Node.js와 같은 전반적인 지식 습득',
			'20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험',
			'협업 프로젝트 2회 진행 - 프로젝트 진행 통해 Git/Github 다루는 능력 향상',
		],
	},
	certificate: {
		agency: '정보처리기사',
		date: '2023.06',
		subtitle: null,
		detail: ['한국산업인력공단'],
	},
};
export const StudyDetail = [
	'각 스터디 카드',
	'를 클릭하면 해당 스터디의 레포지토리가 새창으로 띄워집니다!',
];
export const AboutThirdPageDetail = {
	algorithm: {
		title: 'JavaScript 알고리즘',
		date: '2023.04 - 현재',
		detail: [
			'JavaScript 언어로 주로 알고리즘 문제를 주어진 시간 안에 해결하고, 문제에 대한 내용을 정리하여 기록합니다.',
			'커밋으로 ‘문제 해결, 다시 풀기’를 구분하여 풀지 못한 문제는 다시 풀어보는 시간을 가집니다.',
		],
	},
	deepdive: {
		title: '자바스크립트 딥다이브 스터디',
		date: '2023.02 - 2023.05 ',
		detail: [
			'자바스크립트 딥다이브 책을 통해 각자 공부한 것을 기록하고 발표합니다.',
			'매주 화요일, 목요일에 진행하고 해당 기간 전까지 정리한 내용을 Pull Request 합니다.',
		],
	},
	interview: {
		title: '프론트엔드 기술 면접 스터디',
		date: '2023.09 - 현재 ',
		detail: [
			'프론트엔드 개발자가 알아야 할 전반적인 기술 면접에 대해 각자 정리하고 발표합니다.',
			'CS 지식, React, JavaScript, Network 등의 카테고리로 나누어 기록합니다.',
		],
	},
};
