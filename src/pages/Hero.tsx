import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Hero as HeroInterface } from "../types/interfaces";
import { Hero as HeroComponent } from "../components/Hero";
import Spinner from "../components/Spinner";

export default function Hero() {
  let [hero, setHero] = useState<HeroInterface>();

  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    let url = "/" + id;
    axios.get(url).then((response) => {
      let result = response.data;
      setHero(result);
    });
  }, [id]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center" xs={6}>
          {hero ? <HeroComponent hero={hero} /> : <Spinner />}
        </Col>
      </Row>
    </Container>
  );
}
