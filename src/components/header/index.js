import React, { Component } from "react";

import { Container, Nav, IMG } from "./styles";
import logo from "../../assets/logo.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <IMG>
          <img src={logo} alt="logo" />
        </IMG>
        <Nav>
          <ul>
            <li>Campanha</li>
            <li>Marca</li>
            <li>Divulgação</li>
            <li>Papelaria</li>
            <li>Estrutura</li>
          </ul>
        </Nav>
      </Container>
    );
  }
}
