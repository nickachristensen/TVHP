import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  
`;


export const Card = styled.div`
height: 500px;
width: 300px;

    position: relative;
    transition: all 1s linear;
    transform-style: preserve-3d;
    box-shadow: 2px 5px 10px black;
    border-radius: 10px;
    
  
    &:hover {
      transform: rotateY(180deg);
      cursor: pointer;
    
    }


    `;
export const CardImg = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
    backface-visibility: hidden;
`
export const CardBackImg = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    height: 497px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #181510;
    

  z-index: 1;
  transform: rotateY(180deg);
`

export const CardTitle = styled.h3`
  font-family: 'boecklins universe';
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 10px;
  color:#181510;
  box-shadow: 2px 5px 10px black;
  border-radius: 5px;
  text-decoration: none;
`

