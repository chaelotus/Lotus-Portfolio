import SkillCard from '../../../common/components/SkillCard';
import { SkillsTitle, SkillsDetail } from '../constants';
const Skills = () => {
	return (
		<div className="h-screen">
			<h1 className="text-3xl font-NanumSquareNeoExtraBold pb-[5rem]">
				{SkillsTitle}
			</h1>
			<div className="grid grid-cols-5 gap-x-12 gap-y-12">
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
