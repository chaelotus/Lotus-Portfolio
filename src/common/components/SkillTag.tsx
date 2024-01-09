const SkillTag = ({ children }: { children: string }) => {
	return (
		<div className="flex justify-center items-center bg-white text-md text-pointOrange rounded-xl px-4 py-1 mr-2 mb-2">
			{children}
		</div>
	);
};
export default SkillTag;
