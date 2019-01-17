import React, { Component } from "react";

import { Container, Tags } from "./styles";

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <h1>Refinar sua pesquisa</h1>
        <div>
          <strong>Categoria > Rede Social</strong>
          <ul>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
            <li>Banner</li>
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
