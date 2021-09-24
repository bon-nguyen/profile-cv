import React from 'react';
import Section from '../section';
import Tooltip from '../tooltip';
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
                        <li>
                            <Tooltip content="React"  direction="top">
                                <SkillImg src="/images/physics.png" alt="react" />
                            </Tooltip>   
                        </li>
                        <li>
                            <Tooltip content="Redux"  direction="top">
                                <SkillImg src="/images/redux.png" alt="redux" />
                            </Tooltip>   
                        </li>
                        <li>
                            <Tooltip content="HTML"  direction="top">
                                <SkillImg src="/images/html-5.png" alt="html" />
                            </Tooltip>  
                        </li>
                        <li>
                            <Tooltip content="CSS"  direction="top">
                                <SkillImg src="/images/css.png" alt="css" />
                            </Tooltip>  
                        </li>
                        <li>
                            <Tooltip content="BootStrap"  direction="top">
                                <SkillImg src="/images/bootstrap.png" alt="bootstrap" />
                            </Tooltip>  
                        </li>
                        <li>
                            <Tooltip content="Sass"  direction="top">  
                                <SkillImg src="/images/sass.png" alt="react" />
                            </Tooltip>  
                        </li>
                        <li>
                            <Tooltip content="Wordpress"  direction="top">  
                                <SkillImg src="/images/wordpress.png" alt="wordpress" />
                            </Tooltip>  
                        </li>
                        <li>
                            <Tooltip content="Php"  direction="top">  
                                <SkillImg src="/images/php.png" alt="react" />
                            </Tooltip>  
                        </li>
                    </SkillList>
                </SkillWrap>
            </SkillContainer>
        </SkillSection>
    );
};

export default Skill;