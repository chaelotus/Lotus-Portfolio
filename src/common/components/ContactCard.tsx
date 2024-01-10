const ContactCard = () => {
	return (
		<div className="flex flex-col justify-center w-[337px] h-[400px] border-solid border-2 border-indigo-600">
			{/* <img /> */}
			<div className="bg-white h-[60%]">이미지</div>
			<div className="h-[40%]">
				<span>텍스트</span>
				<div className="flex">
					{/* <img /> */}
					<div className="mr-2">아이콘</div>
					<span>텍스트</span>
				</div>
			</div>
		</div>
	);
};
export default ContactCard;
