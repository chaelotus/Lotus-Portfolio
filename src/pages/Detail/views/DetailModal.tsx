import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store/Store';
import CloseButton from '../../../common/components/CloseButton';

const DetailModal = () => {
	const isOpen = useSelector((state: RootState) => state.ModalReducer.isOpen);
	if (!isOpen) {
		return null;
	}
	return (
		isOpen &&
		createPortal(
			<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-backgroundGray z-999">
				<div className="bg-backgroundGray p-[20px] w-[80%] z-1000 h-full relative">
					<div className="fixed flex right-20">
						<CloseButton />
					</div>
				</div>
			</div>,

			document.body,
		)
	);
};
export default DetailModal;
