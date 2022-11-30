import styled from "styled-components";



export const HeaderContainer = styled.div `

    
    
    .mainContainer{
    width: -30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: linear-gradient(to right, hsl(0, 92%, 48%), rgb(241, 231, 77));
    border-radius: 12px;
   

    }


    p {
        align-items: center;
        display: flex;
        flex-direction: column;
        background: transparent;
        font-weight: 200;
        color: white;
        transition: 0.3s;
}

    p:hover{
        color: yellow;
        cursor: pointer;
    }

    .backgroundicons{
        background-color: transparent;
}

@media (max-width: 1080px) {
    
    .mainContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-items: center;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        background-color: transparent;
    }

    p{
        font-size: 0.8rem;
    }
}
`