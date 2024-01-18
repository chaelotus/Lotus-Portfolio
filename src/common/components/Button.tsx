const Button = ({
	children,
	setIsSmallMenuClick,
}: {
	children: string;
	setIsSmallMenuClick?:
		| React.Dispatch<React.SetStateAction<boolean>>
		| undefined;
}) => {
	const handleNavBtnClick = () => {
		if (setIsSmallMenuClick) {
			setIsSmallMenuClick(false);
		}
	};
	return (
		<button
			className="bg-white rounded-md px-5 py-2 flex justify-center items-center text-md mr-10 shadow-2xl font-PretendardSemiBold md:text-sm sm:bg-background sm:shadow-none sm:text-lg"
			onClick={handleNavBtnClick}
		>
			{children}
		</button>
	);
};
export default Button;
