import SpecCard from './SpecCard';
import { AboutSecondPageDetailType } from '../../pages/About/type';

interface SpecCardGroupProps {
	title: string;
	svgFile: string;
	dataObject: AboutSecondPageDetailType[keyof AboutSecondPageDetailType];
}
const SpecCardGroup = ({ title, svgFile, dataObject }: SpecCardGroupProps) => {
	return (
		<>
			<h1 className="text-3xl font-NanumSquareNeoExtraBold pt-[3rem] pb-[2rem]">
				{title}
			</h1>
			<SpecCard svgFile={svgFile} dataObject={dataObject} />
		</>
	);
};
export default SpecCardGroup;
