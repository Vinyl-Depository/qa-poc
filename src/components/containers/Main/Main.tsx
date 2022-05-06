import React, { useEffect, useState } from 'react';

import { ISmokeAutomationsResponse } from '@/interfaces/responses/smoke-automations';
import useBackend from '@/hooks/backend';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [isOnSmokeState, setIsOnSmokeState] = useState<boolean>(false);
	const [isOnComplexState, setIsOnComplexState] = useState<boolean>(false);
	const [isOnDoneState, setIsOnDoneState] = useState<boolean>(false);

	const [smokeAutomationsScreenshotsState, setSmokeAutomationsScreenshotsState] = useState<string[] | null>(
		null,
	);

	const [smokeAutomationsErrorMessageState, setSmokeAutomationsErrorMessageState] = useState<string | null>(
		null,
	);

	const [testsState, setTestsState] = useState<string[]>([]);

	const {
		response: smokeAutomationsResponse,
		error: smokeAutomationsError,
		request: smokeAutomationsRequest,
	} = useBackend<ISmokeAutomationsResponse>('/api/smoke-automations', 'GET');

	useEffect(() => {
		if (smokeAutomationsResponse && smokeAutomationsResponse.data.success) {
			setSmokeAutomationsScreenshotsState(() => smokeAutomationsResponse.data.data!.screenshots);
		} else if (smokeAutomationsResponse) {
			setSmokeAutomationsErrorMessageState(() => smokeAutomationsResponse.data.message);
		} else if (smokeAutomationsError) {
			setSmokeAutomationsErrorMessageState(() => smokeAutomationsError.message);
		}
	}, [smokeAutomationsResponse, smokeAutomationsError]);

	const onStartProcessClick = () => {
		smokeAutomationsRequest();
		setIsOnSmokeState(() => true);
	};

	const onSmokeContinueClick = (tests: string[]) => {
		setTestsState(() => tests);
		setIsOnSmokeState(() => false);
		setIsOnComplexState(() => true);
	};

	const onComplexDoneClick = (tests: string[]) => {
		setTestsState((prev) => [...prev, ...tests]);
		setIsOnComplexState(() => false);
		setIsOnDoneState(() => true);
	};

	const onShowDashboardClick = () => {
		console.log(testsState);
	};

	return (
		<MainView
			isOnSmoke={isOnSmokeState}
			isOnComplex={isOnComplexState}
			isOnDone={isOnDoneState}
			smokeAutomationsScreenshots={smokeAutomationsScreenshotsState}
			smokeAutomationsErrorMessage={smokeAutomationsErrorMessageState}
			onStartProcessClick={onStartProcessClick}
			onSmokeContinueClick={onSmokeContinueClick}
			onComplexDoneClick={onComplexDoneClick}
			onShowDashboardClick={onShowDashboardClick}
		/>
	);
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
