import React from 'react';
import { AboutLink, AboutInner,AboutSection, AboutContainer,AboutWrap,AboutImg,AboutContent,AboutText,AboutTitle,AboutSubTitle,AboutInfo,AboutBtn } from './About';
import { FaLocationArrow , FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";
import { Button } from '../button/buttonEl';
import Section from '../section';


const About = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <Section>
                    <span>About</span> Me
                </Section>
                <AboutWrap>
                    <AboutInner>
                        <AboutImg src="./images/05.svg" />
                    </AboutInner>
                    <AboutContent>
               
                            <AboutTitle>I'm <span>Nguyen Tran Bon</span></AboutTitle>
                            <AboutSubTitle>UX Designer with Developer</AboutSubTitle>
                            <AboutText>Hello! I’m Bon. Fresher Web Developer specializing in front end development. Experienced with  stages of the development cycle for dynamic web projects.
                            Experience in programming languages including JavaScript, React and project management and customer relations.
                            </AboutText>
                            <AboutInfo>
                                <ul>
                                    <li>
                                        <AboutLink>
                                            <i><FaLocationArrow size="14"/></i>
                                            <span>bon.nguyentranvn@gmail.com</span>
                                        </AboutLink>
                                    </li>
                                    <li>
                                        <AboutLink>
                                            <i><FaMapMarkerAlt size="14"/></i>
                                            <span>Ho Chi Minh City</span>
                                        </AboutLink>
                                    </li>
                                    <li>
                                        <AboutLink>
                                            <i><FaPhoneAlt size="14"/></i>
                                            <span>036.307.3408</span>
                                        </AboutLink>
                                    </li>
                                </ul>
                            </AboutInfo>
                            <AboutBtn>
                                <Button
                                    to="home"
                                    primary={true ? 1 : 0}
                                >
                                   Download CV
                                </Button>
                            </AboutBtn>
             

                    </AboutContent>
                </AboutWrap>
            </AboutContainer>
        </AboutSection>
    );
};

export default About;