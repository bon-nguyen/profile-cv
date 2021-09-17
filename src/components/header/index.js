import React from 'react';
import { Button } from '../button/buttonEl';
import {HeaderContainer, HeaderShape, HeaderShapeImg, HeaderList,
 HeaderLogo,HeaderLogoImg, HeaderInner, HeaderNav, HeaderItem, HeaderLinks, MobileIcon , HeaderNavMb} from './HeaderEl';

 import { FaBars, FaTimes} from 'react-icons/fa';

const Header = ({toggle, children, isOpen}) => {
    return (
        <HeaderContainer>
            <HeaderShape>
                <HeaderShapeImg src="/images/01.png" alt="shape"/>
            </HeaderShape>
            <HeaderNav>
                <HeaderLogo
                    to='home'
                >
                    <HeaderLogoImg src="/images/logo.png" alt="logo"/> 
                </HeaderLogo>
                <MobileIcon >
                    {isOpen ? 
                    <FaTimes
                        size={26}
                        onClick= {toggle}
                    /> : 
                    <FaBars 
                        size={26}
                        onClick= {toggle}
                    />}
                </MobileIcon>
                <HeaderInner>
                    <HeaderList>
                        <HeaderItem>
                            <HeaderLinks 
                                to='home'
                            >
                                Home
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="about"
                            >
                                About
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="skill"
                            >
                                Skill
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="contact"
                            >
                                Contact
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="project"
                            >
                                Project
                            </HeaderLinks>
                        </HeaderItem>
                    </HeaderList>
                    <Button
                        to="home"
                        primary={true ? 1 : 0}
                    >
                        Hire me
                    </Button>
                </HeaderInner>
            </HeaderNav>
            <HeaderNavMb>
                {children}
            </HeaderNavMb>
         
        </HeaderContainer>
    );
};

export default Header;