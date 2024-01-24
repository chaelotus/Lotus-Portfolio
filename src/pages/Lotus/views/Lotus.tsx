import { PiCaretDownThin } from 'react-icons/pi';
import { LernMoreText, LotusPageMainText } from '../constants';
import useTyping from '../../../common/utils/customHooks/useTyping';

const Lotus = () => {
	const sentence = LotusPageMainText.text[1];
	const { word, targetRef } = useTyping(sentence);
	const parts = word.split(/(박채연|\n)/);

	return (
		<div className="flex-col h-screen dark:text-white lotus-section" id="Lotus">
			<article className="flex justify-between items-center pt-[110px] h-[43.125rem]">
				<section className="sm:w-full sm:text-center mobile:w-full mobile:text-center">
					<section className="text-6xl font-PretendardMedium mb-2 sm:text-4xl mobile:text-3xl">
						{LotusPageMainText.text[0]}
					</section>
					<div
						className="text-3xl font-koreaMachineLight sm:text-xl mobile:text-lg"
						ref={targetRef}
					>
						{parts.map((part, index) => {
							if (part === '\n') return <p key={index}>{part}</p>;
							else if (part === '박채연') {
								return (
									<span key={index} className="text-pointOrange font-bold">
										{part}
									</span>
								);
							} else {
								return <span key={index}>{part}</span>;
							}
						})}
					</div>
				</section>
				<section className="md:hidden sm:hidden mobile:hidden">이미지</section>
			</article>
			<article className="flex-col text-xl pt-16 text-gray sm:text-lg mobile:text-base blink">
				<section className="text-center font-koreaMachineLight font-bold">
					{LernMoreText}
				</section>
				<section className="flex justify-center h-[20px]">
					<PiCaretDownThin className="text-4xl" />
				</section>
			</article>
		</div>
	);
};
export default Lotus;
