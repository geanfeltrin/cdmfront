import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-height: 70px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    width: 100px;
    margin-left: 100px;
    margin-top: 10px;
  }
  nav {
    justify-items: center;
    display: flex;
    align-content: center;
    margin: auto;

    a {
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      margin-right: 15px;
      padding: 15px;
      color: #646464;
      text-decoration: none;

      &:hover {
        color: #000f;
        font-weight: bold;
      }
    }
  }
`;
