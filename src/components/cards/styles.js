import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 60px;

  h1 {
    margin-left: 15px;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #000000;
  }
  strong {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 20px;
    color: #646464;
    text-align: end;
  }
  .cards-body-img {
    /* width: 300px !important; */
    height: 169px !important;
  }
  .cards-body {
    min-width: 300px !important;
    max-width: 300px !important;
    margin-bottom: 15px;
  }

  img {
    height: 180px;
  }
  .bnt-download {
    background: #ff9900;
    border-radius: 5px;
    border: none;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    text-align: center;

    color: #ffffff;

    &:hover {
      background: #e88b00;
    }
  }
  .title {
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;

    color: #000000;
  }
`;
