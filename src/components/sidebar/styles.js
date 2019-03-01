import styled, { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const Container = styled.aside`
  display: flex;
  border-width: 1px;
  margin-left: 30px;
  margin-top: 0px;
  max-width: 200px;
  background-color: transparent;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${media.tablet`display:none;`}
  ${media.phone`display:none;`}  

  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #000000;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-top: 0px;

    &:first-child {
      border-bottom: 1px solid #e7e7e7;
    }
  }
  strong {
    font-family: "Lato";
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 20px;
    color: #000000;
  }
  ul {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    margin: 8px;
    list-style-type: none;
  }
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    text-decoration: none;
    margin: 12px;
    margin-bottom: 0px;
    margin-top: 0px;
    color: #646464;
    &:first-child {
      margin-top: 12px;
    }
  }
  a {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    color: #646464;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: #646464;
      font-weight: bold;
    }
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
    margin-right: 10px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 20px;

    background: #646464;
    color: #fff;
    content: "\2713";
    text-align: center;
  }

  label {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    color: #646464;

    margin: 0px 5px 5px 5px;

    display: flex;
  }
  strong {
    color: #000;
    margin-bottom: 15px;

    font-weight: bold;
    font-size: 20px;
  }
`;
