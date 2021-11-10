import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 20px;
    height: 235px;
    box-shadow: 0 0 70px rgba(0, 0, 0, 1);
    background-color:#181510;
`;


export const HeaderLogo = styled.img`

    max-width: clamp 12%;
    max-height: 100%;
    position: relative;
    left: 0%;
`;

export const Title = styled.h1`
    font-family: 'boecklins universe';
    position: relative;
    text-align: center;
    font-size: 7rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    flex: 1 0;
    color: #A08C5B;
    padding-right: 200px;
`;
