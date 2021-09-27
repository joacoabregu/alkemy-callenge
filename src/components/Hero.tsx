import React from "react";
import { HeroProps } from "../types//types";
import Image from "react-bootstrap/Image";

export function Hero({ hero }: HeroProps) {
  return (
    <>
      <Image src={hero.image.url} fluid />
      <h1>{hero.name} </h1>
      <p>Nombre Completo: {hero.biography["full-name"]} </p>
      <p>Alias: {hero.biography.aliases.map((alias) => alias + " ")} </p>
      <p>Peso: {hero.appearance.weight[1]} </p>
      <p>Altura: {hero.appearance.height[1]} </p>
      <p>Color de ojos: {hero.appearance["eye-color"]}</p>
      <p>Color de cabello: {hero.appearance["hair-color"]} </p>
      <p>Lugar de trabajo: {hero.work["work-base"]} </p>
    </>
  );
}
