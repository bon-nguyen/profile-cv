import styled from "styled-components/macro";

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;

    @media (max-width: 767px){
        font-size: 1.75rem;
    }

    span{
        color: #08d665;
    }
`

export const SectionTitleImg = styled.img`
    max-width: 100%;
    object-fit: contain;

    @media (max-width: 767px){
        max-width: 160px;
    }
`

export const SectionContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`