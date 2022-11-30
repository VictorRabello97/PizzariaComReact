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
        width: 200px;
        height: 200px;
    }

    @media (max-width: 1080px) {
        .container{
        display: flex;

    }

    .container img {
        display: flex;
        position: absolute;
        top: 0;
        width: 150px;
        height: 150px;
}
    }


`