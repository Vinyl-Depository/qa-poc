import React, { useState } from 'react';

import ScreenshotsTestsView from './ScreenshotsTests.view';

interface IProps {
	readonly screenshots: string[];
}

const ScreenshotsTests: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [screenshotsTestsState, setScreenshotsTestsState] = useState<string[][]>(
		props.screenshots.map(() => ['']),
	);

	const [selectedImageIndexState, setSelectedImageIndexState] = useState<number>(0);

	const onScreenshotTestChange = (imageIndex: number, testIndex: number, value: string) => {
		setScreenshotsTestsState((prev) => {
			const temp = [...prev];
			const testTemp = [...temp[imageIndex]!];

			testTemp[testIndex] = value;
			temp[imageIndex] = testTemp;

			return temp;
		});
	};

	const setSelectedImageIndex = (index: number) => setSelectedImageIndexState(() => index);

	const onRemoveScreenshotTest = (imageIndex: number, testIndex: number) => {
		setScreenshotsTestsState((prev) => {
			const temp = [...prev];
			const testTemp = [...temp[imageIndex]!];

			testTemp.splice(testIndex, 1);
			temp[imageIndex] = testTemp;

			return temp;
		});
	};

	const onAddScreenshotTest = (imageIndex: number) => {
		setScreenshotsTestsState((prev) => {
			const temp = [...prev];
			const testTemp = [...temp[imageIndex]!];

			testTemp.push('');
			temp[imageIndex] = testTemp;

			return temp;
		});
	};

	return (
		<ScreenshotsTestsView
			screenshots={props.screenshots}
			screenshotsTests={screenshotsTestsState}
			selectedImageIndex={selectedImageIndexState}
			setSelectedImageIndex={setSelectedImageIndex}
			onScreenshotTestChange={onScreenshotTestChange}
			onRemoveScreenshotTest={onRemoveScreenshotTest}
			onAddScreenshotTest={onAddScreenshotTest}
		/>
	);
};

ScreenshotsTests.displayName = 'ScreenshotsTests';
ScreenshotsTests.defaultProps = {};

export default React.memo(ScreenshotsTests);
