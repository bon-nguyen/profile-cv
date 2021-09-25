import styled, { css } from "styled-components/macro";
import ContactField from "./ContactField";
import ContactArea from "./ContactArea";

export const ContactSection = styled.section`
    padding: 3rem 0;
    position: relative;
    background-color: #e5fbee;
`

export const ContactContainer = styled.div`
    padding: 0 10px;
    max-width: 800px;
    margin: 0 auto;
`
export const ContactWrap = styled.div`

`

export const ContactFormGroup = styled.div`
    position: relative;
    margin-bottom: 1rem;

    label{
        font-size: 1rem;
        position: absolute;
        left: 20px;
        transition: font .1s ease,top .1s ease,transform .1s ease;
        top: 50%;
        transform: translateY(-50%);
    }
`
export const ContactFormArea = styled(ContactArea)`
    box-sizing: border-box;
    outline: none;
    border: none;
    max-width: 100%;
    width: 100%;
    padding: 1rem;
    border-radius: .5rem;

    ::placeholder {
        color: #333;
    }
`

export const ContactFormField = styled(ContactField)`
    background-color: #fff;
    border: 0;
    border-radius: .5rem;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding: 16px 20px 0;
    box-sizing: border-box;
    
    &:focus,
    &:active{
        outline: 0;
        &~label{
            top: 7px;
            font-size: 12px;
        }
    }
    &.hasText{
        &~label{
            top: 7px;
            font-size: 12px;
        }
    }
    ${({ valid }) =>
    valid &&
    css`
        box-shadow: 0 0 10px rgb(0, 156, 38);
        &:focus,
        &:active{
                &~label{
                    top: 7px;
                    font-size: 12px;
                }
            }
        }
    `}
    ${({ error }) =>
    error &&
    css`
        box-shadow: 0 0 10px #e87c03;
    `}
    
`

export const ContactFormError = styled.div`
    color: #e87c03;
    font-size: 14px;
    display: inline-block;
    transform: translateY(-16px);
    padding-top: .5rem;
    padding-left: 1rem;
`
export const ContactSubmit = styled.button`
    border-radius: 1.5rem;
    border: none;
    white-space: nowrap;
    cursor: pointer;
    padding: 1rem 1.75rem;
    color: #fff;
    font-size: 16px;
    background: #08d665;
    white-space: nowrap;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 29%);
    font-weight: 500;
    transition: all .3s ease-in-out;

    &:hover{
        transition: all .3s ease-in-out;
        background: #fff;
        color: #333;
    }

    @media (max-width: 600px){
        display: inline-block;
        width: 100%;
    }
`

export const ContactCode = styled.p`
    color : #08d665;
`