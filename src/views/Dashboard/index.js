import React, { Component } from "react";

import { Container } from "./styles";
import Sidebar from "../../components/Admin/siderbar";
import Header from "../../components/Admin/header";
import { Row, Col } from "reactstrap";

import Users from "../../components/Admin/users";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <Users />
          </Col>
        </Row>
      </Container>
    );
  }
}
