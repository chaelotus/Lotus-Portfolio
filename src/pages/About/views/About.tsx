import {
	AboutTitle,
	AboutFirstPageIntro,
	AboutFirstPageIntro2,
} from '../constants';
const About = () => {
	return (
		<div className="h-[300vh] pt-[8.188rem]">
			<h1 className="text-3xl font-NanumSquareNeoExtraBold">{AboutTitle}</h1>
			<div className="pb-20 font-NanumSquareNeoBold">
				{AboutFirstPageIntro.text[0]}
			</div>
			<div className="flex pb-16">
				<div className="mr-3 text-2xl font-NanumSquareNeoBold">
					{AboutFirstPageIntro.text[1]}
				</div>
				<div className="border-b-2 border-dashed border-pointOrange grow"></div>
			</div>
			<div className="text-2xl font-NanumSquareNeoBold">
				{AboutFirstPageIntro2.map((text) => (
					<div className="mb-6" key={text.id}>
						{text.text}
					</div>
				))}
			</div>
		</div>
	);
};
export default About;
