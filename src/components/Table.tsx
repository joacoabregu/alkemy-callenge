import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import { TableProps } from "../types/types";

export default function StatsTable({ stats }: TableProps) {
  let tableData = [
    ["Inteligencia", stats.intelligence],
    ["Fuerza", stats.strength],
    ["Velocidad", stats.speed],
    ["Poder", stats.power],
    ["Resistencia", stats.durability],
    ["Combate", stats.combat],
  ];
  let orderData = tableData.sort(function (a, b) {
    var valueA, valueB;

    valueA = parseInt(a[1]);
    valueB = parseInt(b[1]);
    if (valueA > valueB) {
      return -1;
    } else if (valueA < valueB) {
      return 1;
    }
    return 0;
  });
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
