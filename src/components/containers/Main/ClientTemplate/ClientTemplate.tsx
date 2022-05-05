import React from 'react';

import ClientTemplateView from './ClientTemplate.view';

interface IProps {}

const ClientTemplate: React.FC<IProps> = () => {
	return <ClientTemplateView />;
};

ClientTemplate.displayName = 'ClientTemplate';
ClientTemplate.defaultProps = {};

export default React.memo(ClientTemplate);
