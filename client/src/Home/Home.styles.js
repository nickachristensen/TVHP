import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: calc(100vh - 325px);

  @media (max-width: 600px) {
    background-size: initial;
    background-repeat: repeat;
  }

`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Welcome = styled.div`
 font-family: 'boecklins universe';
 text-shadow: 0 0 10px black;
 text-align: center;
 max-width: 600px;

`