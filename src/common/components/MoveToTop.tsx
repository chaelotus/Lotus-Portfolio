import { BsArrowUpCircleFill } from 'react-icons/bs';
const MoveToTop = () => {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div className="text-6xl text-pointOrange fixed bottom-10 right-10 cursor-pointer">
			<BsArrowUpCircleFill className="hover:scale-105" onClick={handleClick} />
		</div>
	);
};
export default MoveToTop;
