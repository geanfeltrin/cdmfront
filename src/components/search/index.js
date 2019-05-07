import React from "react";

import { Container } from "./styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const search = ({ name, title, onSearch, handleInputChange }) => (
  <Container>
    <input
      type="text"
      placeholder="Faça aqui sua pesquisa"
      onChange={handleInputChange}
      name={name}
      value={title}
    />

    <Button
      type="button"
      onClick={onSearch}
      className="btn"
      variant="contained"
    >
      Pesquisar
    </Button>
  </Container>
);

export default search;
