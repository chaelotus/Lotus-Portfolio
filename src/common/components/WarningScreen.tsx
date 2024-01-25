import { TbAlertCircleFilled } from 'react-icons/tb';
const WarningScreen = () => {
	return (
		<div className="bg-background w-full h-full absolute flex justify-center items-center">
			<div className="flex flex-col items-center">
				<TbAlertCircleFilled className="text-4xl mb-3 text-pointOrange" />
				<span className="font-NanumSquareNeoBold text-pointGray font-bold">
					화면을 390px 이상으로 넓혀주세요.
				</span>
			</div>
		</div>
	);
};
export default WarningScreen;
