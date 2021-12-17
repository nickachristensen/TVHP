import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 20px;
    height: 235px;
    box-shadow: 0 0 70px rgba(0, 0, 0, 1);
    background-color:#181510;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'boecklins universe';
    color: #A08C5B;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        padding: 0;
    }
`;

export const HeaderLogo = styled.img`
    width:  100%;
    height: auto;
    position: relative;
    left: 0%;
    padding: 0;
    margin: 0;
    display: block;

    @media (max-width: 600px) {
        width:  200px;
        height: auto;
        position: relative;
        align-items: center;
        left: -150%;
        padding-top: 10px;
        margin: 0;
        display: block;
        
    }
`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media (max-width: 600px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: auto;
        position: relative;
        left: 0%;
    }
`;

export const HomeLogo = styled.img`
    width:  50px;
    height: auto;
    padding: 10px;
`;

export const CartLogo = styled.img`
    width:  50px;
    height: auto;
    padding: 10px;
`;

export const InstaLogo = styled.img`
    width:  50px;
    height: auto;
    padding: 10px;
    padding-right: 5px;
`;

export const LinkWrap = styled.a`
    width:  12%;
`

export const Title = styled.h1`
    font-family: 'boecklins universe';
    position: relative;
    text-align: center;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    flex: 1 0;
    color: white;
    font-size: 5.5vw;
    -webkit-text-stroke: .1px black;
    text-shadow: 0 0 5px white;

    @media (max-width: 600px) {
        font-size: 14vw;
    }

`;
