import { TfiWidgetAlt } from 'react-icons/tfi';
import { AboutSecondPageDetailType } from '../../pages/About/type';

type SpecCardProps<T extends keyof AboutSecondPageDetailType> = {
	svgFile: string;
	dataObject: AboutSecondPageDetailType[T];
};

const SpecCard = <T extends keyof AboutSecondPageDetailType>({
	svgFile,
	dataObject,
}: SpecCardProps<T>) => {
	const sectionData = extractSectionData(dataObject);
	return (
		<div className="flex justify-between items-center bg-white rounded-xl p-5 font-NanumSquareNeoBold dark:text-black">
			<section className="w-[15%] md:shrink-0 sm:shrink-2 sm:mr-2 mobile:shrink-2 mobile:mr-2">
				<img className="w-[95px]" src={svgFile} alt="agency-image" />
			</section>
			<section className="flex-col w-[25%]">
				<div className="font-bold text-xl mb-2 sm:text-base mobile:text-xs">
					{sectionData.agency}
				</div>
				<div className="text-pointGray text-xs mobile:text-[5px] font-bold">
					{sectionData.date}
				</div>
			</section>
			<section className="w-[60%]">
				<h1 className="text-xl md:text-lg sm:text-base mobile:text-xs pb-3 text-pointOrange">
					{sectionData.subtitle}
				</h1>
				<ul className="list-disc text-pointGray">
					{sectionData.detail.map((text: string, index: number) => {
						return (
							<div className="flex items-start sm:mb-2 mobile:mb-2" key={index}>
								<TfiWidgetAlt className="sm:text-sm mobile:text-xs" />
								<li className="pl-2 md:text-sm sm:text-xs mobile:text-[6px]">
									{text}
								</li>
							</div>
						);
					})}
				</ul>
			</section>
		</div>
	);
};
function extractSectionData<T extends keyof AboutSecondPageDetailType>(
	dataObject: AboutSecondPageDetailType[T],
): AboutSecondPageDetailType[T] {
	return dataObject;
}
export default SpecCard;
