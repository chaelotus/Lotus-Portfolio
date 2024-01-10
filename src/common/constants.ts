import { ProjectPageInfoType } from './type';
import project_pp from '../assets/project_pp.svg';
import project_gw from '../assets/project_gw.svg';

export const ProjectPageInfo: ProjectPageInfoType = {
	playpack: {
		svg: project_pp,
		team: 'Team',
		title: 'PLAYPACK',
		date: '2023.06.28 - 2023.07.24  /  6명 (백엔드3명, 프론트엔드 3명)',
		subTitle: '기술스택',
		skill: [
			'React',
			'TypeScript',
			'React-Router-Dom',
			'React-Query',
			'Styled-Components',
			'Redux-toolkit',
			'Jest',
		],
		detail: [
			'“여행 갔는데 깜박하고 집에 두고 온 물품”',
			'“언젠가는 사용할 것 같은데 지금 당장 안 쓰는 물품”',
			'"사기전에 사용하고 구매하고 싶은 물품"',
			'단기간 사용하는 여행 용품을 빌리고 빌려주는 것으로',
			'나에게 지겨운 물건이 누군가에겐 새로울 수 있다는 취지로',
			'만든 프로젝트입니다.',
		],
	},
	lotusPortfolio: {
		svg: project_pp,
		team: 'Solo',
		title: 'LOTUS PORTFOLIO',
		date: '2023.12.15 - 현재  /  1명 (프론트엔드 1명)',
		subTitle: '기술스택',
		skill: [
			'React',
			'TypeScript',
			'React-Router-Dom',
			'TailWind',
			'Redux',
			'Famer-motion',
		],
		detail: [
			'새로운 언어와 라이브러리를 적용해보고 싶어 만든 포트폴리오 웹사이트입니다.',
			'반응형 웹사이트로 제작하였으며, 반전모드도 지원합니다.',
		],
	},
	graduationWork: {
		svg: project_gw,
		team: 'Team',
		title: 'AI 재활용 분류 시스템',
		date: '2021.09 - 2021.12  /  3명',
		subTitle: '기술스택',
		skill: ['YOLO', 'CRATEML', 'firebase'],
		detail: [
			'코로나 시대로 비대면 수요가 급증함에 따라서 일회용품 사용량이 증가하였습니다.',
			'보상 시스템을 이용하여 사용자의 흥미를 유발시킬 뿐만 아니라 올바른 분리배출을 유도하여 환경문제 해결을 위한 지원순환 활동이 목표로 개발한 프로젝트입니다.',
		],
	},
};
export const CloseBtn = 'CLOSE';
