import React from 'react';

import ProgressView from './Progress.view';

interface IProps {}

const Progress: React.FC<IProps> = () => {
	return <ProgressView />;
};

Progress.displayName = 'Progress';
Progress.defaultProps = {};

export default React.memo(Progress);
