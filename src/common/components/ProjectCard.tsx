import ClickButton from './ClickButton';
const ProjectCard = ({
	svgFile,
	projectTitle,
}: {
	svgFile: string;
	projectTitle: string;
}) => {
	return (
		<div className="flex flex-col w-full h-[455px] bg-white rounded-xl cursor-pointer ml-6 group">
			<div className=" h-[85%] rounded-t-xl overflow-hidden group-hover:scale-95 group-hover:rounded-xl transition-transform">
				<img className="w-full" src={svgFile} />
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
