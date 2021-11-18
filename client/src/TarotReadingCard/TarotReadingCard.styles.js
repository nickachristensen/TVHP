import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  
`;

export const Content = styled.div`
 font-family: 'boecklins universe';
 text-shadow: 0 0 10px black;
 max-width: 500px;
`


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
  display: flex;
  font-family: 'boecklins universe';
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 10px;
  color:white;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 2px 5px 10px black;
  text-decoration: none;
  -webkit-text-stroke: .1px black;
  text-shadow: 0 0 5px white;
  width: 100%;
`
export const P = styled.p`
  font-family: 'boecklins universe';
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 10px;
  color:white;
  text-shadow: 0 0 5px black;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 2px 5px 10px black;
  border-radius: 10px;
  text-shadow: 0 0 5px black;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`

export const FormTitle = styled.h3`
  display: flex;
  font-family: 'boecklins universe';
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  color:white;
  -webkit-text-stroke: .1px black;
  text-shadow: 0 0 5px white;


`
export const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
  height: 2rem;
  margin: 10px;
  font-family: 'boecklins universe';
  box-shadow: 2px 2px 4px white;
  border: 2px solid white;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }

  `;