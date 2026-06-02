import React from 'react';

const ThemedImg: React.FC<ThemedImgProps> = ({ darkSrc, lightSrc, alt = '', width, center, classes, style }) => {

    const mergedStyle: React.CSSProperties = {
        ...style,
        display: 'block',
        marginLeft: center ? 'auto' : undefined,
        marginRight: center ? 'auto' : undefined,
        width,
    };

    return (
        <div className={classes} style={mergedStyle}>
            <img src={lightSrc} data-light-mode alt={alt} />
            <img src={darkSrc} data-dark-mode alt={alt} />
        </div>
    );
};

type ThemedImgProps = {
    darkSrc: string;
    lightSrc: string;
    alt?: string;
    width?: string;
    center?: boolean;
    classes?: string;
    style?: React.CSSProperties;
};

export default ThemedImg;