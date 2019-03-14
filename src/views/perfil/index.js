import React, { Component } from "react";
import Footer from "../../components/footer";
import Header from "../../components/heade2";

import api from '../../services/api'
import { Container, Wrapper, Form } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UsersActions from "../../store/ducks/users"
import user from '../../assets/favicon.png'
import PropTypes from "prop-types";


class Perfil extends Component {
  static propTypes = {
    changePasswordRequest: PropTypes.func.isRequired    
  };

  state={
    newPass: "",
    confirmPass: "",
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
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  handleClean= () => {
    this.setState({
      newPass: "",
      confirmPass: ""
    })
  }
  async componentDidMount() {
    const response = await api.get("users/show");
    this.setState({ user: response.data });
    const {id} = this.state.user
    console.log(id)
    console.log(this.state.user)
  }



  render() {
    const { newPass , confirmPass, type, wording } = this.state
    console.log(type)
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
              placeholder="Nova Senha"
            /> 
          
         
          </div>
        
          
            {/* <input
              type="password"
              name="confirmPass"
              value={confirmPass}
              onChange={this.handleInputChange}
              placeholder="Confirme a Senha"
            />          */}

          <button type="submit">Confirmar</button>
       
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