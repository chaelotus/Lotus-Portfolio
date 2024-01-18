import { copyRight } from '../constants';
const Footer = () => {
	return (
		<footer className="flex justify-center items-center h-[90px] text-gray text-xs mobile:text-[1px]">
			<h2>{copyRight}</h2>
		</footer>
	);
};
export default Footer;
