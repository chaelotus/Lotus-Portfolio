import LogoImage from '../../../assets/LogoImage.svg';
import light from '../../../assets/light.svg';
import { headerNavList } from '../constants';
import Button from '../../../common/components/Button';

const Header = () => {
	return (
		<header className="pt-4 pb-4 pr-8 pl-8 fixed w-full flex justify-between items-center">
			<div className="w-20 cursor-pointer">
				<img src={LogoImage} alt="logo" />
			</div>
			<ul className="flex justify-between items-center">
				{headerNavList.map((item) => (
					<li>
						<Button children={item.title} key={item.id} />
					</li>
				))}
				<li className="w-14 cursor-pointer">
					<img src={light} alt="light" />
				</li>
			</ul>
		</header>
	);
};
export default Header;
