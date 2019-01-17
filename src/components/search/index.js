import React, { Component } from "react";

import { Container } from "./styles";

export default class Search extends Component {
  render() {
    return (
      <Container>
        <input type="text" placeholder="Faça aqui sua pesquisa" />
        <button type="submit">Pesquisar</button>
      </Container>
    );
  }
}
