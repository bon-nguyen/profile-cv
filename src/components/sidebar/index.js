import React from 'react';
import { SidebarContainer,SideBarWrap,SidebarLink,SidebarNav, SidebarItem } from './Sidebar';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SideBarWrap>
                <SidebarNav>
                    <SidebarItem>
                        <SidebarLink to="home">Home</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="about">About</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="skill">Skill</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="contact">Contact</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="project">Project</SidebarLink>
                    </SidebarItem>
                </SidebarNav>
            </SideBarWrap>
        </SidebarContainer>
    );
};

export default Sidebar;