import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .divider {
    border-top: 5px solid #e7e7e7;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
