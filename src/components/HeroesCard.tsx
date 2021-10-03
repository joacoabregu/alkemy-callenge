import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Hero } from "../types/interfaces";
import { HeroesCardsProps } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../state/heroesTeamSlice";
import { add as addCount } from "../state/countSlice";
import { Link } from "react-router-dom";
import { RootState } from "../state/store";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import HeroesLimitAlert from "./HeroesLimitAlert";

export default function HeroesCard({ heroes, setter }: HeroesCardsProps) {
  const dispatch = useDispatch();
  let team = useSelector((state: RootState) => state.team.team);
  let count = useSelector((state: RootState) => state.count.count);

  if (count.total >= 6) {
    return <HeroesLimitAlert />
  }

  return (
    <Row className="bg-light p-5 mt-5 mb-3 position-relative">
      <Button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-2 p-2"
        aria-label="Close"
        onClick={() => setter([])}
      ></Button>
      {count.good >= 3 ? (
        <Alert variant="warning">No puedes agregar más heroes "Buenos"</Alert>
      ) : null}
      {count.bad >= 3 ? (
        <Alert variant="warning">No puedes agregar más heroes "Malos"</Alert>
      ) : null}

      {heroes.map((hero: Hero, index: number) => {
        let url = "/detail/" + hero.id;
        if (count.good >= 3 && hero.biography.alignment === "good") {
          return null;
        }
        if (count.bad >= 3 && hero.biography.alignment !== "good") {
          return null;
        }
        return (
          <Col
            xs={12}
            md={6}
            xl={3}
            xxl={2}
            key={index}
            className="d-flex justify-content-center"
          >
            <Card style={{ width: "15rem" }} className="text-center mb-4 ">
              <Card.Img variant="top" src={hero.image.url} />
              <Card.Body>
                <Card.Title className="mb-4">{hero.name} </Card.Title>
                <Link
                  className="btn btn-outline-light btn-dark mb-2 "
                  role="button"
                  to={url}
                >
                  Ver más
                </Link>
                {team.some((character) => character.id === hero.id) ? (
                  <p>Este heroe ya esta en tu equipo</p>
                ) : (
                  <Button
                    variant="primary"
                    className="mb-2 ml-2"
                    onClick={() => {
                      dispatch(add(hero));
                      dispatch(addCount(hero.biography.alignment));
                    }}
                  >
                    Agregar
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
