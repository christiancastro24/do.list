import styled from "styled-components"

export const ContainerInput = styled.div`

    input {
        background-color: #f6f6f0;
        height: 0.8rem;
    }

    button {
        margin-left: 0.5rem;
        height: 2.6rem;
    }

    

@media(min-width: 280px) and (max-width: 374px) {
    input {
        width: 9rem;
    }
}

@media(min-width: 375px) and (max-width: 548px) {
    input {
        width: 14rem;
    } 
}

@media(min-width: 549px) {
    input {
        width: 17rem;
    } 
}
`


export const Container = styled.div `
    padding: 3%;

    h1 {
                font-size: 34pt;
                color: #fff;
                letter-spacing: 2px;
  text-shadow:   0px -6px 0 #212121,
                 6px  0px 0 #212121,
                -6px  0px 0 #212121,
                 6px  0px 0 #212121,
                -6px -6px 0 #212121,  
                 6px -6px 0 #212121,
                -6px  6px 0 #212121,
                 6px  6px 0 #212121,
                -6px  8px 0 #212121,
                 0px  8px 0 #212121,
                 6px  8px 0 #212121,
                 0 9px 1px rgba(0,0,0,.1),
                 0 0 6px rgba(0,0,0,.1),
                 0 6px 3px rgba(0,0,0,.3),
                 0 2px 6px rgba(0,0,0,.2),
                 0 8px 8px rgba(0,0,0,.5),
                 0 4px 4px rgba(0,0,0,.2),
                 0 6px 6px rgba(0,0,0,.5);
    }

    @media(min-width: 300px) and (max-width: 768px) {
      padding: 15%;
}
`


