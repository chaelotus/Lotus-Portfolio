import { useSelector, useDispatch } from 'react-redux';
import ClickButton from './ClickButton';
import { RootState } from '../store/Store';
import { openModal } from '../reducers/IsOpen';
import { useEffect } from 'react';
const ProjectCard = ({
	svgFile,
	projectTitle,
}: {
	svgFile: string;
	projectTitle: string;
}) => {
	const isOpen = useSelector((state: RootState) => state.ModalReducer.isOpen);
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(openModal());
	};
	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);
	return (
		<div
			onClick={handleClick}
			className="flex flex-col w-full h-[455px] bg-white rounded-xl cursor-pointer ml-6 group"
		>
			<div className=" h-[85%] rounded-t-xl overflow-hidden group-hover:scale-95 group-hover:rounded-xl transition-transform">
				<img className="w-full" src={svgFile} />
			</div>

			<div className="h-[15%] flex justify-between items-center bg-white p-5 rounded-b-xl">
				<div className="text-xl">{projectTitle}</div>
				<div onClick={handleClick}>
					<ClickButton />
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
