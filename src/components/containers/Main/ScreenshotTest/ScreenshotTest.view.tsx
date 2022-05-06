import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './ScreenshotTest.module.scss';

interface IProps {
	readonly screenshot: string;
	readonly tests: string[];
	readonly onTestChange: (testIndex: number, value: string) => void;
	readonly onRemoveTest: (testIndex: number) => void;
	readonly onAddTest: () => void;
}

const ScreenshotTestView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['container__image']}>
				<img src={`data:image/jpg;base64,${props.screenshot}`} alt="element screenshot" />
			</div>
			{props.tests.map((test, index) => {
				return (
					<div key={index} className={classes['inputContainer']}>
						<input
							className={classes['inputContainer__input']}
							type="text"
							value={test}
							placeholder={t('declarativeTest')}
							onChange={({ currentTarget: { value } }) => props.onTestChange(index, value)}
						/>

						{index !== 0 && (
							<button
								className={classes['inputContainer__remove']}
								type="button"
								role="button"
								onClick={() => props.onRemoveTest(index)}
							>
								-
							</button>
						)}
						{index === props.tests.length - 1 && (
							<button
								className={classes['inputContainer__add']}
								type="button"
								role="button"
								onClick={props.onAddTest}
							>
								+
							</button>
						)}
					</div>
				);
			})}
		</div>
	);
};

ScreenshotTestView.displayName = 'ScreenshotTestView';
ScreenshotTestView.defaultProps = {};

export default React.memo(ScreenshotTestView);
