import { useEffect, useState, useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
const useTyping = (sentence: string) => {
	const targetRef = useRef<HTMLDivElement | HTMLHeadingElement>(null);
	const [word, setWord] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			if (index < sentence.length) {
				setWord((prevText) => prevText + sentence[index]);
				setIndex((prevIdx) => prevIdx + 1);
			}
		}, 100);
		return () => {
			clearInterval(typingInterval);
		};
	}, [sentence, index]);

	const onIntersectHandler = () => {
		setWord('');
		setIndex(0);
	};
	const offIntersectHandler = () => {
		setWord('');
	};
	useIntersectionObserver({
		target: targetRef,
		onIntersect: onIntersectHandler,
		offIntersect: offIntersectHandler,
		threshold: 0.15,
	});
	return { word, targetRef };
};
export default useTyping;
