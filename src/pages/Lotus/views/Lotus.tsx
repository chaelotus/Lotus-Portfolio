import { PiCaretDownThin } from 'react-icons/pi';
import { LernMoreText, LotusPageMainText } from '../constants';

const Lotus = () => {
	return (
		<article
			className="flex-col h-screen dark:text-white lotus-section"
			id="Lotus"
		>
			<article className="flex justify-between items-center pt-[110px] h-[43.125rem]">
				<section className="sm:w-full sm:text-center mobile:w-full mobile:text-center">
					<section className="text-6xl font-PretendardMedium mb-2 sm:text-4xl mobile:text-3xl">
						{LotusPageMainText.text[0]}
					</section>
					<section className="text-3xl font-koreaMachineLight sm:text-xl mobile:text-lg">
						{LotusPageMainText.text[1]}
					</section>
					<section className="text-3xl font-koreaMachineLight sm:text-xl mobile:text-lg">
						<span>{LotusPageMainText.text[2]}</span>
						<span className="text-pointOrange font-bold">
							{LotusPageMainText.text[3]}
						</span>
						<span>{LotusPageMainText.text[4]}</span>
					</section>
				</section>
				<section className="md:hidden sm:hidden mobile:hidden">이미지</section>
			</article>
			<article className="flex-col text-xl pt-16 text-gray sm:text-lg mobile:text-base">
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
