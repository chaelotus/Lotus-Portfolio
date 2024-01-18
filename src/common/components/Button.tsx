const Button = ({ children }: { children: string }) => {
	return (
		<button className="bg-white rounded-md px-5 py-2 flex justify-center items-center text-md mr-10 shadow-2xl font-PretendardSemiBold md:text-sm">
			{children}
		</button>
	);
};
export default Button;
