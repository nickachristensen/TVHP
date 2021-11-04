import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;


export const Card = styled.div`
    overflow: hidden;
    box-shadow: 0 2px 20px #181510;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: transform 200ms ease-in;
  

  
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 3px 8px 8px rgba(120, 95, 55, .8);
    }


    `;
export const CardImg = styled.img`

  transition: transform 2s, filter 1.5s ease-in-out;
  transform-origin: center center;
  filter: brightness(100%);

  &:hover {
    filter: brightness(150%);
    transform: scale(1.3);
}
`
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding-top: 15px;
  text-align: center;
  margin-bottom: 1rem;
  color:#181510;
`

