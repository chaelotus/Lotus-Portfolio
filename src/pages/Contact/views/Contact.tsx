import { contactPageTitle } from '../constants';
import ContactCard from '../../../common/components/ContactCard';

const Contact = () => {
	return (
		<div className="h-[calc(100vh-210px)]" id="contact">
			<h1 className="text-3xl font-NanumSquareNeoExtraBold flex justify-center pb-[100px]">
				{contactPageTitle}
			</h1>
			<section className="flex justify-around">
				<ContactCard />
				<ContactCard />
				<ContactCard />
			</section>
		</div>
	);
};
export default Contact;