// action type
export const OPEN = 'MODAL/OPEN';
export const CLOSE = 'MODAL/CLOSE';

// 액션 생성 함수
export const openModal = () => ({ type: OPEN });
export const closeModal = () => ({ type: CLOSE });

type ModalState = { isOpen: boolean };
// 초기 상태
export const initialState: ModalState = { isOpen: false };

type IsOpenAction =
	| ReturnType<typeof openModal>
	| ReturnType<typeof closeModal>;
// 리듀서
export const ModalReducer = (
	state: ModalState = initialState,
	action: IsOpenAction,
) => {
	switch (action.type) {
		case OPEN:
			return { isOpen: true };
		case CLOSE:
			return { isOpen: false };
		default:
			return state;
	}
};
