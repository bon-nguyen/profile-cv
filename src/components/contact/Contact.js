import styled from "styled-components/macro";

export const ContactSection = styled.section`
    padding: 3rem 0;
    position: relative;
    background-color: #e5fbee;
`

export const ContactContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px;
`

export const ContactWrap = styled.div`
    position: relative;
    max-width: 100%;
`

export const ContactFormGroup = styled.div`

    margin-bottom: 1rem;


`

export const ContactFormGroupItem = styled.div`
    position: relative; 

    input{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #333;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #333;
        outline: none;
        background: transparent;
    }

    label{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #333;
        pointer-events: none;
        transition: .5s;
    }

    input:focus ~ label {
      top: -20px;
      left: 0;
      color: #03e9f4;
      font-size: 12px;
    }

    input[value]:not([value=""]) ~ label{
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
    }

`