import { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoImage from '../../../assets/LogoImage.svg';
import light from '../../../assets/light.svg';
import dark from '../../../assets/dark.svg';
import { headerNavList } from '../constants';
import Button from '../../../common/components/Button';
import { RootState } from '../../../common/store/Store';
import { Link } from 'react-scroll';
import useDarkMode, {
	useDarkModeType,
} from '../../../common/utils/customHooks/useDarkMode';
import { SlMenu } from 'react-icons/sl';
import SmallSizeNav from '../../../common/components/SmallSizeNav';

const Header = () => {
	const [isDarkModeClick, setIsDarkModeClick] = useState(false);
	const [isSmallMenuClick, setIsSmallMenuClick] = useState(false);
	const isOpen = useSelector((state: RootState) => state.ModalReducer.isOpen);

	const [isDark, onToggleDarkMode]: useDarkModeType = useDarkMode();

	const handleDarkModeClick = () => {
		setIsDarkModeClick(!isDarkModeClick);

		if (isDark) {
			onToggleDarkMode();
		} else {
			onToggleDarkMode();
		}
	};
	const handleSmallMenuClick = () => {
		setIsSmallMenuClick(!isSmallMenuClick);
	};
	if (!isOpen) {
		return (
			<header className="flex fixed z-10 w-full pt-4 pb-4 pr-8 pl-8">
				<div className="md:hidden lg:hidden w-full flex justify-between items-center text-2xl header">
					<Link to="Lotus" spy={true} smooth={true}>
						<div>
							<img
								className="w-[55px] cursor-pointer"
								src={LogoImage}
								alt="logo"
							/>
						</div>
					</Link>
					<div>
						<SlMenu onClick={handleSmallMenuClick} className="cursor-pointer" />
						<SmallSizeNav
							isSmallMenuClick={isSmallMenuClick}
							setIsSmallMenuClick={setIsSmallMenuClick}
						/>
					</div>
				</div>
				<div className="sm:hidden flex w-full justify-between items-center header">
					<Link to="Lotus" spy={true} smooth={true}>
						<div className="w-20 cursor-pointer">
							<img src={LogoImage} alt="logo" />
						</div>
					</Link>
					<ul className="flex justify-between items-center md:justify-between">
						{headerNavList.map((item) => (
							<Link
								activeClass="active"
								key={item.id}
								to={item.id}
								spy={true}
								smooth={true}
								offset={item.offset}
								duration={500}
							>
								<li key={item.id}>
									<Button children={item.title} />
								</li>
							</Link>
						))}
						<li
							className="w-14 cursor-pointer items-center"
							onClick={handleDarkModeClick}
						>
							{isDark ? (
								<img src={dark} alt="dark" />
							) : (
								<img src={light} alt="light" />
							)}
						</li>
					</ul>
				</div>
			</header>
		);
	}
};
export default Header;
