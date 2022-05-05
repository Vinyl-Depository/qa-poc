import React, { useEffect, useState } from 'react';

import { ISmokeAutomationsResponse } from '@/interfaces/responses/smoke-automations';
import useBackend from '@/hooks/backend';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
	const [smokeAutomationsErrorMessageState, setSmokeAutomationsErrorMessageState] = useState<string | null>(
		null,
	);

	const {
		response: smokeAutomationsResponse,
		error: smokeAutomationsError,
		request: smokeAutomationsRequest,
	} = useBackend<ISmokeAutomationsResponse>('/api/smoke-automations', 'GET');

	useEffect(() => {
		if (smokeAutomationsResponse && smokeAutomationsResponse.data.success) {
			setSmokeAutomationsErrorMessageState(() => null);
		} else if (smokeAutomationsResponse) {
			setSmokeAutomationsErrorMessageState(() => smokeAutomationsResponse.data.message);
		} else if (smokeAutomationsError) {
			setSmokeAutomationsErrorMessageState(() => smokeAutomationsError.message);
		}
	}, [smokeAutomationsResponse, smokeAutomationsError]);

	const onStartProcessClick = () => {
		smokeAutomationsRequest();
	};

	return (
		<MainView
			smokeAutomationsErrorMessage={smokeAutomationsErrorMessageState}
			onStartProcessClick={onStartProcessClick}
		/>
	);
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
