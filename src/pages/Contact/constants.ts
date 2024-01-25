import firstImage from '../../assets/contact_1.svg';
import secondImage from '../../assets/contact_2.svg';
import thirdImage from '../../assets/contact_3.svg';
import firstImageDark from '../../assets/contact_1_dark.svg';
import secondImageDark from '../../assets/contact_2_dark.svg';
import thirdImageDark from '../../assets/contact_3_dark.svg';
import { SiGithub } from 'react-icons/si';
import { SiTistory } from 'react-icons/si';
import { SiMinutemailer } from 'react-icons/si';
import { contactCardType } from './type';
export const contactPageTitle = 'CONTACT';
export const contactCard: contactCardType = {
	github: {
		mainImage: firstImage,
		mainImageDark: firstImageDark,
		description:
			'프론트엔드 개발자가 되기 위해 \n 열심히 준비한 github 공간을 구경해보세요.',
		iconImage: SiGithub,
		iconTitle: 'GITHUB',
		url: 'https://github.com/chaelotus',
	},
	blog: {
		mainImage: secondImage,
		mainImageDark: secondImageDark,
		description: '새로운 개념을 공부할 때\n 기록해놓은 블로그를 구경해보세요.',
		iconImage: SiTistory,
		iconTitle: 'BLOG',
		url: 'https://lotusstudy.tistory.com/',
	},
	email: {
		mainImage: thirdImage,
		mainImageDark: thirdImageDark,
		description: '아래의 방법으로 연락할 수 있어요. \n pcy6904@naver.com',
		iconImage: SiMinutemailer,
		iconTitle: 'MAIL',
		url: null,
	},
};
