import React from 'react';
import { Trans } from 'react-i18next';

import classes from './ClientTemplate.module.scss';

interface IProps {}

const ClientTemplateView: React.FC<IProps> = () => {
	return (
		<>
			<h3 className={classes['header']}>
				<Trans i18nKey="clientTemplate.header" />
			</h3>
			<iframe className={classes['iframe']} src="template.html" />
		</>
	);
};

ClientTemplateView.displayName = 'ClientTemplateView';
ClientTemplateView.defaultProps = {};

export default React.memo(ClientTemplateView);
