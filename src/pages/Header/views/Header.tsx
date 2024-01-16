import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogoImage from '../../../assets/LogoImage.svg';
import light from '../../../assets/light.svg';
import dark from '../../../assets/dark.svg';
import { headerNavList } from '../constants';
import Button from '../../../common/components/Button';
import { RootState } from '../../../common/store/Store';
import { Link } from 'react-scroll';
import { darkMode, lightMode } from '../../../common/reducers/DarkMode';

const Header = () => {
	const [LightImageIsClick, setLightImageIsClick] = useState(false);
	const isOpen = useSelector((state: RootState) => state.ModalReducer.isOpen);
	const isDark = useSelector(
		(state: RootState) => state.DarkModeReducer.isDark,
	);
	const dispatch = useDispatch();

	const handleLightImage = () => {
		setLightImageIsClick(!LightImageIsClick);
		if (LightImageIsClick) {
			dispatch(darkMode());
		} else {
			dispatch(lightMode());
		}
	};

	if (!isOpen) {
		return (
			<header className="pt-4 pb-4 pr-8 pl-8 fixed w-full flex justify-between items-center z-10 header">
				<Link to="Lotus" spy={true} smooth={true}>
					<div className="w-20 cursor-pointer">
						<img src={LogoImage} alt="logo" />
					</div>
				</Link>
				<ul className="flex justify-between items-center">
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
						onClick={handleLightImage}
						className="w-14 cursor-pointer items-center"
					>
						{isDark ? (
							<img src={dark} alt="dark" />
						) : (
							<img src={light} alt="light" />
						)}
					</li>
				</ul>
			</header>
		);
	}
};
export default Header;
