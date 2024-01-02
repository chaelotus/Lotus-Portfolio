import { PiCaretDownThin } from 'react-icons/pi';
import { LernMoreText, LotusPageMainText } from '../constants';

const Lotus = () => {
	return (
		<>
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
						<span className="text-pointOrange">
							{LotusPageMainText.text[3]}
						</span>
						<span>{LotusPageMainText.text[4]}</span>
					</section>
				</section>
				<section>이미지</section>
			</article>
			<article>
				<section>{LernMoreText}</section>
				<section>
					<PiCaretDownThin />
				</section>
			</article>
		</>
	);
};
export default Lotus;
