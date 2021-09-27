import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSearchBar from "./Form-Searchbar";
import HeroesCard from "./HeroesCard";

export default function Login() {
  let [heroes, setHeroes] = useState<[]>();

  return (
    <Container fluid="sm">
      <Row>
        <Col>
          <FormSearchBar setter={setHeroes} />
        </Col>
      </Row>
      <Row>
        <Col>{heroes ? <HeroesCard heroes={heroes} /> : null}</Col>
      </Row>
    </Container>
  );
}
