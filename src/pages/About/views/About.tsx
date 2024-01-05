import { useState } from 'react';
import {
	AboutTitle,
	AboutFirstPageIntro,
	AboutFirstPageIntro2,
	AboutSecondPageDetail,
	AboutSubTitle1,
	AboutSubTitle2,
	AboutSubTitle3,
	AboutSubTtile4,
	StudyDetail,
	AboutThirdPageDetail,
} from '../constants';
import donga from '../../../assets/donga.svg';
import codestate from '../../../assets/codestate.svg';
import certificate from '../../../assets/certificate.svg';
import SpecCardGroup from '../../../common/components/SpecCardGroup';
import StudyCard from '../../../common/components/StudyCard';

const About = () => {
	const [hoverText, setHoverText] = useState<null | string>(null);
	return (
		<div className="h-[300vh] pt-[8.188rem]">
			<h1 className="text-3xl font-NanumSquareNeoExtraBold">{AboutTitle}</h1>
			<div className="pb-20 font-NanumSquareNeoBold">
				{AboutFirstPageIntro.text[0]}
			</div>
			<div className="flex pb-16 font-NanumSquareNeoBold">
				<div className="mr-3 text-2xl">{AboutFirstPageIntro.text[1]}</div>
				<div className="border-b-2 border-dashed border-pointOrange grow font-pointGray text-xl text-pointGray">
					{hoverText}
				</div>
			</div>
			<div className="text-2xl font-NanumSquareNeoBold pb-[6.8rem]">
				{AboutFirstPageIntro2.map((text) => (
					<div
						className="mb-6"
						key={text.id}
						onMouseEnter={() => setHoverText(text.text)}
						onMouseLeave={() => setHoverText(null)}
					>
						{text.text}
					</div>
				))}
			</div>
			<div className="pb-[14rem]">
				<SpecCardGroup
					title={AboutSubTitle1}
					svgFile={donga}
					dataObject={AboutSecondPageDetail.education}
				/>
				<SpecCardGroup
					title={AboutSubTitle2}
					svgFile={codestate}
					dataObject={AboutSecondPageDetail.experience}
				/>
				<SpecCardGroup
					title={AboutSubTitle3}
					svgFile={certificate}
					dataObject={AboutSecondPageDetail.certificate}
				/>
			</div>
			<div className="flex items-center text-3xl pb-[5rem]">
				<div className="font-NanumSquareNeoExtraBold mr-5">
					{AboutSubTtile4}
				</div>
				<div className="border-l-2 border-gray pl-5">
					<span className="text-pointOrange">{StudyDetail[0]}</span>
					<span className="text-lineGray">{StudyDetail[1]}</span>
				</div>
			</div>
			<StudyCard
				url="https://github.com/chaelotus/Algorithm"
				dataObject={AboutThirdPageDetail.algorithm}
			/>
			<StudyCard
				url="https://github.com/22yuu/Javascript-Deep-Dive-Study"
				dataObject={AboutThirdPageDetail.deepdive}
			/>
			<StudyCard
				url="https://github.com/chaelotus/frontend-interview-study"
				dataObject={AboutThirdPageDetail.interview}
			/>
		</div>
	);
};
export default About;
