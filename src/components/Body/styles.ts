import styled from "styled-components"

export const BodyContainer = styled.div `

max-width: 100%;
flex-direction: column;
margin-left: 10rem;
position: relative;
display: flex;
align-items: center;
justify-content: center;
top: -48rem;
margin-top: 8rem;
background-color: transparent;

@media (max-width: 375px){
    
    grid-template-columns: 1fr;
    }
    


    

.carousel {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: grab;
}

.inner {
    display: flex;

}

.item {
    min-height: 400px;
    min-width: 400px;
    padding: 0.9rem;
    
}

.item img {
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
}

h1{
    font-family: 'Great Vibes';
    font-weight: 200;
    font-size: 7rem;
    color: white;
    margin-top: 4rem;
}



@media (max-width: 1080px){

    grid-template-columns: 1fr;
    top: -40rem;

    .carousel {
        display: flex;
        border-radius: 12px;
        overflow: hidden;
        grid-template-columns: 1fr;
        padding: 1rem;

    }

    .item img {
    width: 100%;
    height: 80%;

        }

        h1{
            font-size: 2rem;
        }
    }

 
    


`