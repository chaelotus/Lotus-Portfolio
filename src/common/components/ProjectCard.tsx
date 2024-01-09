import ClickButton from './ClickButton';
const ProjectCard = ({
	svgFile,
	projectTitle,
}: {
	svgFile: string;
	projectTitle: string;
}) => {
	return (
		<div className="flex flex-col w-full h-[455px] cursor-pointer ml-6">
			<div className="rounded-xl h-[85%]">
				<img className="w-full rounded-t-xl" src={svgFile} />
			</div>

			<div className="h-[15%] flex justify-between items-center bg-white p-5 rounded-b-xl">
				<div className="text-xl">{projectTitle}</div>
				<div>
					<ClickButton />
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
