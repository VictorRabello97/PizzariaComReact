import styled from "styled-components"

export const BodyContainer = styled.div `

flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
top: -48rem;
margin-top: 8rem;
background-color: transparent;

    

.carousel {
    width: 100%;
    position: relative;
    max-width: auto;
    margin: 0 auto;
    padding: 1rem;
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
    padding: 0.7rem;
    
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
    font-size: 5rem;
    color: white;
    margin-top: 4rem;
    border-bottom: 2px solid red;
    border-radius: 12px;

}
    

    .bannerContainer {
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    width: 100%;
    }


    .bannerContainer img {
        width: 100%;
        justify-items: center;
        border-radius: 12px;
    }


    ///////// MOBILE CONFIGS  ////////// 

    @media (max-width: 1080px) {
    
        grid-template-columns: 1fr;
        top: -40rem;
    
    
        .carousel {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            padding: 1rem;
            width: 100%;
    
        }

    
            .item img {
                width: 100%;
                height: 70%;
                
    
            }
    
            h1{
                font-size: 2rem;
            }
    
            .bannerContainer {
                margin-top: 4rem;
                display: flex;
                width: 100%;
                
            }
            
            .bannerContainer img {
                display: flex;
                width: 100%;
                margin-right: 1rem;
                justify-items: center;
                border-radius: 12px;
            }
            
        }
    
`





        
        




    
    
    
    