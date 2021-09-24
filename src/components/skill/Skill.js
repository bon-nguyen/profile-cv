import styled from "styled-components/macro";
// {SkillSection, SkillContainer, SkillWrap
export const SkillSection = styled.section`
    padding: 3rem 0;
    position: relative;
    background-color: #e5fbee;
`

export const SkillContainer = styled.div`
    padding: 0 10px;
    max-width: 1100px;
    margin: 0 auto;
`

export const SkillWrap = styled.div`

`

export const SkillList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 600px){
        justify-content: flex-start;
    }
    > li{
        cursor: pointer;
        @media (max-width: 767px){
            margin-bottom: .5rem;
        }
    }
`

export const SkillImg = styled.img`

`