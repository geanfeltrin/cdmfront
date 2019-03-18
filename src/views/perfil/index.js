import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/heade2";

import api from '../../services/api'
import { Container, Wrapper, Form } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UsersActions from "../../store/ducks/users"

import {IoEye, IoEyeDisabled} from 'react-icons/lib/io'



import PropTypes from "prop-types";


class Perfil extends Component {
  static propTypes = {
    changePasswordRequest: PropTypes.func.isRequired    
  };

  state={
    newPass: "",   
    user: "",
    type: "password",
    wording: "Show"
  }

  handleChangePassword = e =>{
    e.preventDefault();
    const {changePasswordRequest} = this.props
    const {id} = this.state.user    
    const password = this.state.newPass   
  changePasswordRequest(id, password)

  this.setState({
    newPass: ""
  })
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  handleClean= () => {
    this.setState({
      newPass: ""
          })
  }
  async componentDidMount() {
    const response = await api.get("users/show");
    this.setState({ user: response.data });    
  }

  changeType = () =>{
    const {wording} = this.state
    if(wording === "Show"){
      this.setState({
        wording: "Hide",
        type: "text"
      })
    }else{
      this.setState({
        wording: "Show",
        type: "password"
      })
    }
    
  }

  render() {
    const { newPass, type, wording } = this.state
    
    return (      
      <Wrapper>
        <Header />
        <Container>
          <div>
        <Form onSubmit={this.handleChangePassword}>        
       <div className="txt-box">
          <h1>Alterar senha</h1>
          </div>
          <div className="input-box">    
          <input
              type={type}
              name="newPass"
              value={newPass}
              onChange={this.handleInputChange}
              placeholder="Nova Senha"            />
          <div>          
          <button type="button" className="btn-show" onClick={this.changeType}>{wording === "Show" ? <IoEye size={30} color="black"  /> : <IoEyeDisabled size={30} color="black"  />  }</button>
          </div>       
          </div>     
           <button type="submit" disabled={!newPass}>Confirmar</button>
       
        </Form>
        </div>
       
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perfil);