import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Hero as HeroInterface } from "../types/interfaces";
import { Hero as HeroComponent } from "../components/Hero";

export default function Hero() {
  let [hero, setHero] = useState<HeroInterface>();

  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    let url = "/" + id;
    axios.get(url).then((response) => {
      let result = response.data;
      console.log(result);
      setHero(result);
    });
  }, [id]);

  return (
    <Container fluid="sm">
      <Row>
        <Col>
          {hero ? <HeroComponent hero={hero} /> : null}
        </Col>
      </Row>
    </Container>
  );
}
