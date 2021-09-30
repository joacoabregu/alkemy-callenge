import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSearchBar from "./Form-Searchbar";
import HeroesCard from "./HeroesCard";

export default function Login() {
  let [heroes, setHeroes] = useState<[]>();

  return (
    <>
      <FormSearchBar setter={setHeroes}  />

      {heroes ? <HeroesCard heroes={heroes} /> : null}
    </>
  );
}
