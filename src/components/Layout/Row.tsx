import React from 'react';

const Row: React.FC<RowProps> = ({ children, classes, style }) => {
	return (
		<div className={'row'.concat(classes? ( ' ' + classes) : (''))} style={style}>
			{children}
		</div>
	);
};

type RowProps = {
	children: React.ReactNode;
	classes?: string;
	style?: React.CSSProperties;
};

export default Row;