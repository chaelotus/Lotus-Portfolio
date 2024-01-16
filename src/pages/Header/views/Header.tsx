import { useSelector } from 'react-redux';
import LogoImage from '../../../assets/LogoImage.svg';
import light from '../../../assets/light.svg';
import { headerNavList } from '../constants';
import Button from '../../../common/components/Button';
import { RootState } from '../../../common/store/Store';
import { Link } from 'react-scroll';

const Header = () => {
	const isOpen = useSelector((state: RootState) => state.ModalReducer.isOpen);

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
						<Link activeClass="active" to={item.id} spy={true} smooth={true}>
							<li key={item.id}>
								<Button children={item.title} />
							</li>
						</Link>
					))}
					<li className="w-14 cursor-pointer">
						<img src={light} alt="light" />
					</li>
				</ul>
			</header>
		);
	}
};
export default Header;
