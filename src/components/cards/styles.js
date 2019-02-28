import styled from "styled-components";
import device from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 60px;
  overflow: auto;

  ${device.phone`
  margin-right: 0px;
  margin-left: 20px;
  align-content: center;
  justify-content: center;
    
  `}

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

  .cards-body {
    min-width: 300px !important;
    max-width: 300px !important;
    margin-bottom: 15px;
  }
  .cards-body-content {
    padding: 0px;
    min-height: 140px !important;
    max-height: 140px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-title {
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 0px;
  }

  .card-text {
    margin-bottom: 3rem;
    font-size: 13px;
    font-style: italic;
    padding-left: 20px;
  }
  img {
    height: 180px;
  }
  .bnt-download {
    background: #ff9900;
    height: 35px;
    border: none;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    width: 100%;
    text-align: center;
    border-radius: unset;

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
    width: 100%;
    margin-bottom: 20px;
    color: #000000;
    overflow-x: hidden;
  }

  .block-with-text {
    overflow: hidden;
    position: relative;
    line-height: 1.2em;
    max-height: 6em; /* aqui vc controla a altura da caixa de texto */
    text-align: justify;
    margin-right: -1em;
    padding-right: 1em;
  }
  .block-with-text:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const Content = styled.div`
  .txt-center {
    text-align: center;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: 169px !important;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  cursor: "pointer";
`;
