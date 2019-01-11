import styled from "styled-components";

export const Container = styled.header`
  background-color: #2a2a2a;

  height: 140px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const IMG = styled.div`
  img {
    width: 200px;
    height: 135px;
    margin: 10px;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  justify-items: flex-end;
  align-items: center;
  color: #fff;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }
  li {
    margin: 10px;
  }
`;
