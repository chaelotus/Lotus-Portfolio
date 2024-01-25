import loading from '../../assets/loading.gif';
const Loading = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-full bg-background">
			<span className="text-darkGray font-NanumSquareNeoBold">
				잠시만 기다려 주세요.
			</span>
			<img src={loading} alt="Loading..." />
		</div>
	);
};
export default Loading;
