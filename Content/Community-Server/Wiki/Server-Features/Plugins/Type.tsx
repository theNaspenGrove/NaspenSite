import React from 'react';

const Free: React.FC = ({}) => {
    return (
        <code style={{backgroundColor: "#5a5a5a"}} className='padding-horiz--xs'>Free</code>
    );
};

const Premium: React.FC = ({}) => {
    return (
        <code style={{backgroundColor: "#492f64"}} className='padding-horiz--xs'>Premium</code>
    );
};

const Custom: React.FC = ({}) => {
    return (
        <code style={{backgroundColor: "#ce7738", color: "#1c1c1c"}} className='padding-horiz--xs'>Custom</code>
    );
};

export { Free, Premium, Custom };