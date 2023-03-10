import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 200px 0;
  margin: auto;

  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

export const ContainerList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const List = styled.div`
  width: 90%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
