import styled, { css } from "styled-components";
import device from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px 20px;
  justify-content: center;

  .search {
    display: flex;
    justify-content: center;
    width: 100%;

    div {
      width: 100% !important;
      justify-content: center;
    }

    input {
      width: 50% !important;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 5rem;
    ${device.phone`
      padding: 0 1rem; 
      `}

    .category {
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
    .subcategory {
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 15px;
      color: #646464;
      text-align: end;
      margin-left: 15px;
      ${device.tablet`       
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      `}
      ${device.phone`
      margin-left: 0px; 
      `}
    }
  }

  .card {
    max-width: 300px;
    margin: 20px;
    outline: none;
  }
  .media {
    height: 200px;
    outline: none;
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

  .content-showMore {
    display: flex;
    justify-content: center;
    width: 100%;

    .btn {
      max-width: 200px !important;
      background: #3c8d9f;
      &:hover {
        background: #337c8c;
        color: #fff;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 5rem;
  ${device.phone`
      padding: 0px; 
      `}
`;
