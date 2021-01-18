import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { getDefaultBackgroundColor, getShadowStyle } from './shadows';

DoubleScrollbar.propTypes = {
    /** Child component(s) to be wrapped in the double scrollbars. */
    children: PropTypes.node.isRequired,
    /** Custom background color. Optional. If not provided, a contrasting background color will be selected based on the value of shadowVariant. */
    backgroundColor: PropTypes.string,
    /** Type of shadow to display on the edge of the scrollable content. Valid options: off, light, or dark (default). */
    shadowVariant: PropTypes.string,
};

export default function DoubleScrollbar({ children, backgroundColor, shadowVariant = 'dark' }) {
    const [width, setWidth] = useState('auto');
    const innerDiv = useRef();
    const outerDiv = useRef();
    const childWrapper = useRef();
    const background = backgroundColor || getDefaultBackgroundColor(shadowVariant);

    const calculateWidth = () => {
        const newWidth =
            childWrapper.current && childWrapper.current.scrollWidth ? `${childWrapper.current.scrollWidth}px` : 'auto';
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
                <div ref={innerDiv} style={{ paddingTop: '0.1px', width }} />
            </div>
            <div
                ref={childWrapper}
                style={{
                    overflow: 'auto',
                    overflowY: 'hidden',
                    background,
                    ...getShadowStyle(background, shadowVariant),
                }}
            >
                {children}
            </div>
        </div>
    );
}
