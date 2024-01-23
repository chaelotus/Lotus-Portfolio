import { useEffect, useState } from 'react';

const useCalculate = () => {
	const [screenSize, setScreenSize] = useState(window.innerWidth);
	let start: number = 230;
	let translateX: number = -3200;
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	if (screenSize >= 390 && screenSize <= 639) {
		start = 190;
		translateX = -1800;
		return [start, translateX];
	} else if (screenSize >= 640 && screenSize <= 710) {
		start = 230;
		translateX = -2000;
		return [start, translateX];
	} else if (screenSize >= 711 && screenSize <= 1023) {
		start = 140;
		translateX = -2800;
		return [start, translateX];
	} else if (screenSize >= 1024) {
		start = 230;
		translateX = -3200;
		return [start, translateX];
	}

	return [start, translateX];
};
export default useCalculate;
