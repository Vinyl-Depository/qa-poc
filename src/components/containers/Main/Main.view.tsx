import React from 'react';
import { useTranslation } from 'react-i18next';

import ClientTemplate from './ClientTemplate';

import classes from './Main.module.scss';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1 className={classes['header']}>{t('mainHeader')}</h1>
			<ClientTemplate />
			<button className={classes['startProcessButton']} type="button" role="button">
				{t('startProcess')}
			</button>
		</>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
