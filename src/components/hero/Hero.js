import styled, { keyframes } from "styled-components/macro";
import { Link as LinkS } from 'react-scroll';



export const HeroSection = styled.section`
    position: relative;
    background-color: #e5fbee;
    
`

export const HeroContainer = styled.div`
    display: flex;
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    justify-content: space-between;

    @media (max-width: 767px){
        margin: 0 5%;
        flex-direction: column;
    }

`

export const HeroShape = styled.div`
    @media (max-width: 767px){
        display: none;
    }
`

export const HeroWrap = styled.div`
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ( max-width: 767px){
        max-width: 100%;
        justify-content: flex-start;
    }



`

export const HeroContent = styled.div`
    max-width: 50%;
    padding: 135px 0;

    @media (max-width: 767px){
        max-width: 100%;
        padding: 80px 0px 10px;
    }

`

export const HeroSubTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: 500;

    @media (max-width: 767px){
        font-size: 1rem;
    }
`
export const HeroText = styled.p`
    font-weight: 500;
    color: #4e4e4e;

    @media (max-width: 767px){
        font-size: 14px;
    }
`

export const HeroTitle = styled.h1`
    font-size: 3rem;
    color: #313131;
    position: relative;

    @media (max-width: 767px){
        font-size: 1.75rem;
    }
`

export const HeroSocial = styled.div`
    display: inline-block;
    margin-top: .5rem;
    ul{
        display: flex;
        margin: 0;
        align-items: center;
        list-style: none;
        padding: 0;


        li:first-child a{
            margin: 0;
            margin-right: 1rem;
        }
    }
`


export const HeroSocialLink = styled(LinkS)`
    margin-right: 1rem;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #08d665;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        transform: translateY(5px);
    }
`


export const HeroShapeImage = styled.img`
    position: absolute;
    animation: shape 3s infinite alternate;

    @keyframes shape {
        0% {
            transform: scale(.2);
        }
    
        100% {
            transform: scale(1);
        }
    }
`

export const HeroImage = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;

`
const animation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(10px) skewY(10deg) skewX(10deg) rotateZ(10deg);
        filter: blur(5px);
    }
    25%{
        opacity: 1;
        transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter: blur(0px);
    }
    50%{
        opacity: 1;
        transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
        filter: blur(0px);
    }
    0%{
        opacity: 0;
        transform: translateY(10px) skewY(10deg) skewX(10deg) rotateZ(10deg);
        filter: blur(5px);
        
    }
`

export const HeroTextAnimation = styled.span`
    display: inline-block;
    color: #08d665;
    text-transform: uppercase;
    span{
        opacity: 0;
        animation:  ${animation} 6s infinite forwards;
        animation-delay: .2s;
    }
    span:nth-child(1){
        animation-delay: .4s;
    }
    span:nth-child(2){
        animation-delay: .6s;
    }
    span:nth-child(3){
        animation-delay: .8s;
    }
    span:nth-child(4){
        animation-delay: 1s;
    }
    span:nth-child(5){
        animation-delay: 1.2s;
    }
    span:nth-child(6){
        animation-delay: 1.4s;
    }
    span:nth-child(7){
        animation-delay: 1.6s;
    }
    span:nth-child(8){
        animation-delay: 1.8s;
    }
    span:nth-child(9){
        animation-delay: 2s;
    }
    span:nth-child(10){
        animation-delay: 2.2s;
    }
    span:nth-child(11){
        animation-delay: 2.4s;
    }
    span:nth-child(12){
        animation-delay: 2.6s;
    }
    span:nth-child(13){
        animation-delay: 3s;
    }
`

