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
  
`;


export const HeaderLogo = styled.img`

    width:  12%;
    height: auto;
    position: relative;
    left: 0%;
`;

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
    padding-right: 180px;


`;
