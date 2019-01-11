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
  flex: 1;
  flex-wrap: 1;
  
  /* background */
  background: ${props => `url(${props.img}) no-repeat top center`};
  background-color: #008296;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


  min-height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  

    /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background:${props =>
    `url(${props.img}) no-repeat top center`};
    background-size: cover;`}
  ${media.tablet`background:${props =>
    `url(${props.img}) no-repeat top center`};
    background-size: cover;
  align-items: center;
  justify-content: center;`}
  ${media.phone`background:${props => `url(${props.img}) no-repeat top center`};
    background-size: cover;
  align-items: center;
  justify-content: center;`}  
`;

export const Content = styled.div`
  margin-bottom: 30px;
  img {
    width: 305px;
    margin-bottom: 100px;
  }
  h1 {
    font-size: 50px;
    color: #fff;
    width: 677px;
    flex-wrap: 1;
    margin-bottom: 200px;
    text-align: justify;
    letter-spacing: 3px;
    font-family: "Lato", sans-serif;

    ${media.tablet`display: none;`}
    ${media.phone`display: none;`}
  }
`;

export const Form = styled.form`
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  
  background-color: #fff;
  
  
  -webkit-box-shadow: 3px 6px 6px 0px rgba(0, 0, 0, 0.20);
  -moz-box-shadow: 3px 6px 6px 0px rgba(0, 0, 0, 0.20);
  box-shadow: 3px 6px 6px 0px rgba(0, 0, 0, 0.20);
  flex-wrap: 1;
  justify-content: center;
  align-content: center;

  ${media.desktop`
  width: 500px;
  height: 600px;`}
  ${media.tablet`
  justify-content: center;
  align-content: center;
  margin: auto `}
  ${media.phone`
  width: 500px;
  height: 500px;
  justify-content: center;
  align-content: center;
  padding: 10px;
  margin: 30px;`}

  img{
    margin-left: auto;
    margin-right: auto;  
    margin-bottom: 30px;   
    width: 305px;
  };

  h1 {
    font-size: 40px;
    text-align: center;
    margin: 10px;
    font-family: 'Lato bold', sans-serif;
  };
  
  input {
    margin: 5px;
    margin-top: 10px;
    padding: 0px;
    width: 500px;
    height: 70px;
    background:${props => `url(${props.img}) no-repeat top center`};
    -webkit-box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
    -moz-box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
    box-shadow: 6px 3px 6px 0px rgba(230, 230, 230, 1);
    border: none;
    border-color: #e6e6e6;
    color: #a2a2a2;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
    &::-webkit-input-placeholder {
      color: #a2a2a2;
    }
  }
 
    
  

  button {
    margin: 5px;
    padding: 5px;
    margin-top: 10px;
    align-items: center;
    height: 70px;
    width: 500px;
    background-color: #008296;
    color: #fff;
    -webkit-box-shadow: 6px 3px 6px 1px rgba(230, 230, 230, 1);
    -moz-box-shadow: 6px 3px 6px 1px rgba(230, 230, 230, 1);
    box-shadow: 6px 3px 6px 1px rgba(230, 230, 230, 1);
    font-family: 'Lato', sans-serif;
    outline:none;
    border: none;

    &:hover {
      background-color: #016F80;
    }
  };

  a {
    color: #a2a2a2;
    text-align: center;
    margin-bottom: 20px;
  };  
`;
