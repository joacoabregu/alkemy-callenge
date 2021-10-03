import React from "react";
import Col from "react-bootstrap/Col";

export default function HeroesLimitAlert() {
  return (
    <Col>
      <h3 className="text-center">
        Tu equipo ya tiene 6 héroes no puedes agregar más. Puedes remover un
        héroe de tu equipo para hacer lugar.
      </h3>
    </Col>
  );
}
