import React from 'react';
import { Trans } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import { concatClasses } from '@/utils/classes';
import QSvg from '@/ui/QSvg';

import ScreenshotTest from '../ScreenshotTest';

import classes from './ScreenshotsTests.module.scss';

interface IProps {
	readonly screenshots: string[];
	readonly screenshotsTests: string[][];
	readonly selectedImageIndex: number;
	readonly setSelectedImageIndex: (index: number) => void;
	readonly onScreenshotTestChange: (imageIndex: number, testIndex: number, value: string) => void;
	readonly onRemoveScreenshotTest: (imageIndex: number, testIndex: number) => void;
	readonly onAddScreenshotTest: (imageIndex: number) => void;
}

const ScreenshotsTestsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
		if (!hasPrev) {
			return null;
		}

		return (
			<QSvg
				className={concatClasses(classes, 'arrow', 'arrow--prev')}
				name="carouselArrow"
				onClick={clickHandler}
			/>
		);
	};

	const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
		if (!hasNext) {
			return null;
		}

		return (
			<QSvg
				className={concatClasses(classes, 'arrow', 'arrow--next')}
				name="carouselArrow"
				onClick={clickHandler}
			/>
		);
	};

	return (
		<>
			<h1 className={classes['header']}>
				<Trans i18nKey="screenshotsInstruction" />
			</h1>
			<Carousel
				className={classes['carousel']}
				selectedItem={props.selectedImageIndex}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				renderArrowPrev={renderArrowPrev}
				renderArrowNext={renderArrowNext}
			>
				{props.screenshots.map((screenshot, index) => (
					<ScreenshotTest
						key={index}
						screenshot={screenshot}
						tests={props.screenshotsTests[index]!}
						onTestChange={(testIndex: number, value: string) =>
							props.onScreenshotTestChange(index, testIndex, value)
						}
						onRemoveTest={(testIndex: number) => props.onRemoveScreenshotTest(index, testIndex)}
						onAddTest={() => props.onAddScreenshotTest(index)}
					/>
				))}
			</Carousel>
			<button className={classes['continue']} type="button" role="button">
				<Trans i18nKey="continue" />
			</button>
		</>
	);
};

ScreenshotsTestsView.displayName = 'ScreenshotsTestsView';
ScreenshotsTestsView.defaultProps = {};

export default React.memo(ScreenshotsTestsView);
