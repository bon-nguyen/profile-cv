import styled from "styled-components/macro";

const handleDirection = direction => {
    switch (direction) {
    case "top":
        return "top: calc(30px * -1);&::before{top: 100%;border-top-color: #333 !important;}";
    case "bottom":
        return "bottom: calc(30px * -1);&::before{bottom: 100%;border-bottom-color: #333 !important;}";
    case "right":
        return "left: calc(100% + 30px); top: 50%; transform: translateX(0) translateY(-50%);&::before{left: calc(6px * -1) !important; top: 50%; transform: translateX(0) translateY(-50%); border-right-color: #333 !important;}";
    case "left":
        return "left: auto !important; right: calc(100% + 6px); top: 50%; transform: translateX(0) translateY(-50%);&::before{right: calc(6px  * -2); top: 50%; transform: translateX(0) translateY(-50%); border-left-color: #333 !important; left: auto !important;}";
    default:
        return "top: calc(30px * -1);&::before{top: 100%;border-top-color: #333;}";
    }
}

export const TooltipWrap = styled.div`
    display: inline-block;
    position: relative;
    transition: all .3s else-in-out;
`

export const TooltipDirection = styled.div`
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px;
    color: #fff;
    background: #333;
    font-size: 14px;
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
    ${({ direction }) => handleDirection(direction)};
    transition: all .3s ease-in-out;
    
    &:before{
        content: " ";
        left: 50%;
        border: 6px solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        margin-left: calc(6px * -1);
        
    }
`
