import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  .height {
    height: 60px !important;
  }
  nav {
    height: 60px !important;
  }
  li {
    list-style-type: none !important;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }
`;
export const Submenu = styled.nav`
  background-color: #3c8d9f;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  a {
    color: #ffffff;
  }
`;
