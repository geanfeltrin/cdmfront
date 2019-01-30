import styled from "styled-components";

export const Container = styled.footer`
  display: block;
  height: 160px;
  flex: 1;
  background-color: #ffffff;
  flex-direction: column;

  h1 {
    color: #000000;
    margin: 15px 95px;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
  }

  img {
    display: flex;
    width: 100%;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 70px;

  div {
    flex-direction: column;
    display: flex;
    width: 200px;
    border-width: 1px;
    margin: 10px;

    &:first-child {
      margin-left: 30px;
      margin-right: 40px;
    }
    &:last-child {
      margin-left: 0;
    }
  }
  span {
    color: #000000;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
  }
  small {
    color: #646464;
    margin-top: 5px;
    text-decoration: none !important;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 14px;
  }
  div.logo {
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 480px;
    img {
      width: 100px;
    }
  }
`;
