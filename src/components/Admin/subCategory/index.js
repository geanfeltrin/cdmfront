import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SubCategoryActions from "../../../store/ducks/subCategory";
import api from "../../../services/api";

import { Button, Row, Label, Form, FormGroup, Input, Col } from "reactstrap";
import Select from "react-select";
import Modal from "../Modal";
// import { Container } from './styles';

class subCategory extends Component {
  state = {
    name: "",

    category: "",
    selectedOption: null
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCreateSubCategory = e => {
    e.preventDefault();

    const { createSubCategoryRequest } = this.props;
    const { name, selectedOption } = this.state;
    const categoryid = selectedOption.id;
    console.log(selectedOption.id, name);

    createSubCategoryRequest(name, categoryid);
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  async componentDidMount() {
    const { getSubCategoryRequest } = this.props;

    const response = await api.get("category");
    this.setState({ category: response.data });

    getSubCategoryRequest();
  }
  render() {
    const { openModal, closeModal, subCategory } = this.props;
    const {
      subCategoryName,

      selectedOption,
      category
    } = this.state;

    return (
      <div>
        <Button color="primary" onClick={openModal}>
          Criar nova SubCategoria
        </Button>
        {subCategory.subModalOpen && (
          <Modal size="big">
            <Form onSubmit={this.handleCreateSubCategory}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">Nome da Sub-Categoria</Label>
                    <Input
                      type="text"
                      name="name"
                      value={subCategoryName}
                      onChange={this.handleInputChange}
                      id="nameId"
                      placeholder="Digite o nome da Sub-Categoria"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <Label for="Permissoes">Categoria</Label>

                  <Select
                    options={category}
                    getOptionLabel={category => category.name}
                    getOptionValue={category => category.id}
                    value={selectedOption}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Button color="primary" size="big" type="Submit">
                  Salvar
                </Button>
                <Button color="secondary" size="big" onClick={closeModal}>
                  Cancelar
                </Button>
              </Row>
            </Form>
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subCategory: state.subCategory
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SubCategoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(subCategory);
