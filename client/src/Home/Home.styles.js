import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: space-evenly;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: calc(100vh - 325px);
`;

export const Welcome = styled.div`
 font-family: 'boecklins universe';
 text-shadow: 0 0 10px black;
 text-align: center;
 max-width: 600px;
`