import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#181510;
    height: 34px;
    box-shadow: 0 0 70px rgba(0, 0, 0, 1);
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;