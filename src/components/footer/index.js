import React from 'react';
import {FooterContainer, FooterWrap, FooterText, FooterLink} from './FooterEl';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterText>CopyRight &copy; {new Date().getFullYear()} created by </FooterText>
                <FooterLink> TRAN BON</FooterLink>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;