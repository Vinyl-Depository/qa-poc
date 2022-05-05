import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './ClientTemplate.module.scss';

interface IProps {}

const ClientTemplateView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<>
			<h3 className={classes['header']}>{t('clientTemplate.header')}</h3>
			<iframe className={classes['iframe']} src="template.html" />
		</>
	);
};

ClientTemplateView.displayName = 'ClientTemplateView';
ClientTemplateView.defaultProps = {};

export default React.memo(ClientTemplateView);
