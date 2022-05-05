import React from 'react';
import { Trans } from 'react-i18next';

import classes from './Progress.module.scss';

interface IProps {}

const ProgressView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<span className={classes['item']}>
				<Trans i18nKey="progress.smoke" />
			</span>
		</div>
	);
};

ProgressView.displayName = 'ProgressView';
ProgressView.defaultProps = {};

export default React.memo(ProgressView);
