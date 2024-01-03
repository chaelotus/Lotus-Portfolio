import { useState } from 'react';
import {
	AboutTitle,
	AboutFirstPageIntro,
	AboutFirstPageIntro2,
} from '../constants';
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
			<div className="text-2xl font-NanumSquareNeoBold">
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
		</div>
	);
};
export default About;
