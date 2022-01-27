import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#181510;
    background-image: url(${props => props.img});
    background-size: contain;
    background-position: center;
  
    @media (max-width: 600px) {
    background-size: initial;
    background-repeat: repeat;
  }
`;

export const GalleryCards = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;  
    
`;

export const GalleryButtons = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
    padding-top: 30px;

`;

