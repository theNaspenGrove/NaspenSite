import React from 'react';

const Col: React.FC<ColProps> = ({ children, width, classes}) => {
	return (
		<div className={`col col--`.concat(width? (width) : ('12')).concat(classes? ( ' ' + classes) : (''))}>
			{children}
		</div>
	);
	
};

type ColProps = {
	children: React.ReactNode;
	width?: string;
	classes?: string;
};

export default Col;