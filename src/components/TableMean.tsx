import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Appearance } from "../types/interfaces";
import { teamMean, sumHeroesAppearance } from "../helpers/functions";

export default function TableMean() {
  let team = useSelector((state: RootState) => state.team.team);
  let [mean, setMean] = useState<Appearance>();

  useEffect(() => {
    let meanArr = sumHeroesAppearance(team);
    if (team.length) {
      setMean(teamMean(meanArr.weight, meanArr.height, team.length));
    } else {
      setMean({ weight: "0", height: "0" });
    }
  }, [team]);

  return (
    <Row className="justify-content-center">
      <Col md={4}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Medidas</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Altura</td>
              <td> {mean?.height} cm. </td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{mean?.weight} kg.</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
