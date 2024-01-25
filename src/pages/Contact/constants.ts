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
	},
	blog: {
		mainImage: secondImage,
		mainImageDark: secondImageDark,
		description:
			'몰랐던 부분이나 새로운 개념을 공부할 때 \n 기록해놓은 블로그를 구경해보세요.',
		iconImage: SiTistory,
		iconTitle: 'BLOG',
	},
	email: {
		mainImage: thirdImage,
		mainImageDark: thirdImageDark,
		description: '아래의 방법으로 연락할 수 있어요. \n 언제든지 환영합니다.',
		iconImage: SiMinutemailer,
		iconTitle: 'MAIL',
	},
};
