import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Stats } from "../types/interfaces";
import StatsTable from "./Table";
import { sumHeroesPowerStats } from "../helpers/functions";

export default function TeamStatsTable() {
  let team = useSelector((state: RootState) => state.team.team);
  let [stats, setStats] = useState<Stats>();

  useEffect(() => {
    let powerstats = sumHeroesPowerStats(team);
    setStats(powerstats);
  }, [team]);
  return <>{stats ? <StatsTable stats={stats} /> : null}</>;
}
