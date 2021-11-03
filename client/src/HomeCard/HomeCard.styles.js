import styled from "styled-components";



export const Card = styled.div`
    overflow: hidden;
    box-shadow: 0 2px 20px #d4af37;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
  

  
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 3px 15px 8px #d4af37;
    }


    `;
export const CardImg = styled.img`

  transition: transform 2s, filter 1.5s ease-in-out;
  transform-origin: center center;
  filter: brightness(50%);

  &:hover {
    filter: brightness(100%);
    transform: scale(1.3);
}
`
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 20px;

  text-align: center;
  margin-bottom: 1rem;
`

