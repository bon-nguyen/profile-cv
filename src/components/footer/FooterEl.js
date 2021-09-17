import styled from 'styled-components/macro';
import {Link as  LinkR} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #08d665;
`

export const FooterWrap = styled.div`
    padding: 1.25rem 0;
    max-width: 1000px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    font-size: 14px;
`

export const FooterText = styled.span`
    color: #fff;
    font-weight: 700;
    margin-right: .25rem;
`

export const FooterLink = styled(LinkR)`
    text-decoration: none;
    font-weight: 700;
    color: #000;
`