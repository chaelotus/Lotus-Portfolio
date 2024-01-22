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
			className="bg-white rounded-md px-5 py-2 flex justify-center items-center mr-10 sm:mr-0 mobile:mr-0 shadow-2xl font-PretendardSemiBold md:text-sm sm:bg-background sm:shadow-none sm:text-lg mobile:bg-background mobile:shadow-none mobile:text-lg hover:scale-105 hover:text-pointOrange hover:ease-in-out hover:duration-300 active:text-none"
			onClick={handleNavBtnClick}
		>
			{children}
		</button>
	);
};
export default Button;
