import styled, { css } from "styled-components";
import device from "../../styles/devices";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 60px;  
  overflow-x: none !important;
  width: 100%;
  ${device.phone`
  align-content: center;
  justify-content: center;  
  margin-right: 0px;
  `}
  ${device.mobileS`
  align-content: center;
  justify-content: center;
  
  `}
  ${device.mobileM`
  align-content: center;
  justify-content: center;  
  margin-right: 0px;
  `} 

  h1 {
    margin-left: 15px;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #000000;
    ${device.phone`
    margin-left: 0px;
    
  
  `}
  }
  strong {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 20px;
    color: #646464;
    text-align: end;
    ${device.tablet`       
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    `}
  }
  

  .cards-body {
    min-width: 300px !important;
    max-width: 300px !important;
    margin-bottom: 15px;
  }
  .cards-body-content {
    padding: 0px;
    min-height: 140px !important;
    max-height: max-content !important;
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
    /* margin-bottom: 3rem; */
    font-size: 13px;
    font-style: italic;
    padding-left: 20px;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${props =>
      props.expand === "true"
        ? css`
            &:hover {
              text-overflow: clip;
              width: auto;
              height: 200px;
              white-space: normal;
              position: relative;
            }
          `
        : css`
            &:hover {
              white-space: normal;
            }
          `}
  }

  img {
    height: 180px;
  }
  .bnt-download {
    background: #ff9900;
    height: 35px;
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    width: auto;
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 10px 10px;
    border: 1px solid #ff9900;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(126, 87, 30, 0.5);

    color: #ffffff;

    &:hover {
      background: #e88b00 !important;
    box-shadow: 0px 2px 4px rgba(126, 87, 30, 0.5) !important;
    border: 1px solid #E28800 !important;
    box-sizing: border-box;
    }
  &:active{
    background: #e88b00 !important;
    box-shadow: 0px 2px 4px rgba(126, 87, 30, 0.5) !important;
    border: 1px solid #E28800 !important;
    box-sizing: border-box;
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

    h1{
      margin-left: 0px;
      ${media.lessThan("321px")`
      padding-left: 20px;   
      `}
      ${media.between("322px", "376px")`
      padding-left: 45px;   
      `}
      ${media.between("377px", "426px")`
      padding-left: 75px; 
      `}
      
    }
    strong{
      ${media.lessThan("321px")`
      padding-left: 5px;
      `}
      ${media.between("322px", "376px")`
      padding-left: 30px;   
      `}
      ${media.between("377px", "426px")`
        padding-left: 60px; 
      `}
    }
  }

  .block-with-text {
    text-overflow: ellipsis;

    white-space: nowrap;
    overflow: hidden;
    &:hover {
      text-overflow: clip;
      width: auto;
      white-space: normal;
    }
  }

  .full-width{    
    ${media.lessThan("500px")`
    justify-content: center;
  `} 
  }
  .show-more {
    background: #ffffff !important;
    border: gray 1px solid !important;
    color: gray !important;
    width: 270px;   

    &:hover{
      background: gray !important;
      color: #ffffff !important;
    }
    &:focus{
      background: #ffffff !important;
    border: gray 1px solid !important;
    }
  }
  .box-show-more{
    ${media.between("320px", "425px")`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  }
`;

export const Content = styled.div`
  .txt-center {
    text-align: center;
    ${media.between("320px", "425px")`
     font-size: 1.5rem;
     text-align: center;
  `}
  }
  .txt-welcome {
    text-align: center;
    ${media.between("320px", "425px")`
     font-size: 1.5rem;
     text-align: center;
  `}
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
