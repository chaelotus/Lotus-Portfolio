import { contactPageTitle } from '../constants';
import useAnimation from '../../../common/utils/customHooks/useAnimation';
import ContactCard from '../../../common/components/ContactCard';
import { contactCard } from '../constants';

const Contact = () => {
	const [targetRef] = useAnimation(['smooth', 'invisible']);
	return (
		<div
			className="h-[calc(100vh-210px)] dark:text-white"
			id="contact"
			ref={targetRef}
		>
			<h1 className="text-3xl font-NanumSquareNeoExtraBold flex justify-center pb-[5rem] sm:text-2xl mobile:text-xl">
				{contactPageTitle}
			</h1>
			<section className="flex justify-around mobile:flex mobile:flex-col mobile:items-center mobile:w-full">
				<ContactCard contactObj={contactCard.github} />
				<ContactCard contactObj={contactCard.blog} />
				<ContactCard contactObj={contactCard.email} />
			</section>
		</div>
	);
};
export default Contact;
