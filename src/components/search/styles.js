import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 20px 50px;

  input {
    height: 50px;
    width: 100%;
    padding: 10px;
    -webkit-box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
    box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
    border-radius: 1px;
    border: none;
    font-family: Lato, sans-serif;
    &::-webkit-input-placeholder {
      color: #a2a2a2;
    }
  }

  button {
    height: 50px;
    padding: 0px 30px;
    font-size: 15px;
    color: #fff;
    background-color: #3e91a4;
    border: none;
    font-family: Lato, sans-serif;
  }
`;
