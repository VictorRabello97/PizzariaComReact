import styled from "styled-components";



export const HeaderContainer = styled.div `

    
    
    .mainContainer{
    width: -30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: #D6D18D;
    border-radius: 5px;

    }


    p {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: transparent;
        font-size: 0.9rem;
        color: black;
        font-weight: 400;
        transition: 0.3s;
        font-family: 'Barlow', sans-serif;

}

    p:hover{
        color: #D26C6A;
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
    }

    p{
        font-size: 0.8rem;
    }
}
`