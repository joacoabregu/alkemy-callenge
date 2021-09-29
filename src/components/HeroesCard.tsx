import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Hero } from "../types/interfaces";
import { Heroes } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../state/heroesTeamSlice";
import { add as addCount } from "../state/countSlice";
import { Link } from "react-router-dom";
import { RootState } from "../state/store";

export default function HeroesCard({ heroes }: Heroes) {
  const dispatch = useDispatch();
  let count = useSelector((state: RootState) => state.count.count);
  console.log(count);

  if (count.total >= 6) {
    return (
      <h1>
        Tu equipo ya tiene 6 heroes no puedes agregar más. Puedes remover un
        heroe de tu equipo para hacer lugar
      </h1>
    );
  }

  return (
    <>
      {count.good >= 3 ? <p>No puedes agregar más heroes "Buenos"</p> : null}
      {count.bad >= 3 ? <p>No puedes agregar más heroes "Malos"</p> : null}

      {heroes.map((hero: Hero, index: number) => {
        let url = "/detail/" + hero.id;
        console.log(hero.biography.alignment);

        if(count.good >= 3 && hero.biography.alignment === "good") {
          return null 
        }

        if (count.bad >= 3 && hero.biography.alignment !== "good") {
          return null;
        }
        

        return (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={hero.image.url} />
            <Card.Body>
              <Card.Title>{hero.name} </Card.Title>
              <Link
                className="btn btn-outline-light btn-dark"
                role="button"
                to={url}
              >
                Ver más
              </Link>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(add(hero));
                  dispatch(addCount(hero.biography.alignment));
                }}
              >
                Agregar al equipo
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
