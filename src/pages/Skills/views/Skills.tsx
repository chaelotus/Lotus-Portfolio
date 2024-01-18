import SkillCard from '../../../common/components/SkillCard';
import { SkillsTitle, SkillsDetail } from '../constants';
const Skills = () => {
	return (
		<div className="h-[160vh] py-[20rem] dark:text-white md:py-[10rem]">
			<h1
				className="text-3xl font-NanumSquareNeoExtraBold pb-[5rem] sm:text-2xl mobile:text-xl mobile:pb-[2rem]"
				id="skills"
			>
				{SkillsTitle}
			</h1>
			<div className="grid grid-cols-5 gap-x-12 gap-y-12 md:grid-cols-3 sm:grid-cols-3 mobile:grid-cols-2">
				{SkillsDetail.map((data) => {
					return (
						<SkillCard svg={data.svg} title={data.title} key={data.title} />
					);
				})}
			</div>
		</div>
	);
};
export default Skills;
