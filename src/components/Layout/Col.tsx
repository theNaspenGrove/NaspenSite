import React from 'react';

const Col: React.FC<ColProps> = ({ children, width, classes, style}) => {
	return (
		<div className={`col col--`.concat(width? (width) : ('12')).concat(classes? ( ' ' + classes) : (''))} style={style}>
			{children}
		</div>
	);
	
};

type ColProps = {
	children: React.ReactNode;
	width?: string;
	classes?: string;
	style?: React.CSSProperties;
};

export default Col;