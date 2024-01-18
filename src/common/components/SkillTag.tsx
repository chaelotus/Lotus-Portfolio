const SkillTag = ({ children }: { children: string }) => {
	return (
		<div className="flex justify-center items-center bg-white text-base md:text-xs md:px-3 mobile:text-xs mobile:px-2 text-pointOrange rounded-xl px-4 py-1 mr-2 mb-2 dark:text-pointOrange">
			{children}
		</div>
	);
};
export default SkillTag;
