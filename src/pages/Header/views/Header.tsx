import LogoImage from '../../../assets/LogoImage.svg';
import light from '../../../assets/light.svg';
import Button from '../../../common/components/Button';

const Header = () => {
	return (
		<header className="pt-4 pb-4 pr-8 pl-8">
			<div className="flex justify-between items-center">
				<div className="w-20 cursor-pointer">
					<img src={LogoImage} alt="logo" />
				</div>
				<div className="flex justify-between items-center">
					<Button />
					<Button />
					<Button />
					<div className="w-14 cursor-pointer">
						<img src={light} alt="light" />
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
