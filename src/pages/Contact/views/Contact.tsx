import { contactPageTitle } from '../constants';
import useAnimation from '../../../common/utils/customHooks/useAnimation';
import ContactCard from '../../../common/components/ContactCard';

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
			<section className="flex justify-around mobile:flex mobile:flex-col mobile:items-center">
				<ContactCard />
				<ContactCard />
				<ContactCard />
			</section>
		</div>
	);
};
export default Contact;
