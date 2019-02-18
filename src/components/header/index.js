import React, { Component } from "react";

import { Container, Content } from "./styles";
import { Col } from "reactstrap";
import NavBar from "../nav";
import User from "../user";
// import Submenu from "../subnav";
import cdmlogo from "../../assets/cdmlogo.png";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Col className="col-sm-2">
            <a href="/">
              <img src={cdmlogo} alt="Logo" />
            </a>
          </Col>
          <Col className="col-auto center">
            <NavBar />
          </Col>
          <Col className="col-sm-3">
            <User />
          </Col>
        </Content>
      </Container>
    );
  }
}
