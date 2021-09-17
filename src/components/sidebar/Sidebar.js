import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from 'react-scroll';

// CloseIcon, Icon, SidebarContainer,SideBarWrap,SidebarLink,SidebarNav
export const SidebarContainer = styled.aside`
    @media (max-width: 767px){
        display: block;
        overflow: hidden;
        margin-top: 15px;
        height: ${({isOpen}) => (isOpen ? '185px' : '0px')};
        opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
        transition: all .3s ease-in-out;
    }

`
export const CloseIcon = styled.div`

`
export const Icon = styled.div`

`

export const SideBarWrap = styled.div`
    position: relative;
    width: 100%;
    display: none;
    @media (max-width: 767px){
        display: block;
    }
`
export const SidebarLink = styled(LinkS)`
    color: #fff;
    padding: 10px 5%;
    text-light: left;
    font-size: 14px;
    display: block;
    margin: 0;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    border-top: 1px solid rgba(255,255,255,.5);
    transition: all .3s ease;

    &:hover{
        background: #08d665;
    }
`
export const SidebarNav = styled.nav`
    background: #0c1923;
`
export const SidebarItem = styled.li`
    
    list-style: none;

`