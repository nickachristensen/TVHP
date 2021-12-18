import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'boecklins universe';
  `;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 5px;
  text-align: center;
  width: 100%;
  `;

export const Button = styled.button`
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
  height: 2rem;
  font-family: 'boecklins universe';
  box-shadow: 2px 5px 10px black;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
  `;

export const ModalImage = styled.img`
  width: auto;
  max-height: 700px;

  @media (max-width: 600px) {
    max-width: 300px;
    height: auto;
  }
`
export const Image = styled.img `
    overflow: hidden;
    box-shadow: 2px 5px 10px black;
    cursor: pointer;
    max-width: 300px;
    height: auto;
    align-self: center;
    margin: 15px auto;
    transition: transform 200ms ease-in;
    
  

  
    &:hover {
      transform: scale(1.08);
      box-shadow: 2px 5px 10px black;
    }
`;

export const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'boecklins universe';
  color: white;
  `

export const ModalDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'boecklins universe';
  color: white;
  `
