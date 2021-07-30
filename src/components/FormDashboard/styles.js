import styled from "styled-components"

export const ContainerDisplay = styled.div `
    padding: 10%;

`

export const Items = styled.div `

@media(min-width: 300px) and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    background-color: #37A4A4;
    color: #fff;
    margin: 0.4rem;
    flex-wrap: wrap;
    border-radius: 4px;
}
`