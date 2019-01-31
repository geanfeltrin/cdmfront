import React, { Component } from "react";

import { Container, Tags } from "./styles";

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <div>
          <strong>Categorias</strong>
          <ul>
            <li>
              <a href="/">Marcas</a>
            </li>
            <li>
              <a href="/">Campanhas</a>
            </li>
            <li>
              <a href="/">Rede Sociais</a>
            </li>
          </ul>
        </div>

        <Tags>
          <strong>Tags</strong>
          <div>
            <label>
              <input type="checkbox" value="option1" checked={true} />
              Enfermagem
            </label>
            <label>
              <input type="checkbox" value="option1" checked={false} />
              Enfermagem
            </label>
            <label>
              <input type="checkbox" value="option1" checked={false} />
              Enfermagem
            </label>
            <label>
              <input type="checkbox" value="option1" checked={false} />
              Enfermagem
            </label>
          </div>
        </Tags>
      </Container>
    );
  }
}
