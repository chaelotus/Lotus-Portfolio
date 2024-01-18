import Category from './Category';
import SkillTag from './SkillTag';
import { ProjectPageInfoType } from '../type';
import ProjectCard from './ProjectCard';

type ProjectSectionProps<T extends keyof ProjectPageInfoType> = {
	dataObject: ProjectPageInfoType[T];
};
const ProjectSection = <T extends keyof ProjectPageInfoType>({
	dataObject,
}: ProjectSectionProps<T>) => {
	const data = extractSectionData(dataObject);
	return (
		<div className="flex justify-between w-[1100px] h-[630px] md:flex-col-reverse">
			<div className="flex flex-col w-[40%] md:w-[60%]">
				<div className="md:flex md:items-center md:mt-2">
					<div className="flex mb-5 md:mb-2">
						<Category children={data.team} />
					</div>
					<h1 className="text-3xl font-NanumSquareNeoBold mb-2 md:text-2xl md:mx-3">
						{data.title}
					</h1>
					<span className="text-gray font-OAGothicExtraMedium text-xs mb-3">
						{data.date}
					</span>
				</div>
				<h2 className="text-xl mb-3 md:text-lg">{data.subTitle}</h2>
				<div className="flex flex-wrap mb-4">
					{data.skill.map((skill) => {
						return <SkillTag key={skill} children={skill} />;
					})}
				</div>
				<div>
					{data.detail.map((detail) => (
						<div
							key={detail}
							className="text-lg md:text-sm text-pointGray dark:text-[#dbdbd6]"
						>
							{detail}
						</div>
					))}
				</div>
			</div>
			<div className="w-[60%]">
				<ProjectCard svgFile={data.svg} projectTitle={data.title} />
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
