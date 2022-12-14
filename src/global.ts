import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: black;
  }
  
:root{
  
    outline: 0;
    font-size: 2rem;
    overflow-x: hidden;


    @media (max-width: 1080px) {
            font-size: 0.7rem; 
        }

        @media (min-width: 375px) {
        font-size: 1rem; 

      }

      
      
      
      
    }
    
    @media (max-width: 768px){
  .wrapper{
      grid-template-columns: 1fr;
  }
  }

`

// background: linear-gradient(to right, hsl(0, 0%, 9%), rgb(103, 107, 107)); FOOTER