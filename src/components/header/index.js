import React, { Component } from "react";

import { Container, Nav, Content, User, SubNav } from "./styles";
import cdmlogo from "../../assets/cdmlogo.png";

import user from "../../assets/userlogin.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Content>
          <img src={cdmlogo} />
          <nav>
            <a href="/">Campanhas</a>
            <a href="/">Campanhas</a>
            <a href="/">Campanhas</a>
            <a href="/">Campanhas</a>
          </nav>
        </Content>
      </Container>
    );
  }
}
