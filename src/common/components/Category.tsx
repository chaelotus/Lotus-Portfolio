const Category = ({ children }: { children: string }) => {
	return (
		<div className="flex justify-center items-center bg-porintGreen text-white px-5 py-2 rounded-full text-xl">
			{children}
		</div>
	);
};
export default Category;
