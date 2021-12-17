import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#181510;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;  
    background-image: url(${props => props.img});
    background-size: contain;
    background-position: center;

    @media (max-width: 600px) {
    background-size: initial;
    background-repeat: repeat;
  }
`;
