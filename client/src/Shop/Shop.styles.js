import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#181510;
    display:flex;
    padding: 10px;
    background-image: url(${props => props.img});
    background-size: contain;
`;

export const ProductStyle = styled.div`
    vertical-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    overflow : auto;
    height: 680px;
`;

export const CartStyle = styled.div`
    vertical-align: right;
    width: 500px;
`;

