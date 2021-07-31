import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 280px) and (max-width: 568px){
            padding-top: 45%;
            width: 100%;
            color: #000;
        }
    
    @media (min-width: 569px) and (max-width: 900px){
         padding-top: 20%;
    }

    @media (min-width: 901px){
         padding-top: 15%;
         font-size: 1.7rem;
    }


    h1 {
                font-size: 38pt;
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
`