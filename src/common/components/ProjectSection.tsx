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
		<div className="flex justify-between w-[1100px] h-[630px]">
			<div className="flex flex-col w-[40%]">
				<div className="flex mb-5">
					<Category children={data.team} />
				</div>
				<h1 className="text-3xl font-NanumSquareNeoBold mb-2">{data.title}</h1>
				<span className="text-gray font-OAGothicExtraMedium text-xs mb-3">
					{data.date}
				</span>
				<h2 className="text-xl mb-3">{data.subTitle}</h2>
				<div className="flex flex-wrap mb-4">
					{data.skill.map((skill) => {
						return <SkillTag key={skill} children={skill} />;
					})}
				</div>
				<div>
					{data.detail.map((detail) => (
						<div key={detail} className="text-lg text-pointGray">
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
