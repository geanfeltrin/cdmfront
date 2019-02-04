import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoryActions from "../../store/ducks/post";

import { Container } from "./styles";

class SideBar extends Component {
  static propTypes = {
    input: PropTypes.bool,
    label: PropTypes.string,
    getPostRequest: PropTypes.func.isRequired,
    activeCategory: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  };

  handleCategorySelect = category => {
    const { selectCategory } = this.props;

    selectCategory(category);
  };

  render() {
    const { activeCategory, category } = this.props;
    return (
      <Container>
        <div>
          <strong>{activeCategory.categoryName}</strong>
          {category.data.map(category =>
            category.subCategories.map(subCategories => {
              if (activeCategory.category_id === subCategories.category_id) {
                return (
                  <ul>
                    <li>
                      <a
                        key={subCategories.id}
                        onClick={() =>
                          this.handleCategorySelect({
                            categoryName: category.name,
                            ...subCategories
                          })
                        }
                      >
                        {subCategories.name}
                      </a>
                    </li>
                  </ul>
                );
              }
            })
          )}
        </div>
        {/* 
        <Tags>
          <strong>Tags</strong>
          <div>
            <label>
              <input type="checkbox" value="option1" checked={true} />
              Enfermagem
            </label>
            <label>
              <input type="checkbox" value="option1" checked={false} />
              Enfermagem
            </label>
            <label>
              <input type="checkbox" value="option1" checked={false} />
              Enfermagem
            </label>
            <label>
              <input type="checkbox" value="option1" checked={false} />
              Enfermagem
            </label>
          </div>
        </Tags> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  activeCategory: state.category.active,
  category: state.category
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
