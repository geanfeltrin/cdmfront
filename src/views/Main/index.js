import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Featured from "../../components/Featured";
import SideBar from "../../components/sidebar";
import Cards from "../../components/cards";
import Cards2 from "../../components/cards2";
import { Container, Wrapper } from "./styles";
import { Row, Col } from "reactstrap";

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Container>
          {!!localStorage.getItem("@Cdm:category") ? (
            // <Row className="min-height">
            //   {/* <Col sm={2}>
            //     <SideBar />
            //   </Col> */}
            //   <Col sm={12}>
            //     <Cards />
            //   </Col>
            // </Row>
            <div>
              <Cards2 />
            </div>
          ) : (
            <div>
              <Featured />
            </div>
          )}
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}
