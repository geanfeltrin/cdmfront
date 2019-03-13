import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/heade2";

import api from '../../services/api'
import { Container, Wrapper, Form } from "./styles";


import {
 
  Button,
  Row,
  Label,
  FormGroup,
  Input,
  Col,
  
} from "reactstrap";

export default class Main extends Component {
  state={
    newPass: "",
    confirmPass: ""
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChangePassword = async id => {
    await api.put(`users/${id}`, {
      password: this.state.modalPassword
    })
  }
  handleClean= () => {
    this.setState({
      newPass: "",
      confirmPass: ""
    })
  }
  render() {
    const { newPass , confirmPass } = this.state
    return (      
      <Wrapper>
        <Header />
        <Container>
          <div>
        <Form onSubmit={this.handleSubmit}>        

          <h1>Alterar senha</h1>
          <input
              type="password"
              name="newPass"
              value={newPass}
              onChange={this.handleInputChange}
              placeholder="Nova Senha"
            />
          
          <div className="user-password">
            <input
              type="password"
              name="confirmPass"
              value={confirmPass}
              onChange={this.handleInputChange}
              placeholder="Confirme a Senha"
            />
          </div>
          <button type="submit">Confirmar</button>
       
        </Form>
        </div>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}
