import React from 'react';

const Col: React.FC<ColProps> = ({ children, width, center, classes, style}) => {

	style = {
		...style,
		textAlign: center? 'center' : undefined,
		marginLeft: center? 'auto' : undefined,
		marginRight: center? 'auto' : undefined,
	};

	return (
		<div className={`col col--`.concat(width? (width) : ('12')).concat(classes? ( ' ' + classes) : (''))} style={style}>
			{children}
		</div>
	);
	
};

type ColProps = {
	children: React.ReactNode;
	width?: string;
	center?: boolean;
	classes?: string;
	style?: React.CSSProperties;
};

export default Col;