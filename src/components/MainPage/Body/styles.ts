import styled from "styled-components"

export const BodyContainer = styled.div `

flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
top: -48rem;
margin-top: 13rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Great Vibes';
    font-weight: 200;
    font-size: 5rem;
    color: white;
    padding: 0.8rem;
    margin-top: 4rem;
    border-top: 1px solid #D6D18D;
    width: 100%;
    border-radius: 55px;

}
    

    .bannerContainer {
    margin-bottom: 4rem;
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
    
        .carousel {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            width: 100%;    
        }

        .inner {
            height: 20rem;
        }

        .item {
            margin: 0rem -3.2rem;
        }
    
            .item img {
                width: 70%;
                height: 70%;
                
    
            }
    
            h1{
                font-size: 2rem;
            }
    
            .bannerContainer {
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





        
        




    
    
    
    