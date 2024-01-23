import SkillCard from '../../../common/components/SkillCard';
import { SkillsTitle, SkillsDetail } from '../constants';
const Skills = () => {
	return (
		<div
			className="h-[80vh] md:h-screen sm:h-screen mobile:h-[150vh] mt-[10rem] mb-[5rem] dark:text-white"
			id="skills"
		>
			<h1 className="text-3xl font-NanumSquareNeoExtraBold pb-[5rem] sm:text-2xl mobile:text-xl mobile:pb-[2rem]">
				{SkillsTitle}
			</h1>
			<div className="grid grid-cols-5 gap-x-12 gap-y-12 md:grid-cols-3 sm:grid-cols-3 mobile:grid-cols-2">
				{SkillsDetail.map((data) => {
					return (
						<div key={data.title} className="flex justify-center items-center">
							<SkillCard svg={data.svg} title={data.title} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Skills;
