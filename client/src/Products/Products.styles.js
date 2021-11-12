import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'boecklins universe';
  color: #A08C5B;
  `;

export const ModalImage = styled.img`
  width: auto;
  max-height: 700px;
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
      box-shadow: 0px 0px 40px 8px rgba(120, 95, 55, .5);
    }
`;

export const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'boecklins universe';
  color:#A08C5B;
  `

export const ModalDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'boecklins universe';
  color:#A08C5B;
  `
