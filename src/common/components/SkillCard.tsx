type SkillCardProps = {
	svg: string;
	title: string;
};
const SkillCard = ({ svg, title }: SkillCardProps) => {
	return (
		<div className="w-[180px] h-[213px] dark:text-black mobile:w-[155px] mobile:h-[188px]">
			<img
				className="h-[158px] rounded-tr-xl rounded-tl-xl mobile:h-[135px]"
				src={svg}
			/>
			<div className="bg-white h-[55px] rounded-br-xl rounded-bl-xl p-3 text-sm font-koreaMachineLight flex justify-start items-center">
				{title}
			</div>
		</div>
	);
};
export default SkillCard;
