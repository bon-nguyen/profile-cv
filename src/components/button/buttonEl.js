import styled, {css} from "styled-components/macro";


export const Button = styled.a`
    border-radius: 1.5rem;
    border: none;
    display: flex;
    align-item: center;
    white-space: nowrap;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 29%);
    font-weight: 500;
    cursor: pointer;
    padding: 1rem 1.75rem;
    justify-content: center;

    /*Color, background, size,  */ 
    color: ${({dark}) => (dark ? '#333' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    background: ${({primary}) => (primary ? '#08d665' : '#fff')};

    &:hover{
        transition: all .3s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#08d665')};
        color: ${({dark}) => (dark ? '#fff' : '#333')};
    }
    transition: all .3s ease-in-out;

    ${({ disabled }) =>
    disabled &&
    css`
        opacity: .5;
        &:focus,
        &:hover,
        &:active {
            cursor: not-allowed;
            color: #fff;
            background: #08d665;

        }
    `}
`