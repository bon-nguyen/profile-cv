import styled from "styled-components/macro";

import { Link as LinkS } from 'react-scroll';

export const BtnWrap = styled(LinkS)`
    width: 40px;
    height: 40px;
    background-color: #313131;
    position: fixed;
    bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    color: #fff;
    cursor: pointer;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    transition: all 1s ease;
    right: ${({scrollBack}) => (scrollBack ? '1.5rem' : '-100%')};
   

    &:hover,
    &:active,
    &:focus{
        background-color: #08d665;
    }
`
// ${({ scrollNav }) =>
//     scrollNav &&
//     css`
//         position: sticky;
//         top: 0;
//         left: 0;
//         padding: 0rem 0;
//         box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

//         @media (max-width: 600px){
//             padding: .5rem 0;
//         }
//     `}