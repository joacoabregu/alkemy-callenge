import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import HeroesTeam from "../components/HeroesTeam";
import TeamStats from "../components/teamStats";
import TableMean from "../components/TableMean";

export default function HeroesTeamContainer() {
  let team = useSelector((state: RootState) => state.team.team);

  return (
    <>
      <HeroesTeam heroes={team} />
      <h3>Estadísticas de tu equipo</h3>
      <TeamStats />
      <TableMean />
    </>
  );
}
