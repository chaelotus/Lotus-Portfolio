const Category = ({ children }: { children: string }) => {
	return (
		<div className="flex justify-center items-center bg-porintGreen text-white px-5 py-2 rounded-full text-xl md:text-sm md:px-4 md:py-1 mobile:text-xs">
			{children}
		</div>
	);
};
export default Category;
