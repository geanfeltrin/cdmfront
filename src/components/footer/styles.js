import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  height: 240px;
  background-color: #2a2a2a;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 15px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    flex-direction: column;
    display: flex;
    width: 200px;
    border-width: 1px;
    margin: 0px 30px 30px 30px;
  }
  span {
    color: #fff;
    font-size: 30px;
  }
  small {
    font-size: 20px;
    color: #ababab;
    margin-top: 5px;
    text-decoration: none !important;
  }
`;
