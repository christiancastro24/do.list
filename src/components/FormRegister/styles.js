import styled from "styled-components"

export const ContainerRegister = styled.form `

    input {
        height: 1.8rem;
        width: 15rem;
    }

    @media (min-width: 300px) and (max-width: 568px) {
        padding-top: 5%;
    }

    @media (min-width: 569px) and (max-width: 1023px){
        padding-top: 1%;
    }

    @media (min-width: 1024px) {
        padding-top: 10%;
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
        height: 100vh;
        
        img {
            width: 55%;
            margin-left: -14.1rem;
            background-color: #000;
        }

        form {
            padding-top: 5.5%;
        }
    }
`