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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-right: 0px;

  ${media.tablet`display:none;`}
  ${media.phone`display:none;`}  
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  a {
    font-size: 14px;
    font-weight: normal;
    line-height: normal;
    font-family: "Lato";
    margin-top: 10px;
    color: #646464 !important;

  }

  span{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 14px;
    color: #646464;
    padding-left: 10px;
    padding-right: 10px;
  }
  .btn {
    
      border: none !important;

      &:active{
        border: none !important;
      }
      &:focus{
        box-shadow: none !important;
      }
      
    

  }
`;
