import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'boecklins universe';
  color: white;
  background: rgba(0,0,0, 0.5);
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  overflow : auto;
  height: 650px;

  @media (max-width: 600px) {
    max-height: 300px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: white;
  -webkit-text-stroke: .1px black;
  text-shadow: 0 0 5px white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 100%;
  height: 100%;
  font-size: 1em;
  text-shadow: 0 0 5px black;

`;

export const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;;
  font-family: 'boecklins universe';
  box-shadow: 1px 1px 2px white;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  `;


