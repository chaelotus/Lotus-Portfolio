import { PiCaretDownThin } from 'react-icons/pi';
import { LernMoreText, LotusPageMainText } from '../constants';

const Lotus = () => {
	return (
		<article className="flex-col h-screen" id="Lotus">
			<article className="flex justify-between items-center pt-[110px] h-[43.125rem]">
				<section>
					<section className="text-6xl font-PretendardMedium mb-2">
						{LotusPageMainText.text[0]}
					</section>
					<section className="text-3xl font-koreaMachineLight">
						{LotusPageMainText.text[1]}
					</section>
					<section className="text-3xl font-koreaMachineLight">
						<span>{LotusPageMainText.text[2]}</span>
						<span className="text-pointOrange font-bold">
							{LotusPageMainText.text[3]}
						</span>
						<span>{LotusPageMainText.text[4]}</span>
					</section>
				</section>
				<section>이미지</section>
			</article>
			<article className="flex-col text-xl pt-16 text-gray">
				<section className="text-center font-koreaMachineLight font-bold">
					{LernMoreText}
				</section>
				<section className="flex justify-center h-[20px]">
					<PiCaretDownThin className="text-4xl" />
				</section>
			</article>
		</article>
	);
};
export default Lotus;
