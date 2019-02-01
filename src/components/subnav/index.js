import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
  Col,
  Row
} from "reactstrap";

import { Container } from "./styles";

export default class subnav extends Component {
  static propTypes = {
    NavbarToggler: PropTypes.arrayOf({
      type: PropTypes.string,
      tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    })
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Submenu>
        <Navbar color="transparent" light expand="md">
          <Nav className="ml-auto" navbar />

          <NavLink href="/sub">Marca</NavLink>
          <NavLink href="/sub">Marca</NavLink>
          <NavLink href="/sub">Marca</NavLink>
        </Navbar>
      </Submenu>
    );
  }
}
