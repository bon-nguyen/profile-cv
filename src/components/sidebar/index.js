import React from 'react';
import { SidebarContainer,SideBarWrap,SidebarLink,SidebarNav, SidebarItem } from './Sidebar';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SideBarWrap>
                <SidebarNav>
                    <SidebarItem>
                        <SidebarLink 
                            to="hero"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle}
                            offset={-60}
                            activeClass='active'
                        >Home</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle}
                            offset={-200}
                        >About</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink 
                            to="skill"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle}
                            offset={-200}
                        >Skill</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink 
                            to="project"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle}
                            offset={-200}
                        >Project</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink 
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            onClick={toggle}
                        >Contact</SidebarLink>
                    </SidebarItem>
                </SidebarNav>
            </SideBarWrap>
        </SidebarContainer>
    );
};

export default Sidebar;