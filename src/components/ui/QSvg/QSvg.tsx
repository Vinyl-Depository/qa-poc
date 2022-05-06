import React, { CSSProperties } from 'react';

import icons from 'src/icons';

import QSvgView from './QSvg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const QSvg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<QSvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick} />
	);
};

QSvg.displayName = 'QSvg';
QSvg.defaultProps = {};

export default React.memo(QSvg);
