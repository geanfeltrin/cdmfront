import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostActions from "../../store/ducks/post";

import { Container } from "./styles";
import {
  Card,
  Button,
  CardImg,
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
    }).isRequired
  };
  componentDidMount() {
    const { getPostRequest, activeCategory } = this.props;

    if (activeCategory) {
      getPostRequest();
    }
  }
  render() {
    const { activeCategory, post } = this.props;

    if (!activeCategory) return <h1>Error</h1>;
    return (
      <Container>
        <Row>
          <Col sm={10}>
            <h1>{activeCategory.categoryName}</h1>
          </Col>
          <Col sm={2}>
            <strong>{activeCategory.name}</strong>
          </Col>
        </Row>

        <Row className="justify-content-md-left">
          {post.data.map(post => {
            if (post.subcategories.id === activeCategory.id) {
              return (
                <Col key={post.id} sm="4">
                  <Card key={post.id}>
                    <CardImg
                      top
                      width="100%"
                      src={post.file.url}
                      alt={post.title}
                    />
                    <CardBody>
                      <CardTitle>{post.title}</CardTitle>
                      {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                      <CardText>{post.description}</CardText>
                      <Button
                        className="float-right bnt-download"
                        href={post.url}
                      >
                        Baixar
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            }
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
