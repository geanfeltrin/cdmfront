import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";
import { Table, Button, Row } from "reactstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UsersActions from "../../../store/ducks/users";

class users extends Component {
  static propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object
    ]),
    getUsersRequest: PropTypes.func.isRequired,
    openUsersModal: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { getUsersRequest } = this.props;

    getUsersRequest();
  }
  render() {
    const { users, openUsersModal } = this.props;
    return (
      <Container>
        <Row>
          <h1>Usuários</h1>
          <Button color="primary" onClick={() => {}}>
            Criar novo Usuário
          </Button>
        </Row>

        <Table hover className="tb">
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          {users.data.map(users => (
            <tbody>
              <tr>
                <th scope="row">{users.id}</th>
                <td>{users.username}</td>
                <td>{users.email}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(users);
