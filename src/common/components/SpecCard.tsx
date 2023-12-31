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
		<div className="flex justify-between items-center bg-white rounded-xl p-5 font-NanumSquareNeoBold">
			<section className="w-[15%]">
				<img className="w-[95px]" src={svgFile} />
			</section>
			<section className="flex-col w-[25%]">
				<div className="font-bold text-xl mb-2">{sectionData.agency}</div>
				<div className="text-pointGray text-xs font-bold">
					{sectionData.date}
				</div>
			</section>
			<section className="w-[60%]">
				<h1 className="text-xl pb-3 text-pointOrange">
					{sectionData.subtitle}
				</h1>
				<ul className="list-disc text-pointGray">
					{sectionData.detail.map((text: string, index: number) => {
						return (
							<div className="flex items-center">
								<TfiWidgetAlt />
								<li className="pl-2" key={index}>
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
