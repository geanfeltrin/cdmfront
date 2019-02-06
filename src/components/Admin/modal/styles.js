import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: ${props => (props.size === "big" ? 600 : 400)}px;

  form {
    > h1 {
      font-size: 40px;
      text-align: center;
      margin: 10px;
      font-family: "Lato bold", sans-serif;
    }

    > input {
      margin: 5px;
      margin-top: 10px;
      padding: 0px;
      width: 500px;
      height: 70px;
      background: ${props => `url(${props.img}) no-repeat top center`};
      -webkit-box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
      -moz-box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
      box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
      border: none;
      border-color: #e6e6e6;
      color: #a2a2a2;
      font-size: 15px;
      font-family: "Lato", sans-serif;
      &::-webkit-input-placeholder {
        color: #a2a2a2;
      }
    }
    > button {
      margin: 5px;
      padding: 5px;
      margin-top: 10px;
      align-items: center;
      height: 70px;
      width: 500px;
      background-color: #008296;
      color: #fff;
      -webkit-box-shadow: 6px 3px 6px 1px rgba(230, 230, 230, 1);
      -moz-box-shadow: 6px 3px 6px 1px rgba(230, 230, 230, 1);
      box-shadow: 6px 3px 6px 1px rgba(230, 230, 230, 1);
      font-family: "Lato", sans-serif;
      outline: none;
      border: none;

      &:hover {
        background-color: #016f80;
      }
    }

    > a {
      color: #a2a2a2;
      text-align: center;
      margin-bottom: 20px;

      &:hover {
        text-decoration: none;
        color: #0000;
      }
    }
  }
`;
