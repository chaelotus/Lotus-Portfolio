import { useDispatch } from 'react-redux';
import ClickButton from './ClickButton';
import { openModal } from '../reducers/IsOpen';

const ProjectCard = ({
	svgFile,
	projectTitle,
}: {
	svgFile: string;
	projectTitle: string;
}) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(openModal());
	};

	return (
		<div
			onClick={handleClick}
			className="flex flex-col w-full md:h-[400px] h-[455px] bg-white rounded-xl cursor-pointer ml-6 group md:ml-1 sm:hidden mobile:hidden"
		>
			<div className=" h-[85%] rounded-t-xl overflow-hidden group-hover:scale-95 group-hover:rounded-xl transition-transform">
				<img className="w-full md:shrink-0" src={svgFile} alt="project-card" />
			</div>

			<div className="h-[15%] flex justify-between items-center bg-white p-5 rounded-b-xl">
				<div className="text-xl md:text-base dark:text-black">
					{projectTitle}
				</div>
				<div onClick={handleClick}>
					<ClickButton />
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
