import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CategoryActions from "../../store/ducks/category";
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
import cdmlogo from "../../assets/cdmlogo.png";
import User from "../user";

class Example extends React.Component {
  static propTypes = {
    getCategoryRequest: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    NavbarToggler: PropTypes.arrayOf({
      type: PropTypes.string,
      tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    }),
    category: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        })
      ).isRequired
    })
  };

  componentDidMount() {
    const { getCategoryRequest } = this.props;
    getCategoryRequest();
  }
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
  handleClearStorage = e => {
    localStorage.removeItem("@Cdm:category");
  };
  handleCategorySelect = category => {
    const { selectCategory } = this.props;

    selectCategory(category);
  };
  render() {
    const { category } = this.props;
    return (
      <Container>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/" onClick={this.handleClearStorage}>
            <img src={cdmlogo} alt="Logo" />
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="m-auto">
              {category.data.map(category => (
                <UncontrolledDropdown nav inNavbar key={Math.random()}>
                  <DropdownToggle
                    className="text-uppercase"
                    key={category.id}
                    nav
                  >
                    {category.name}
                  </DropdownToggle>
                  <DropdownMenu
                    key={Math.random()}
                    className="content"
                    center="true"
                  >
                    <div className="item">
                      {category.subCategories.map(subCategories => (
                        <DropdownItem
                          onClick={() =>
                            this.handleCategorySelect({
                              categoryName: category.name,
                              ...subCategories
                            })
                          }
                          key={subCategories.id}
                        >
                          {subCategories.name}
                        </DropdownItem>
                      ))}
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ))}
            </Nav>
          </Collapse>
          <User />
        </Navbar>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  category: state.category
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
