import React from 'react';
import { Button } from '../button/buttonEl';
import {HeaderContainer, HeaderShape, HeaderShapeImg, HeaderList,
 HeaderLogo,HeaderLogoImg, HeaderInner, HeaderNav, HeaderItem, HeaderLinks, MobileIcon , HeaderNavMb} from './HeaderEl';

 import { FaBars, FaTimes} from 'react-icons/fa';
import { useEffect, useState } from 'react/cjs/react.development';

const Header = ({toggle, children, isOpen}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeScrollNav = ()=>{
        if(window.scrollY >= 50) {
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }
    
    useEffect(()=>{

        window.addEventListener('scroll', changeScrollNav);

    },[])
    return (
        <HeaderContainer scrollNav={scrollNav}>
            <HeaderShape>
                <HeaderShapeImg src="/images/01.png" alt="shape"/>
            </HeaderShape>
            <HeaderNav>
                <HeaderLogo
                    to='hero'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-120}
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
                                to='hero'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-120}
                                activeClass='active'
                            >
                                Home
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                About
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="skill"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Skill
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="project"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Project
                            </HeaderLinks>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLinks
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={0}

                            >
                                Contact
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