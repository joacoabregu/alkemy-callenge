import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Hero } from "../types/interfaces";
import { Heroes } from "../types/types";
import { useDispatch } from "react-redux";
import { remove } from "../state/heroesTeamSlice";

export default function HeroesTeam({ heroes }: Heroes) {
  const dispatch = useDispatch();
  return (
    <>
      {heroes.map((hero: Hero, index: number) => {
        return (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={hero.image.url} />
            <Card.Body>
              <Card.Title>{hero.name} </Card.Title>
              <Button
                variant="primary"
                onClick={() => dispatch(remove(parseInt(hero.id)))}
              >
                Quitar del equipo
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
