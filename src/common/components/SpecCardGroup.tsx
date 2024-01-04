import SpecCard from './SpecCard';
import { AboutSecondPageDetailType } from '../../pages/About/type';

interface SpecCardGroupProps {
	title: string;
	svgFile: string;
	sectionType: keyof AboutSecondPageDetailType;
	dataObject: AboutSecondPageDetailType[keyof AboutSecondPageDetailType];
}
const SpecCardGroup = ({
	title,
	svgFile,
	sectionType,
	dataObject,
}: SpecCardGroupProps) => {
	return (
		<>
			<h1 className="text-3xl font-NanumSquareNeoExtraBold pt-[3rem] pb-[2rem]">
				{title}
			</h1>
			<SpecCard
				svgFile={svgFile}
				sectionType={sectionType}
				dataObject={dataObject}
			/>
		</>
	);
};
export default SpecCardGroup;
