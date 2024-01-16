import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { useEffect } from 'react';
import { darkMode, lightMode } from '../../reducers/DarkMode';

export type useDarkModeType = [boolean, () => void];
const useDarkMode = (): useDarkModeType => {
	const isDark = useSelector(
		(state: RootState) => state.DarkModeReducer.isDark,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isDark) {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	}, [isDark]);

	const onToggleDarkMode = () => {
		if (isDark) {
			dispatch(darkMode());
		} else {
			dispatch(lightMode());
		}
	};
	return [isDark, onToggleDarkMode];
};
export default useDarkMode;
