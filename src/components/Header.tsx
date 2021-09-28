import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <LinkContainer to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item as="li">
        <LinkContainer to="/login">
          <Nav.Link eventKey="link-1">Login</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
