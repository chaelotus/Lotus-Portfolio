import { AboutFirstPageIntroType, AboutFirstPageIntro2Type } from './type';

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

export const AboutSecondPageDetail = {
	education: {
		university: '동아대학교',
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
		National: '정보처리기사',
		date: '2023.06',
		detail: ['한국산업인력공단'],
	},
};
