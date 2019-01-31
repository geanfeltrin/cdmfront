import React, { Component } from "react";

import { Container, Content } from "./styles";
import NavBar from "../nav";
import User from "../user";
import cdmlogo from "../../assets/cdmlogo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Container>
        <Content>
          <img src={cdmlogo} alt="Logo" />
          <NavBar />
          <User />
        </Content>
      </Container>
    );
  }
}
