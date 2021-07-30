import styled from "styled-components"

export const ContainerRegister = styled.form `

    input {
        height: 1.8rem;
        width: 15rem;
    }

    @media (min-width: 300px) and (max-width: 568px) {
        padding-top: 30%;
    }

    @media (min-width: 569px) and (max-width: 1023px){
        padding-top: 20%;
    }

    @media (min-width: 1024px) {
        padding-top: 15%;
    }
`

export const ImageAndForm = styled.div`

@media (min-width: 300px) and (max-width: 1000px){
        img {
            display: none;
        }
    }

@media (min-width: 1001px) {
        display: flex;
        justify-content: space-evenly;
        height: 102.3vh;
        overflow: hidden;
        
        img {
            width: 61%;
            margin-left: 1rem;
            background-color: #000;
        }

        form {
            padding: 17% 12%;
        }
    }
`