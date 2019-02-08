import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoryActions from "../../store/ducks/category";

import { Container } from "./styles";

class SideBar extends Component {
  static propTypes = {
    input: PropTypes.bool,
    label: PropTypes.string,
    selectCategory: PropTypes.func.isRequired,
    activeCategory: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  };

  handleCategorySelect = category => {
    const { selectCategory, activeCategory } = this.props;

    if (activeCategory) {
      selectCategory(category);
    }
  };

  render() {
    const { activeCategory, category } = this.props;

    if (!activeCategory) return <h1 />;
    return (
      <Container>
        <div>
          <h1>Categorias</h1>
          {category.data.map(category =>
            category.subCategories.map(subCategories => {
              if (activeCategory.category_id === subCategories.category_id) {
                return (
                  <ul key={Math.random()}>
                    <li key={Math.random()}>
                      <a
                        href="/"
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
              } else return null;
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
