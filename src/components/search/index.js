import React from "react";

import { Container } from "./styles";

const search = ({ name, title, onSearch, handleInputChange }) => (
  <Container>
    <input
      type="text"
      placeholder="Faça aqui sua pesquisa"
      onChange={handleInputChange}
      name={name}
      value={title}
    />
    <button type="button" onClick={onSearch}>
      <span>Pesquisar</span>
    </button>
  </Container>
);

export default search;
