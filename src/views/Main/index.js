import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Search from "../../components/search";
import SideBar from "../../components/sidebar";
import { Container, Wrapper, Content } from "./styles";

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />

        <Container>
          <Search />
          <Content>
            <SideBar />
            <h1>Heloo WOrd</h1>
          </Content>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}
