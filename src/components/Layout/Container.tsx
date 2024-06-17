import React from 'react';

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
	return (
		<div className={'container'.concat(classes? ( ' ' + classes) : (''))}>
			{children}
		</div>
	);
};

type ContainerProps = {
	children: React.ReactNode;
	classes?: string;
};

export default Container;