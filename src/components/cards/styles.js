import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;

  h1 {
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  margin: 20px;
  flex-direction: column;
  background: #fff;
  border-radius: 2px;
  border-color: #e6e6e6;
  -webkit-box-shadow: 4px 4px 5px 0px rgba(230, 230, 230, 1);
  -moz-box-shadow: 4px 4px 5px 0px rgba(230, 230, 230, 1);
  box-shadow: 4px 4px 5px 0px rgba(230, 230, 230, 1);

  img {
    width: 400px;
    height: 224px;
  }

  h2 {
    font-size: 18px;
    margin: 5px 10px 3px 10px;
  }
  small {
    font-size: 12px;
    margin: 0px 10px 5px 10px;
  }
  div {
    display: flex;
    flex-direction: row;

    margin: 30px 10px 3px 10px;
    justify-content: space-between;
  }
  ul {
    color: #8f8f8f;
    font-size: 15px;
    margin-left: 30px;
  }

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    background-color: #ff9900;
    width: 130px;
    height: 36px;
    margin-top: 30px;
    margin-right: 20px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(230, 230, 230, 1);
    box-shadow: 2px 2px 5px 0px rgba(230, 230, 230, 1);
  }
`;
