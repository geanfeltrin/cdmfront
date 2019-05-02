import React, { Component } from "react";

import { Button, Row, Col } from "reactstrap";

import { Container } from "./styles";

import api from "../../services/api";

export default class Featured extends Component {
  state = {
    featured: []
  };

  async componentDidMount() {
    const response = await api.get("filter");
    this.setState({ featured: response.data });
  }
  render() {
    const { featured } = this.state;

    return (
      <Container>
        {featured &&
          featured.map(post => {
            if (post.featured === true) {
              return (
                <Col key={post.id}>
                  <h1 className="txt-center">{post.title}</h1>
                  <Row>
                    {post.file_id && (
                      <Col className="m-3">
                        <img
                          className="img-fluid mx-auto d-block"
                          src={
                            post.file_id
                              ? post.file.url
                              : post.dropboxThumbnail.url
                          }
                          width="500px"
                          height="400px"
                          alt="campanha mulheres"
                        />
                      </Col>
                    )}
                  </Row>
                  <Row className="text-center">
                    <Col className="m-3 mx-auto d-block">
                      <Button
                        className="btn btn-success"
                        href={
                          post.download_id ? post.dropboxDownload.url : post.url
                        }
                      >
                        Fazer Download
                      </Button>
                    </Col>
                  </Row>
                </Col>
              );
            } else return null;
          })}
      </Container>
    );
  }
}
