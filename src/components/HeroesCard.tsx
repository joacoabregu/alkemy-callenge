import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Hero } from "../types/interfaces";
import {Heroes} from "../types/types";


export default function HeroesCard({ heroes }: Heroes) {
  return (
    <>
      {heroes.map((hero: Hero, index: number) => {
        return (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={hero.image.url} />
            <Card.Body>
              <Card.Title>{hero.name} </Card.Title>
              <Button variant="primary">Agregar al equipo</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
