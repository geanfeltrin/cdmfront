import React, { Component } from "react";

import { Container, Nav, Content, User, SubNav, LogoRese } from "./styles";
import logo from "../../assets/Ativo1.png";
import logoResidencia from "../../assets/Logo_Residencia.png";
import user from "../../assets/userlogin.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Content>
          <img src={logo} alt="logo" />
          {/* <LogoRese src={logoResidencia} alt="logo" /> */}
          <User>
            Usuário
            <img src={user} alt="usuário" />
          </User>
        </Content>
        <Nav>
          <a href="#">Campanha</a>
          <a href="#">Marca</a>
          <a href="#">Divulgação</a>
          <a href="#">Papelaria</a>
          <a href="#">Estrutura</a>
        </Nav>
        <SubNav>
          <a href="#">Campanha</a>
          <a href="#">Marca</a>
          <a href="#">Divulgação</a>
          <a href="#">Papelaria</a>
          <a href="#">Estrutura</a>
        </SubNav>
      </Container>
    );
  }
}
