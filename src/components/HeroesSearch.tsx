import React, { useState } from "react";
import FormSearchBar from "./Form-Searchbar";
import HeroesCard from "./HeroesCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Login() {
  let [heroes, setHeroes] = useState<[]>();

  return (
    <>
      <Row className="justify-content-center">
        <Col md={6}>
          <FormSearchBar setter={setHeroes} />
        </Col>
      </Row>

      {heroes?.length ? <HeroesCard heroes={heroes} setter={setHeroes} /> : null}
    </>
  );
}
