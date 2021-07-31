import styled from "styled-components"

export const ContainerDisplay = styled.div `
    padding: 10%;

`
export const Items = styled.div `

@media(min-width: 300px) and (max-width: 1024px) {
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


@media(min-width: 1024px)  {
    display: flex;
    justify-content: space-between;
    width: 55%;
    align-items: center;
    background-color: #37A4A4;
    color: #fff;
    margin: 0.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    flex-wrap: wrap;
    border-radius: 4px;
    font-size: 1.2rem;
}
`

export const ContainerItems = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`