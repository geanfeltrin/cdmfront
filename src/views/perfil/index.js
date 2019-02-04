import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import Cards from "../../components/cards";
import { Container, Wrapper } from "./styles";
import { Row, Col } from "reactstrap";

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Container>
          <Row>
            <Col sm={10} />
          </Row>
          <Footer />
        </Container>
      </Wrapper>
    );
  }
}
