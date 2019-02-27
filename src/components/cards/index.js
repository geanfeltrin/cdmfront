import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostActions from "../../store/ducks/post";

import { Container, CardImg, Content } from "./styles";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";

class cards extends Component {
  static propTypes = {
    getPostRequest: PropTypes.func.isRequired,
    activeCategory: PropTypes.shape({
      name: PropTypes.string
    })
  };

  componentDidMount() {
    const { getPostRequest, activeCategory } = this.props;

    if (activeCategory) {
      getPostRequest();
    }
  }
  render() {
    const { activeCategory, post } = this.props;

    if (!activeCategory)
      return (
        <Content>
          <h1 className="txt-welcome">Seja Bem-vindo</h1>

          <Col fluid>
            <h1 className="txt-center">Campanha Mês das Mulheres</h1>
            <Row>
              <Col className="m-3">
                <img
                  className="img-fluid mx-auto d-block"
                  src="http://cdm.escolatecnicaresidencia.com.br/api/files/5"
                  width="500px"
                  height="400px"
                  alt="campanha mulheres"
                />
              </Col>
            </Row>
            <Row className="text-center">
              <Col className="m-3 mx-auto d-block">
                <Button
                  className="btn btn-success"
                  href="https://www.dropbox.com/sh/gcxfryx10kxn93v/AAB6scCEc4fLqZAyhrywy69wa?dl=1"
                >
                  Fazer Download
                </Button>
              </Col>
            </Row>
          </Col>
        </Content>
      );
    return (
      <Container>
        <Row className="title">
          <Col sm={10}>
            <h1>{activeCategory.categoryName}</h1>
          </Col>
          <Col sm={2}>
            <strong>{activeCategory.name}</strong>
          </Col>
        </Row>

        <Row>
          {post.data.map(post => {
            if (post.subcategories.id === activeCategory.id) {
              return (
                <Col key={post.id} sm="2" className="cards-body">
                  <Card key={post.id}>
                    <CardImg
                      src={post.file.url}
                      width="100%"
                      alt={post.title}
                      className="cards-body-img"
                    />

                    <CardBody>
                      <CardTitle>{post.title}</CardTitle>
                      {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                      <CardText>{post.description}</CardText>
                      <Button
                        className="float-right text-uppercase bnt-download"
                        href={post.url}
                      >
                        Baixar
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            } else return null;
          })}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  activeCategory: state.category.active,
  post: state.post
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cards);
