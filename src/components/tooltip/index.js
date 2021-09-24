import React from 'react';
import { useState } from 'react/cjs/react.development';
import {TooltipWrap, TooltipDirection} from './Tooltip';
const Tooltip = ({children,direction, content}) => {
    let time;
    const [tooltip, setTooltip] = useState(false);
    const showTip = ()=>{
        time = setTimeout(()=>{
            setTooltip(true);
        }, 400)
    }

    const hiddenTip = ()=>{
        clearTimeout(time);
        setTooltip(false);
    }
    return (
        <TooltipWrap
            onMouseEnter = {showTip}
            onMouseLeave = {hiddenTip}
        >
            {children}
            {tooltip && (
                <TooltipDirection direction={direction} >
                    {content}
                </TooltipDirection>
            )}
        </TooltipWrap>
    );
};

export default Tooltip;