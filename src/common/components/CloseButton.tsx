import { RiCloseFill } from 'react-icons/ri';
import { CloseBtn } from '../constants';
import { useDispatch } from 'react-redux';
import { closeModal } from '../reducers/IsOpen';
const CloseButton = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(closeModal());
	};
	return (
		<div
			onClick={handleClick}
			className="flex items-center px-3 py-2 bg-white rounded-lg cursor-pointer shadow-2xl dark:text-black"
		>
			<div className="text-2xl mr-1">
				<RiCloseFill />
			</div>
			<span className="text-lg font-PretendardSemiBold">{CloseBtn}</span>
		</div>
	);
};
export default CloseButton;
