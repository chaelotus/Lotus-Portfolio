import { useEffect, useCallback, MutableRefObject } from 'react';

interface useIntersectionObserverProps {
	target: MutableRefObject<Element | null>;
	root?: MutableRefObject<Element | null> | null;
	onIntersect: () => void;
	offIntersect?: () => void;
	threshold?: number;
	rootMargin?: string;
}
const useIntersectionObserver = ({
	target,
	root = null,
	onIntersect,
	offIntersect = () => {},
	threshold = 0.5,
	rootMargin = '0px',
}: useIntersectionObserverProps) => {
	const memorizedOnIntersect = useCallback(onIntersect, []);
	useEffect(() => {
		let io: IntersectionObserver;
		const domElement = target && target.current;

		if (!domElement) return;
		if (domElement) {
			io = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							onIntersect();
						}
						if (!entry.isIntersecting) {
							offIntersect();
						}
					});
				},
				{
					threshold,
					rootMargin,
					root: root && root.current,
				},
			);
			io.observe(domElement);
		}
		return () => {
			if (io) io.disconnect();
		};
	}, [root, target, memorizedOnIntersect, rootMargin, threshold]);
};
export default useIntersectionObserver;
