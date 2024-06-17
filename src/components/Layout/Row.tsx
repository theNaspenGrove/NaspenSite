import React from 'react';

const Row: React.FC<RowProps> = ({ children, classes }) => {
	return (
		<div className={'row'.concat(classes? ( ' ' + classes) : (''))}>
			{children}
		</div>
	);
};

type RowProps = {
	children: React.ReactNode;
	classes?: string;
};

export default Row;