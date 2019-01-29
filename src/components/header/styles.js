import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: initial;
  align-items: center;
  width: 100%;
  img {
  margin-left: 100px;
  margin-top: 10px; 
  }
  nav {
    justify-items: center;
    display:flex;
    align-content: center;
    margin: auto;
    
    a {
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 14px;
      margin-right: 15px;
      padding: 15px;
      color: #646464;
      text-decoration: none;

      &:hover {
        color: #000f;
        font-weight: bold;
      }
    }
`;
export const User = styled.div`
  min-height: 30px;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 30px;
    height: 20px;
    margin: 10px 10px 0 10px;
    border-radius: 50%;
  }

  }
`;

// export const LogoRese = styled.img`
//   display: flex;
//   justify-content: flex-end;
//   width: 200px !important;
//   margin-left: 800px;
// `;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  color: #646464;

  a {
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 14px;
    color: #646464;

    &:hover {
      color: #000f;
    }
  }
`;

export const SubNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 50px;
  margin: 5px 0px 0px 0px;
  color: #fff;
  background-color: #3c8d9f;

  a {
    display: flex;

    color: #afd2db;
    margin: 5px;
    margin-bottom: 10px;
    padding-right: 55px;
    padding-left: 0px;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;
