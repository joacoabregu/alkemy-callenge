import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import { TableProps } from "../types/types";
import { sortPowerStats } from "../helpers/functions";

export default function StatsTable({ stats }: TableProps) {
  let tableData = [
    ["Inteligencia", stats.intelligence],
    ["Fuerza", stats.strength],
    ["Velocidad", stats.speed],
    ["Poder", stats.power],
    ["Resistencia", stats.durability],
    ["Combate", stats.combat],
  ];
  let orderData = tableData.sort(sortPowerStats);

  return (
    <Row className="justify-content-center">
      <Col md={4}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Power</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((data, index) => {
              return (
                <tr key={index}>
                  <td> {data[0]} </td>
                  <td> {data[1]} </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
