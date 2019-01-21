import styled from "styled-components";

export const Container = styled.header`
  background-color: #2a2a2a;

  max-height: 200px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 10px 10px 0px 10px;
  img {
    width: 200px;
  }
`;
export const User = styled.div`
  max-height: 30px;
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
  margin: 5px 0px 0px 0px;
  color: #fff;

  a {
    display: flex;
    color: #fff;
    margin: 5px;
    padding-right: 55px;
    padding-left: 40px;
    text-decoration: none;

    &:hover {
      color: #000f;
    }
  }
`;

export const SubNav = styled.nav`
  display: flex;
  flex-direction: row;

  margin: 5px 0px 0px 0px;
  color: #fff;
  background-color: #3c8d9f;

  a {
    display: flex;

    color: #afd2db;
    margin: 5px;
    margin-bottom: 10px;
    padding-right: 55px;
    padding-left: 40px;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;
