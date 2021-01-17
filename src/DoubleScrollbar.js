import React, { useEffect, useRef, useState } from 'react';
import { getDefaultBackgroundColor, getShadowStyle } from './shadows';

export default function DoubleScrollbar({ children, backgroundColor, shadowVariant = 'dark' }) {
    const [width, setWidth] = useState('auto');
    const innerDiv = useRef();
    const outerDiv = useRef();
    const childWrapper = useRef();
    const background = backgroundColor ? backgroundColor : getDefaultBackgroundColor(shadowVariant);

    const calculateWidth = () => {
        const newWidth = (childWrapper.current && childWrapper.current.scrollWidth) ? `${childWrapper.current.scrollWidth}px` : 'auto';
        if (newWidth !== width) {
            setWidth(newWidth);
        }
    };

    useEffect(() => {
        calculateWidth();
    });
    window.addEventListener('resize', calculateWidth());

    if (outerDiv.current) {
        outerDiv.current.onscroll = () => {
            childWrapper.current.scrollLeft = outerDiv.current.scrollLeft;
        };
    }

    if (childWrapper.current) {
        childWrapper.current.onscroll = () => {
            outerDiv.current.scrollLeft = childWrapper.current.scrollLeft;
        };
    }

    return (
        <div>
            <div ref={outerDiv} style={{ overflowX: 'auto', overflowY: 'hidden', background }}>
                <div ref={innerDiv} style={{ paddingTop: '1px', width }} />
            </div>
            <div ref={childWrapper} style={{ overflow: 'auto', overflowY: 'hidden', background, ...getShadowStyle(background, shadowVariant) }}>
                {children}
            </div>
        </div>
    );
}
