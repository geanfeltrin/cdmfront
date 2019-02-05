import React, { Component } from "react";

import { Container } from "./styles";
import Sidebar from "../../components/Admin/siderbar";
import Header from "../../components/Admin/header";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
      </Container>
    );
  }
}
