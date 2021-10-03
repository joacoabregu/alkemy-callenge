import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Searchbar from "../components/HeroesSearch";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import HeroesTeamContainer from "../components/HeroesTeamContainer";

export default function Home() {
  let team = useSelector((state: RootState) => state.team.team);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mb-3 mt-3">
              Buscá y agrega a tus héroes favoritos a tu equipo
            </h1>
          </Col>
        </Row>
      </Container>

      <Container className="p-3 ">
        <Searchbar />
      </Container>

      <Container>
        <Row>
          <Col>
            <h3 className="text-center mb-5"> Tu equipo </h3>
          </Col>
        </Row>
      </Container>
      <Container>{team.length ? <HeroesTeamContainer /> : null}</Container>
    </>
  );
}
