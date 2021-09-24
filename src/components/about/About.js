import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
// {,AboutWrap,AboutImg,AboutContent,AboutText,AboutTitle,AboutSubTitle,AboutInfo, AboutLink,AboutBtn }
export const AboutContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
    overflow: hidden;
`

export const AboutSection = styled.section`
    padding: 3rem 0;
`

export const AboutWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    grid-gap: 100px;
    align-items: center;


    @media (max-width: 600px){
        grid-template-columns: inherit;
        grid-gap: 30px;
    }

`
export const AboutContent = styled.div`
    align-self: flex-start;

`
export const AboutText = styled.p`
    line-height: 24px;
    color: #848383;
    margin-bottom: 1.5rem;
    font-weight: 300;
    display: inline-block;

`
export const AboutBtn = styled.div`
    display: inline-block;
    margin-bottom: 1rem;
`
export const AboutTitle = styled.h1`
    font-size: 1.75rem;
    font-weight: 300;
    span{
        font-weight: 700;
        color: #08d665;
    }
    @media (max-width: 767px){
        font-size: 1.5rem;
    }
`
export const AboutSubTitle = styled.h4`
    margin-bottom: 1rem;

`
export const AboutInfo = styled.div`
    margin-bottom: 1rem;
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        > li{
            margin-right: 1rem;
            margin-bottom: .5rem;
        }
    }

`

export const AboutImg = styled.img`
    max-width: 100%;
    object-fit: contain;
`

export const AboutInner = styled.div`
    width: 80%;
    place-self: center;
`

export const AboutLink = styled(LinkR)`
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #313131;
    transition: all .3s ease-in-out;

    &:hover{
        color: #08d665;
    }

    > i{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid #08d665;
        justify-content: center;
        cursor: pointer;
        text-align: center;
        line-height: 28px;
        margin-right: .5rem;
    }
`