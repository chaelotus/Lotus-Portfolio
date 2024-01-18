import Category from './Category';
import SkillTag from './SkillTag';
import { ProjectPageInfoType } from '../type';
import ProjectCard from './ProjectCard';
import ClickButton from './ClickButton';
import { useDispatch } from 'react-redux';
import { openModal } from '../reducers/IsOpen';

type ProjectSectionProps<T extends keyof ProjectPageInfoType> = {
	dataObject: ProjectPageInfoType[T];
};
const ProjectSection = <T extends keyof ProjectPageInfoType>({
	dataObject,
}: ProjectSectionProps<T>) => {
	const dispatch = useDispatch();
	const data = extractSectionData(dataObject);
	const handleClick = () => {
		dispatch(openModal());
	};
	return (
		<div className="flex justify-between w-[1100px] h-[630px] md:flex-col-reverse sm:flex-col sm:h-[530px] mobile:flex-col mobile:h-[490px]">
			<div className="flex flex-col w-[40%] md:w-[60%] mobile:w-[360px]">
				<div className="md:flex md:items-center md:mt-2 mobile:mb-2">
					<div className="flex mb-5 md:mb-2">
						<Category children={data.team} />
					</div>
					<h1 className="text-3xl font-NanumSquareNeoBold mb-2 md:text-2xl md:mx-3 mobile:text-xl">
						{data.title}
					</h1>
					<span className="text-gray font-OAGothicExtraMedium text-xs mb-3 mobile:text-[6px]">
						{data.date}
					</span>
				</div>
				<h2 className="text-xl mb-3 md:text-lg mobile:text-base">
					{data.subTitle}
				</h2>
				<div className="flex flex-wrap mb-4">
					{data.skill.map((skill) => {
						return <SkillTag key={skill} children={skill} />;
					})}
				</div>
				<div>
					{data.detail.map((detail) => (
						<div
							key={detail}
							className="text-lg md:text-sm mobile:text-sm text-pointGray dark:text-[#dbdbd6]"
						>
							{detail}
						</div>
					))}
				</div>
			</div>
			<div className="w-[60%] sm:flex sm:items-center mobile:flex mobile:flex-col-reverse">
				<ProjectCard svgFile={data.svg} projectTitle={data.title} />
				<div
					onClick={handleClick}
					className="lg:hidden md:hidden mobile:flex mobile:mt-2"
				>
					<ClickButton />
				</div>
				<span className="lg:hidden md:hidden sm:ml-4 sm:text-lineGray mobile:text-xs mobile:text-gray">
					클릭 버튼을 누르면 더 자세한 내용을 볼 수 있어요!
				</span>
			</div>
		</div>
	);
};
function extractSectionData<T extends keyof ProjectPageInfoType>(
	dataObject: ProjectPageInfoType[T],
): ProjectPageInfoType[T] {
	return dataObject;
}
export default ProjectSection;
