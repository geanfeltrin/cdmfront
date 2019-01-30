import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 20px 50px;
  margin-bottom: 50px;
  justify-content: center;

  input {
    height: 50px;
    width: 50%;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Lato", sans-serif;
    &::-webkit-input-placeholder {
      color: #a2a2a2;
    }
  }

  button {
    height: 50px;
    padding: 0px 30px;
    font-size: 15px;
    background: #3c8d9f;
    border: none;
    border-radius: 0px 5px 5px 0px;
    font-family: "Lato", sans-serif;
    &:hover {
      background: #337c8c;
    }
  }
  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    text-align: center;

    color: #ffffff;
  }
`;
