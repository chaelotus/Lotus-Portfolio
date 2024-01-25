import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { contactCardType } from '../../pages/Contact/type';

type contactCardProps<T extends keyof contactCardType> = {
	contactObj: contactCardType[T];
};

const ContactCard = <T extends keyof contactCardType>({
	contactObj,
}: contactCardProps<T>) => {
	const sectionData = extractSectionData(contactObj);
	const isDark = useSelector(
		(state: RootState) => state.DarkModeReducer.isDark,
	);
	return (
		<div className="flex flex-col justify-center w-[337px] h-[400px] border-solid md:w-[200px] md:h-[350px] sm:w-[170px] sm:h-[330px] mobile:w-[350px] mobile:h-[130px] mobile:mb-14 mobile:flex-row mobile:justify-center">
			<div className="h-[60%] mobile:w-[40%] mobile:h-full">
				{isDark ? (
					<img
						className="w-full h-full"
						src={sectionData.mainImageDark}
						alt=""
					/>
				) : (
					<img className="w-full h-full" src={sectionData.mainImage} alt="" />
				)}
			</div>
			<div className="h-[40%] mobile:w-[60%] mobile:h-full flex flex-col justify-center items-center">
				{sectionData.description.split('\n').map((text, index) => {
					return (
						<p
							className="font-NanumSquareNeoBold text-darkGray dark:text-white md:text-xs md:text-center sm:text-[11px] sm:text-center mobile:text-center"
							key={index}
						>
							{text}
						</p>
					);
				})}
				<div
					className="flex items-center mt-10 text-xl cursor-pointer duration-150 transition-all hover:text-pointOrange dark:text-white sm:text-base mobile:text-sm mobile:items-start dark:hover:text-pointOrange"
					onClick={() => {
						if (sectionData.url) window.open(`${sectionData.url}`);
					}}
				>
					<div className="mr-3 text-2xl">
						<sectionData.iconImage />
					</div>
					<span className="font-OAGothicExtraMedium">
						{sectionData.iconTitle}
					</span>
				</div>
			</div>
		</div>
	);
};
function extractSectionData<T extends keyof contactCardType>(
	contactObj: contactCardType[T],
): contactCardType[T] {
	return contactObj;
}
export default ContactCard;
