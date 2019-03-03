import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/heade2";
// import Search from "../../components/search";
import SideBar from "../../components/sidebar";
import Cards from "../../components/cards";
import { Container, Wrapper } from "./styles";
import { Row, Col } from "reactstrap";

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Container>
          <Row className="min-height">
            <Col sm={2}>
              <SideBar />
            </Col>
            <Col sm={10}>
              <Cards />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}
