import React, { Component } from "react";

import barrafooter from "../../assets/barrafooter.png";
import logoresidencia from "../../assets/logoresidencia.png";

import { Container, Content } from "./styles";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <h1>Entrar em contato</h1>
        <Content>
          <div>
            <span>Endereço</span>
            <small>Av. Santa Cruz, 327 Sorocaba - SP . 18.050-260</small>
          </div>
          <div>
            <span>Telefone</span>
            <small>(82) 33117707</small>
          </div>
          <div>
            <span>Email</span>
            <small>contato@residenciaeducacao.com.br</small>
            <small>implantação@residenciaeducacao.com.br</small>
          </div>
          <div className="logo">
            <img src={logoresidencia} alt="Logo Residência" />
          </div>
        </Content>
        <img src={barrafooter} alt="Barra Footer" />
      </Container>
    );
  }
}
