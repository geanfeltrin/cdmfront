import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../store/ducks/auth";

import { Container } from "./styles";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem
} from "reactstrap";
import user from "../../assets/favicon.png";

class User extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { signOut } = this.props;
    return (
      <Container>
        <img src={user} alt="Imagem do Usuário" />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret />
            <DropdownMenu>
              {/* <DropdownItem tag="a" href="/perfil">
                Alterar senha
              </DropdownItem> */}
              <DropdownItem href="/" onClick={signOut}>
                Sair
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Dropdown>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
