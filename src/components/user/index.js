import React, { Component } from "react";
import { Container } from "./styles";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem
} from "reactstrap";
import user from "../../assets/userlogin.png";

export default class User extends Component {
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
    return (
      <Container>
        <img src={user} />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              Usuário
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a" href="/blah">
                Editar Perfil
              </DropdownItem>
              <DropdownItem tag="a" href="/blah">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Dropdown>
      </Container>
    );
  }
}
