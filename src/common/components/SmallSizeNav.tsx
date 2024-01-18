import { createPortal } from 'react-dom';
import { headerNavList } from '../../pages/Header/constants';
import { Link } from 'react-scroll';
import Button from './Button';

const SmallSizeNav = ({
	isSmallMenuClick,
	setIsSmallMenuClick,
}: {
	isSmallMenuClick: boolean;
	setIsSmallMenuClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		isSmallMenuClick &&
		createPortal(
			<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-background z-999">
				<ul className="z-1000 w-full h-full relative flex justify-center items-center flex-col">
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
							<li key={item.id} className="sm:mb-7">
								<Button
									children={item.title}
									setIsSmallMenuClick={setIsSmallMenuClick}
								/>
							</li>
						</Link>
					))}
				</ul>
			</div>,
			document.body,
		)
	);
};
export default SmallSizeNav;
