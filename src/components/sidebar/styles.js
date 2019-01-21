import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  height: 100%;
  width: 200px;
  border-width: 1px;
  margin-left: 50px;

  background-color: transparent;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 20px;
    color: #000;
    margin: 5px 0px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  strong {
    color: #000;
    margin-bottom: 15px;

    font-weight: bold;
    font-size: 15px;
  }
  ul {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    overflow-y: scroll;
    width: 150px;
    height: 200px;
    margin: 15px;
  }
  li {
    color: #000;

    margin-bottom: 5px;
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
  input {
    color: #000;
    margin-right: 10px;
    font-size: 13px;
    display: flex;
  }

  label {
    color: #000;
    font-size: 13px;

    margin: 5px;
    display: flex;
  }
  strong {
    color: #000;
    margin-bottom: 15px;

    font-weight: bold;
    font-size: 20px;
  }
`;
