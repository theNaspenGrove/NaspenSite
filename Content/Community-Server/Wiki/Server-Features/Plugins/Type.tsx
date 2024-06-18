import React from 'react';

const Free: React.FC = ({}) => {
    return (
        <code style={{backgroundColor: "#5a5a5a"}}>Free</code>
    );
};

const Premium: React.FC = ({}) => {
    return (
        <code style={{backgroundColor: "#492f64"}}>Premium</code>
    );
};

const Custom: React.FC = ({}) => {
    return (
        <code style={{backgroundColor: "#ce7738", color: "#1c1c1c"}}>Custom</code>
    );
};

export { Free, Premium, Custom };