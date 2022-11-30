import styled from "styled-components";

export const MapContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

    h1{
        display: flex;
        width: 100vh;
        font-size: 5rem;
        margin-left: 25%;
        width: 50%;
        color: white;
        text-align: center;
        font-weight: 200;
        font-family: 'Great Vibes';
        border-bottom: 2px solid red ;
        border-radius: 12px;
    }
    
    .nossoEspaço{
        display: flex;
        justify-content: center;
    }
    
    .nossoEspaço img {
        display: flex;
        padding: 1rem;
        width: 51%;
    }

    @media (max-width: 1080px) {

        margin-top: -3rem;

        .nossoEspaço{
        display: flex;
        margin-top: 0;
        justify-content: center;
    }

    .nossoEspaço img {
        display: flex;
        padding: 0.2rem;
        width: 50%;
        margin-bottom: 0.5rem;
    }

    h1{
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    }
    

`