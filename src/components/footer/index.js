import React, { Component } from "react";

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
            <small>hduahduudhasu@dhausdhasudhas.com</small>
            <small>hduahduudhasu@dhausdhasudhas.com</small>
          </div>
        </Content>
      </Container>
    );
  }
}
