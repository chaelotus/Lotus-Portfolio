import { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useAnimation = (classNameArray: string[]) => {
	const targetRef = useRef<HTMLDivElement | HTMLHeadingElement>(null);

	const onIntersectHandler = () => {
		classNameArray.forEach((className) => {
			targetRef.current?.classList.add(className);
		});
		targetRef.current?.classList.remove('invisible');
	};
	const offIntersectHandler = () => {
		classNameArray.forEach((className) => {
			targetRef.current?.classList.remove(className);
		});
		targetRef.current?.classList.add('invisible');
	};

	useIntersectionObserver({
		target: targetRef,
		onIntersect: onIntersectHandler,
		offIntersect: offIntersectHandler,
		threshold: 0.15,
	});

	return [targetRef];
};
export default useAnimation;
