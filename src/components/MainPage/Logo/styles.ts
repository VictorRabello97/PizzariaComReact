import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 0vh;
    

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container img {
        display: flex;
        margin-top: 6rem;
        margin-bottom: 6rem;
        width: 17rem;
        height: 17rem;
    }

    @media (max-width: 1080px) {
        .container{
        display: flex;

    }

    .container img {
        top: 0;
        width: 13rem;
        height: 13rem;
}
    }


`