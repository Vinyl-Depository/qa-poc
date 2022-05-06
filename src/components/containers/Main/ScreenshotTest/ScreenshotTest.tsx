import React from 'react';

import ScreenshotTestView from './ScreenshotTest.view';

interface IProps {
	readonly screenshot: string;
	readonly tests: string[];
	readonly onTestChange: (testIndex: number, value: string) => void;
	readonly onRemoveTest: (testIndex: number) => void;
	readonly onAddTest: () => void;
}

const ScreenshotTest: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<ScreenshotTestView
			screenshot={props.screenshot}
			tests={props.tests}
			onTestChange={props.onTestChange}
			onRemoveTest={props.onRemoveTest}
			onAddTest={props.onAddTest}
		/>
	);
};

ScreenshotTest.displayName = 'ScreenshotTest';
ScreenshotTest.defaultProps = {};

export default React.memo(ScreenshotTest);
