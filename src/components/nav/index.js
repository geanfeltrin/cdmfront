import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Container } from "./styles";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="transparent" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>MARCAS</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 1
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 3
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 4
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>CAMPANHAS</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 1
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 3
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 4
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>REDE SOCIAIS</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 1
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 3
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/reactstrap/reactstrap">
                      Option 4
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
