import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../button/buttonEl';
import { HeroContainer, HeroContent, HeroImage, HeroSection, HeroShape, HeroShapeImage, HeroSocial, HeroSocialLink, HeroSubTitle, HeroText, HeroTextAnimation, HeroTitle, HeroWrap } from './Hero';
import './Hero.css';
import {FaFacebookF, FaGithubAlt,FaInstagram} from 'react-icons/fa';
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const Hero = () => {
    const nameArray = "Tran Bon".split("");
    const jobArray = "a DEVELOPMENT".split("");
    const [items , setItems] = useState(nameArray); 
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);

    useInterval(
        ()=>{
            setItems(nameArray);
            setCount(count + 1);
            // animation swift lopping
            console.log(count);
            if(count === 1){
                setCount(0);
                setItems(jobArray);
            }
        },
        play ? 6000 : null
    )

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setItems(jobArray);
            setPlay(true);
        }, 1000)
        return ()=> clearTimeout(timer);
    }, [] );

    return (
        <HeroSection>
            <HeroShape>
                <HeroShapeImage className="shape01" src="./images/02.png" alt="shape" />
                <HeroShapeImage className="shape02" src="./images/03.png" alt="shape" />
                <HeroShapeImage className="shape03" src="./images/04.png" alt="shape" />
                <HeroShapeImage className="shape04" src="./images/02.png" alt="shape" />
                <HeroShapeImage className="shape05" src="./images/02.png" alt="shape" />
                <HeroShapeImage className="shape06" src="./images/03.png" alt="shape" />
                <HeroShapeImage className="shape07" src="./images/03.png" alt="shape" />
            </HeroShape>
            <HeroContainer>
                <HeroContent>
                    <HeroSubTitle>Hello There!</HeroSubTitle>
                    <HeroTitle>I’M &nbsp;
                        <HeroTextAnimation>{items.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}</HeroTextAnimation>
                    </HeroTitle>
                    <HeroText>I can design a website interface, build a complete website manage and develop it. Let me help you to bring your idea come True.</HeroText>
                    <HeroSocial>
                        <ul>
                            <li><Button
                                to="home"
                                primary={true ? 1 : 0}
                            >
                                Hire me
                            </Button></li>
                            <li>
                                <HeroSocialLink><FaFacebookF /></HeroSocialLink>
                            </li>
                            <li>
                                <HeroSocialLink><FaGithubAlt /></HeroSocialLink>
                            </li>
                            <li>
                                <HeroSocialLink><FaInstagram/></HeroSocialLink>
                            </li>
                        </ul>
                    </HeroSocial>
                </HeroContent>
                <HeroWrap>
                    <HeroImage src="./images/avatar.png" alt="avatar"/>
                </HeroWrap>
            </HeroContainer>
            
        </HeroSection>
    );
};

export default Hero;