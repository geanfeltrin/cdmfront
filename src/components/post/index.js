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
  CardSubtitle,
  CardBody,
  Row,
  Col
} from "reactstrap";

class post extends Component {
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
    console.log(post);
    if (!activeCategory) return null;

    return (
      <Container>
        <Row>
          <Col sm={10}>
            <h1>Divulgação</h1>
          </Col>
          <Col sm={2}>
            <strong>Rede Sociais</strong>
          </Col>
        </Row>

        {post.data.map(post => (
          <Row className="justify-content-md-left">
            <Col sm="4">
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
                  <Button className="float-right">{post.url}</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
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
)(post);
