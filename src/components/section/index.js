import React from 'react';
import {SectionTitle, SectionTitleImg, SectionContainer} from './Section';

const Section = ({children}) => {
    return (
        <SectionContainer>
            <SectionTitle>
                {children}
            </SectionTitle>
            <SectionTitleImg src="/images/06.png"/>
        </SectionContainer>
    );
};

export default Section;