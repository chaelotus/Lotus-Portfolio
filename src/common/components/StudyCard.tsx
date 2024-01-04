import { AboutThirdPageDetailType } from '../../pages/About/type';
import { PiArrowElbowDownRightThin } from 'react-icons/pi';
type StudyCardProps<T extends keyof AboutThirdPageDetailType> = {
	sectionType: T;
	dataObject: AboutThirdPageDetailType[T];
};

const StudyCard = <T extends keyof AboutThirdPageDetailType>({
	sectionType,
	dataObject,
}: StudyCardProps<T>) => {
	const sectionData = extractSectionData(sectionType, dataObject);

	return (
		<div className="bg-white rounded-xl p-6 font-NanumSquareNeoBold cursor-pointer mb-8">
			<div className="flex text-2xl mb-6">
				<div className="font-bold text-pointOrange mr-5">
					{sectionData.title}
				</div>
				<div className="text-gray border-l-2 border-gray pl-5">
					{sectionData.date}
				</div>
			</div>
			<ul>
				{sectionData.detail.map((text, index) => {
					return (
						<div className="flex items-center">
							<PiArrowElbowDownRightThin />
							<li className="ml-3 text-pointGray" key={index}>
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
	sectionType: T,
	dataObject: AboutThirdPageDetailType[T],
): AboutThirdPageDetailType[T] {
	return dataObject;
}
export default StudyCard;
