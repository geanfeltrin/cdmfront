import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CategoryActions from "../../store/ducks/category";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

import { Container } from "./styles";
class nav extends Component {
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

  handleCategorySelect = category => {
    const { selectCategory } = this.props;

    selectCategory(category);
  };
  render() {
    const { category } = this.props;

    return (
      <Container>
        <Navbar color="white" light expand="md" className="height">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar />
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
          </Collapse>
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
)(nav);
