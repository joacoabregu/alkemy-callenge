import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "../components/Form";

export default function Login() {
  return (
    <Container fluid="sm">
      <Row>
        <Col>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}
