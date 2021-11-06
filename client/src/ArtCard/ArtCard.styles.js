import styled from "styled-components";


export const Image = styled.img `
    overflow: hidden;
    box-shadow: 2px 5px 10px black;
    cursor: pointer;
    max-width: 20%;
    height: auto;
    align-self: center;
    transition: transform 200ms ease-in;
  

  
    &:hover {
      transform: scale(1.08);
      box-shadow: 0px 0px 40px 8px rgba(120, 95, 55, .5);
    }
`;
