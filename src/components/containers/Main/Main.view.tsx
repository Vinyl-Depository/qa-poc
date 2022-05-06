import React from 'react';
import { Trans } from 'react-i18next';

import ClientTemplate from './ClientTemplate';
import Progress from './Progress';
import ScreenshotsTests from './ScreenshotsTests';

import classes from './Main.module.scss';

interface IProps {
	readonly isOnSmoke: boolean;
	readonly isOnComplex: boolean;
	readonly isOnDone: boolean;
	readonly smokeAutomationsScreenshots: string[] | null;
	readonly smokeAutomationsErrorMessage: string | null;
	readonly onStartProcessClick: () => void;
	readonly onSmokeContinueClick: (tests: string[]) => void;
	readonly onComplexDoneClick: (tests: string[]) => void;
	readonly onShowDashboardClick: () => void;
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<>
			<h1 className={classes['header']}>
				<Trans i18nKey="mainHeader" />
			</h1>
			<ClientTemplate />
			<button
				className={classes['startProcessButton']}
				type="button"
				role="button"
				onClick={props.onStartProcessClick}
			>
				<Trans i18nKey="startProcess" />
			</button>
			<Progress />

			{props.smokeAutomationsScreenshots !== null && (
				<ScreenshotsTests screenshots={props.smokeAutomationsScreenshots} />
			)}

			{props.smokeAutomationsErrorMessage !== null && (
				<span className={classes['errorMessage']}>{props.smokeAutomationsErrorMessage}</span>
			)}
		</>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
