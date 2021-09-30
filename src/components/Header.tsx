import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

export default function Header({ loggedUser }: { loggedUser: boolean }) {
  let history = useHistory();
  function logout() {
    window.localStorage.removeItem("loggedUser");
    history.push("/login");
  }
  return (
    <Nav
      defaultActiveKey="/home"
      as="ul"
      className="justify-content-between bg-light p-3 mb-5"
    >
      <div className="d-flex justify-content-between ">
        <Nav.Item as="li">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        {!loggedUser && (
          <Nav.Item as="li">
            <LinkContainer to="/login">
              <Nav.Link eventKey="link-1">Login</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        )}
      </div>
      {loggedUser ? (
        <Button variant="primary" type="button" onClick={logout}>
          Logout
        </Button>
      ) : null}
    </Nav>
  );
}
