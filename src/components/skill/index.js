import React from 'react';
import Section from '../section';
import {SkillSection, SkillContainer, SkillWrap, SkillList, SkillImg} from './Skill';

const Skill = () => {
    return (
        <SkillSection>
            <SkillContainer>
                <Section>
                    <span>Skill</span> Me
                </Section>
                <SkillWrap>
                    <SkillList>
                        <li><SkillImg src="/images/physics.png" alt="react" /></li>
                        <li><SkillImg src="/images/redux.png" alt="redux" /></li>
                        <li><SkillImg src="/images/html-5.png" alt="html" /></li>
                        <li><SkillImg src="/images/css.png" alt="css" /></li>
                        <li><SkillImg src="/images/bootstrap.png" alt="bootstrap" /></li>
                        <li><SkillImg src="/images/sass.png" alt="react" /></li>
                        <li><SkillImg src="/images/wordpress.png" alt="wordpress" /></li>
                        <li><SkillImg src="/images/php.png" alt="react" /></li>
                    </SkillList>
                </SkillWrap>
            </SkillContainer>
        </SkillSection>
    );
};

export default Skill;