import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
        border-radius: 5px;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        padding: 5px;
        margin: 10px;
        font-family: 'boecklins universe';
        box-shadow: 2px 5px 10px black;
        border: 1px solid white;
        align-content: center;
        -webkit-text-stroke: .1px black;
        text-shadow: 0 0 5px white;
        

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`