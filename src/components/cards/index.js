import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import imgDefault from "../../assets/default.jpeg";
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

import Featured from "../Featured";

class cards extends Component {
  state = {
    loadMore: false,
    loadCount: 8
  };
  static propTypes = {
    getPostRequest: PropTypes.func.isRequired,
    activeCategory: PropTypes.shape({
      name: PropTypes.string
    })
  };

  componentDidMount() {
    const { getPostRequest, activeCategory } = this.props;

    if (activeCategory) {
      const id = activeCategory.id;
      getPostRequest(id);
    }
  }

  showMore = () => {
    this.setState({ loadCount: this.state.loadCount + 4 });
  };

  render() {
    const { activeCategory, post } = this.props;
    const { loadCount } = this.state;

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

        <Row className="full-width">
          {post.data &&
            post.data.slice(0, loadCount).map(post => {
              if (post.subcategories.id === activeCategory.id) {
                return (
                  <Col key={post.id} sm="2" className="cards-body">
                    <Card key={post.id}>
                      {post.thumbnail_id === null ? (
                        <CardImg
                          src={post.file_id ? post.file.url : imgDefault}
                          width="100%"
                          alt={post.title}
                          className="cards-body-img"
                        />
                      ) : (
                        <CardImg
                          src={post.DropboxThumbnail.url}
                          width="100%"
                          alt={post.title}
                          className="cards-body-img"
                        />
                      )}

                      <CardBody className="cards-body-content">
                        <CardTitle>{post.title}</CardTitle>
                        <CardText expand="true">{post.description}</CardText>
                        {post.download_id ? (
                          <Button
                            className="float-right text-uppercase bnt-download"
                            href={
                              post.DropboxDownload.url === null
                                ? post.url
                                : post.DropboxDownload.url
                            }
                          >
                            Baixar
                          </Button>
                        ) : (
                          <Button
                            className="float-right text-uppercase bnt-download"
                            href={post.url}
                          >
                            Baixar
                          </Button>
                        )}
                      </CardBody>
                    </Card>
                  </Col>
                );
              } else return null;
            })}
          {console.log(post.data)}
        </Row>
        <Col className="p-0">
          {post.data.length > 5 && (
            <div className="box-show-more">
              <p>
                <a
                  className="btn btn-primary show-more"
                  onClick={() => this.showMore()}
                >
                  Ver mais
                </a>
              </p>
            </div>
          )}
        </Col>
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
