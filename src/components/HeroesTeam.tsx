import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Hero } from "../types/interfaces";
import { Heroes } from "../types/types";
import { useDispatch } from "react-redux";
import { remove } from "../state/heroesTeamSlice";
import { remove as removeCount } from "../state/countSlice";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function HeroesTeam({ heroes }: Heroes) {
  const dispatch = useDispatch();
  return (
    <Row className="justify-content-center mb-5">
      {heroes.map((hero: Hero, index: number) => {
        let url = "/detail/" + hero.id;
        let { intelligence, strength, speed, durability, power, combat } =
          hero.powerstats;
        return (
          <Col
            xs={12}
            md={6}
            xl={3}
            xxl={2}
            key={index}
            className="d-flex justify-content-center"
          >
            <Card style={{ width: "14rem" }} className="text-center mb-4">
              <Card.Img variant="top" src={hero.image.url} />
              <Card.Body>
                <Card.Title>{hero.name} </Card.Title>
                <p>
                  Inteligencia: {intelligence === "null" ? "-" : intelligence}{" "}
                </p>
                <p>Fuerza: {strength === "null" ? "-" : strength} </p>
                <p>Velocidad: {speed === "null" ? "-" : speed} </p>
                <p>Resistencia: {durability === "null" ? "-" : durability} </p>
                <p>Poder: {power === "null" ? "-" : power}</p>
                <p>Combate: {combat === "null" ? "-" : combat} </p>

                <Link
                  className="btn btn-outline-light btn-dark "
                  role="button"
                  to={url}
                >
                  Ver más
                </Link>

                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(remove(parseInt(hero.id)));
                    dispatch(removeCount(hero.biography.alignment));
                  }}
                >
                  Quitar del equipo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
