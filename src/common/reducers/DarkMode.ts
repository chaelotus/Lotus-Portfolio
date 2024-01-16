// action type
export const DARK_MODE = 'DARK_MODE/DARK';
export const LIGHT_MODE = 'DARK_MODE/LIGHT';

// 액션 생성 함수
export const darkMode = () => ({ type: DARK_MODE });
export const lightMode = () => ({ type: LIGHT_MODE });

type DarkModeState = { isDark: boolean };
// 초기 상태
export const initialState: DarkModeState = {
	isDark:
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches),
};

type DarkModeAction =
	| ReturnType<typeof darkMode>
	| ReturnType<typeof lightMode>;

// 리듀서
export const DarkModeReducer = (
	state: DarkModeState = initialState,
	action: DarkModeAction,
) => {
	switch (action.type) {
		case DARK_MODE:
			localStorage.theme = 'dark';
			return { isDark: false };
		case LIGHT_MODE:
			localStorage.theme = 'light';
			return { isDark: true };
		default:
			return state;
	}
};
