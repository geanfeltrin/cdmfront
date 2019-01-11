import React, { Component } from "react";

import { Container, Form, Content } from "./styles";
import BackgroundImg from "../../assets/background.png";
import logo from "../../assets/logo.png";
import logoRese from "../../assets/logoRese.png";
// import user from "../../assets/userlogin.png";

export default class Login extends Component {
  render() {
    return (
      <Container img={BackgroundImg}>
        <Content>
          <img src={logoRese} alt="logo Residencia" />
          <h1>
            A força da marca <br />{" "}
            <b>
              <strong>Residência</strong>
            </b>{" "}
            criando <br />
            oportunidades para você.
          </h1>
        </Content>

        <Form>
          <img src={logo} alt="Logo" />

          <h1>Faça Seu login</h1>

          <input type="text" placeholder="Nome de Usuário" />

          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
          <a href="#">Esqueceu sua senha</a>
        </Form>
      </Container>
    );
  }
}
