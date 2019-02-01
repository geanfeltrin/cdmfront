import React, { Component } from "react";

import { Container, Content } from "./styles";
import NavBar from "../nav";
import User from "../user";
// import Submenu from "../subnav";
import cdmlogo from "../../assets/cdmlogo.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Content>
          <img src={cdmlogo} alt="Logo" />
          <NavBar />
          <User />
        </Content>
      </Container>
    );
  }
}
