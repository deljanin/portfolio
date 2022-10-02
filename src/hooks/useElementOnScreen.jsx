import { useState, useMemo, useEffect } from 'react';

const useElementOnScreen = (options, targetRef) => {
	const [isVisible, setIsVisible] = useState([]);

	const callBackFunction = (entries) => {
		entries.forEach((entry) => {
			setIsVisible(entry.isIntersecting);
		});
	};

	const optionsMemo = useMemo(() => {
		return options;
	}, [options]);

	const makeArray = (object) => {
		if (Array.isArray(object)) {
			return object;
		} else {
			return [object];
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callBackFunction, optionsMemo);
		const currentTarget = makeArray(targetRef.current);

		currentTarget.forEach((elt) => {
			if (elt) {
				observer.observe(elt);
			}
		});

		return () => {
			currentTarget.forEach((elt) => {
				if (elt) {
					observer.unobserve(elt);
				}
			});
		};
	}, [targetRef, optionsMemo]);

	return isVisible;
};

export default useElementOnScreen;

////////////////

// const useElementOnScreen = (options, targetRef) => {
// 	const [isVisible, setIsVisible] = useState(false);

// 	const callBackFunction = (entries) => {
// 		const [entry] = entries; // takes 1st elt
// 		setIsVisible(entry.isIntersecting);
// 	};

// 	const optionsMemo = useMemo(() => {
// 		return options;
// 	}, [options]);

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(callBackFunction, optionsMemo);
// 		const currentTarget = targetRef.current;
// 		if (currentTarget) {
// 			observer.observe(currentTarget);
// 		}

// 		return () => {
// 			if (currentTarget) observer.unobserve(currentTarget);
// 		};
// 	}, [targetRef, optionsMemo]);

// 	return isVisible;
// };

// export default useElementOnScreen;
