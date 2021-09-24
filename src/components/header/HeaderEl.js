import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from 'react-scroll';
// HeaderContainer, HeaderShape, HeaderShapeImg, HeaderWrap, HeaderLogo,HeaderLogoImg, HeaderInner, HeaderNav, HeaderItem, HeaderLinks 
export const HeaderContainer = styled.header`
    background: #fff;
    padding: 1rem 0;
    position: relative;
    z-index: 10;
    overflow: hidden;
`
export const HeaderShape = styled.div`
    @media (max-width: 1200px){
        display: none;
    }
`

export const HeaderShapeImg = styled.img`
    position: absolute;
    top: 0;
    left: -16px;
    width: 126px;
    
`

export const HeaderWrap = styled.div`

`

export const HeaderLogo = styled(LinkR)`
    width: 126px;

    @media (max-width: 768px){
        width: 100px;
    }
`

export const HeaderLogoImg = styled.img`
    max-width: 100%;
    cursor: pointer;
`

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px){
        display: none;
    }
`

export const HeaderNav = styled.nav`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

`
export const HeaderItem = styled.li`
    position: relative;
    overflow: hidden;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderList = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 1rem;
    padding: 0;
`

export const HeaderLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: #333;
    position: relative;
    height: 40px;
    font-weight: 500;
    transition: .3s ease-in;

    &:before{
        content: "";
        width: 100%;
        height: 3px;
        background: #01BF71;
        bottom: 0;
        left: 0;
        position: absolute;
        transform: translateX(-50px);
        opacity: 0;
        transition: .3s ease-in;
    }

    &:hover{
        color: #01BF71;
        &:before{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    &.active:before{
        opacity: 1;
        transform: translateX(0px);
    }
`
export const MobileIcon = styled.div`
    display: none;

    @media (max-width: 767px){
        display: block;
        cursor: pointer;

    }
`

export const HeaderNavMb = styled.div`
    position: relative;
    margin: 0 5%;
    display: none;
    
    @media (max-width: 767px){
        display: block;
    }
}

`