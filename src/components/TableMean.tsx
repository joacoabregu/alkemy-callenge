import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Appearance, Hero } from "../types/interfaces";

type AppearanceKeys = keyof Appearance;
export default function TableMean() {
  let team = useSelector((state: RootState) => state.team.team);
  let [mean, setMean] = useState<Appearance>();

  useEffect(() => {
    let baseMean = {
      weight: "0",
      height: "0",
    };
    const sumObjectsByKey = (objs: Hero[]) => {
      const res = objs.reduce((a, b) => {
        let power = b.appearance;
        let weight = power.weight[1];
        let height = power.height[1];
        let base = { weight, height };
        let k: AppearanceKeys;
        for (k in base) {
          let result: number = parseInt(a[k]) + parseInt(base[k]);
          a[k] = result.toString();
        }
        return a;
      }, baseMean);
      return res;
    };

    let meanArr = sumObjectsByKey(team);
    if (team.length) {
      let meanWeight = (parseInt(meanArr.weight) / team.length)
        .toFixed(2)
        .replace(/\.00$/, "");
      let meanHeight = (parseInt(meanArr.height) / team.length)
        .toFixed(2)
        .replace(/\.00$/, "");
      let actualMean = { weight: meanWeight, height: meanHeight };
      setMean(actualMean);
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
              <td> {mean?.height} </td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{mean?.weight}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
