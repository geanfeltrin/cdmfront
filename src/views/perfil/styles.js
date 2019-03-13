import styled from "styled-components";
import device from "../../styles/devices";
import media from "styled-media-query";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: hidden !important;
`;

export const Container = styled.div`
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 30px;
  overflow-y: none !important;
  overflow-x: none !important;

  ${device.mobileS`
  align-content: center;
  justify-content: center;
  margin-left: 1em;
  margin-top: 1em;
  `}
  ${device.phone`
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1em;
  `}
  > div {
    width: 100%;
  }
  .divider {
    border-top: 5px solid #e7e7e7;
  }

  ${device.mobileL`
  margin-right: 0px;
  
  `}
  .min-height {
    min-height: 420px;
    overflow-x: none !important;
    display:flex;
    justify-content: center;
    align-items: center;

  ${media.lessThan("374px")`
    margin-left: -1em !important;
  `}
  ${media.between("374px", "424px")`
  margin-left: 0em !important;
  `}

  ${media.between("424px", "450px")`
  margin-left: 1.5em !important;
  `}
  ${media.between("424px", "450px")`
  margin-left: 1.5em !important;
  `}
  ${media.greaterThan("2000px")`
  min-height: 1530px;
  `}
  
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;

  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const Form = styled.form`
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  
  width: 500px;
  background-color: #fff;

  -webkit-box-shadow: 3px 6px 6px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 6px 6px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 6px 6px 0px rgba(0, 0, 0, 0.2);
  flex-wrap: 1;
  justify-content: center;
  align-content: center;

  ${device.mobileL`
      padding: 20px;
      width: 100%;
      `}
  ${device.mobileM`
      padding: 20px;
      width: 100%;
      `}
  ${device.mobileS`
      padding: 0px;
      width: 100%;
      `}


  img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 305px;
    ${device.mobileS`
        margin-bottom: 0px;      
      `}
  }

  h1 {
    font-size: 40px;
    text-align: center;
    margin: 10px;
    font-family: "Lato bold", sans-serif;

    ${device.mobileS`
        font-size: 35px;     
      `}
  }

  
  input {
    margin: 5px;
    margin-top: 10px;
    padding-left: 30px;
    width: 100%;
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
    ${device.mobileS`
    width: 90%;
    `}
  }

  button {
    margin-left: 14px;
    margin-top: 10px;
    align-items: center;
    height: 70px;
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

    ${device.mobileS`
    width: 85%;
    `}
  }

  a {
    color: #a2a2a2;
    text-align: center;
    margin-bottom: 20px;

    &:hover {
      text-decoration: none;
      color: #0000;
    }
  }
`;