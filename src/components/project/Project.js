// rojectContainer, ProjectSection, ProjectWrap, ProjectList, ProjectInner, ProjectItem, ProjectImg, ProjectContent, ProjectTitle,ProjectContentTop, ProjectTechnology

import styled from "styled-components/macro";

export const ProjectContainer = styled.div`
    padding: 0 10px;
    max-width: 1100px;
    margin: 0 auto;
`
export const ProjectSection = styled.section`
    padding: 3rem 0;
    position: relative;
`
export const ProjectWrap = styled.div`

`
export const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
`
export const ProjectItem = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: calc(33.33% - 30px - 2px);
    margin-left: 30px;
    margin-bottom: 30px;
    border: 1px solid rgba(168,179,207,0.4);
    transition: all .3s ease;

    &:hover{
        transform: scale(1.02);
        border-color: #999;
    }

    @media (max-width: 850px){
        width: calc(50% - 30px - 2px);
    }

    @media(max-width: 450px){
        width: calc(100% - 30px - 2px);
    }
`
export const ProjectInner = styled.div`

`

export const ProjectImg = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    object-fit: contain;
`
export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const ProjectTitle = styled.h3`
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 1.5rem;

    @media (max-width: 600px){
        font-size: 1rem;
    }
`
export const ProjectContentTop = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #999;
    display: flex;
    flex-direction: column;
    flex: 1;


`
export const ProjectTechnology = styled.div`
    margin-top: auto;
    ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        margin-right: -.25rem;
        li{
            margin-right: .25rem;
            margin-bottom: .25rem;
            padding .25rem .5rem;
            background-color: #fff;
            border: 1px solid #08d665;
            border-radius: .5rem;
            color: #313131;
            white-space: nowrap;
            cursor: pointer;
            transition: all .3s ease;

            @media (max-width: 600px){
                font-size: 13px;
            }

            &:hover{
                color: #fff;
                box-shadow: 0 0 13px 0 rgb(0 0 0 / 29%);
                background-color: #08d665;
            }

        }
    }
`

export const ProjectContentFooter = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProjectButton = styled.a`
    border-none;
    padding: 5px 10px;
    border-radius: 6px;
    background-color: #ff6651;
    display: flex;
    color: #fff;
    align-items: center;
    cursor: pointer;
    
    span{
        margin-left: 5px;
    }
`

export const ProjectWatching = styled.div`
    font-weight: 300;
    color: #999;
    font-size: 13px;
`

export const ProjectBtnWrap = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    > a:disabled {
        background: red;
    }
`