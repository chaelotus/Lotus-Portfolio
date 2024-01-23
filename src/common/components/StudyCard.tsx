import { AboutThirdPageDetailType } from '../../pages/About/type';
import { PiArrowElbowDownRightThin } from 'react-icons/pi';
type StudyCardProps<T extends keyof AboutThirdPageDetailType> = {
	url: string;
	dataObject: AboutThirdPageDetailType[T];
};

const StudyCard = <T extends keyof AboutThirdPageDetailType>({
	url,
	dataObject,
}: StudyCardProps<T>) => {
	const sectionData = extractSectionData(dataObject);

	return (
		<div
			className="bg-white rounded-xl p-6 font-NanumSquareNeoBold cursor-pointer mb-8"
			onClick={() => window.open(`${url}`)}
		>
			<div className="flex text-2xl md:text-xl sm:text-lg mobile:text-[11px] mb-6">
				<div className="font-bold text-pointOrange mr-5">
					{sectionData.title}
				</div>
				<div className="text-gray border-l-2 border-gray pl-5 mobile:border-l-0">
					{sectionData.date}
				</div>
			</div>
			<ul>
				{sectionData.detail.map((text, index) => {
					return (
						<div className="flex items-center" key={index}>
							<PiArrowElbowDownRightThin />
							<li className="ml-3 text-pointGray md:text-base sm:text-sm mobile:text-xs">
								{text}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
function extractSectionData<T extends keyof AboutThirdPageDetailType>(
	dataObject: AboutThirdPageDetailType[T],
): AboutThirdPageDetailType[T] {
	return dataObject;
}
export default StudyCard;
