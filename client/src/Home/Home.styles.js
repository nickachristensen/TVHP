import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: space-evenly;
  background-color:#CBB682;
  min-height: calc(100vh - 325px);
`;