import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import imgDefault from "../../assets/default.jpeg";
import PostActions from "../../store/ducks/post";

import Search from "../search";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Container, Content } from "./styles";

class cards2 extends Component {
  state = {
    loadMore: false,
    loadCount: 8,
    title: ""
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
      const { id } = activeCategory;

      getPostRequest(id);
    }
  }
  showMore = () => {
    this.setState({ loadCount: this.state.loadCount + 4 });
  };

  onSearch = title => {
    const { getPostRequest } = this.props;
    console.log("t", title);
    getPostRequest("", title);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { activeCategory, post } = this.props;
    const { loadCount, title } = this.state;
    return (
      <Container>
        <div className="search">
          <Search
            handleInputChange={this.handleInputChange}
            name="title"
            title={this.state.title}
            onSearch={() => this.onSearch(title)}
          />
        </div>

        <Grid item xs={12} className="title">
          <Grid item xs={12} sm={6}>
            <h1 className="category">{activeCategory.categoryName}</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong className="subcategory">{activeCategory.name}</strong>
          </Grid>
        </Grid>
        <Content>
          {post.data &&
            post.data.slice(0, loadCount).map(post => {
              if (post.subcategories.id === activeCategory.id)
                return (
                  <Card key={post.id} className="card">
                    <CardActionArea disabled={true}>
                      {post.thumbnail_id === null ? (
                        <CardMedia
                          className="media"
                          image={post.file_id ? post.file.url : imgDefault}
                          title="Contemplative Reptile"
                        />
                      ) : (
                        <CardMedia
                          className="media"
                          image={post.dropboxThumbnail.url}
                          title="Contemplative Reptile"
                        />
                      )}

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography expand="true" component="p" noWrap={true}>
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {post.download_id ? (
                        <Button
                          size="small"
                          color="primary"
                          href={
                            post.dropboxDownload.url === null
                              ? post.url
                              : post.dropboxDownload.url
                          }
                        >
                          Baixar
                        </Button>
                      ) : (
                        <Button size="small" color="primary" href={post.url}>
                          Baixar
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                );
            })}
        </Content>
        <div className="content-showMore">
          <Button
            className="btn"
            variant="contained"
            color="primary"
            size="large"
            fullWidth={false}
            onClick={() => this.showMore()}
          >
            Ver Mais !
          </Button>
        </div>
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
)(cards2);
