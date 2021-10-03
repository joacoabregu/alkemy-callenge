import { Appearance, Hero, Stats } from "../types/interfaces";
type AppearanceKeys = keyof Appearance;
type StatsKeys = keyof Stats;

export function teamMean(
  weight: string,
  height: string,
  length: number
): {
  weight: string;
  height: string;
} {
  let meanWeight = (parseInt(weight) / length).toFixed(2).replace(/\.00$/, "");
  let meanHeight = (parseInt(height) / length).toFixed(2).replace(/\.00$/, "");
  return { weight: meanWeight, height: meanHeight };
}
let baseMean = {
  weight: "0",
  height: "0",
};

export const sumHeroesAppearance = (objs: Hero[]) => {
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

let stats = {
  intelligence: "0",
  strength: "0",
  speed: "0",
  durability: "0",
  power: "0",
  combat: "0",
};
export const sumHeroesPowerStats = (objs: Hero[]) => {
  const res = objs.reduce((a, b) => {
    let power = b.powerstats;
    let k: StatsKeys;
    for (k in power) {
      let heroValue = parseInt(power[k]) || 0;

      let result: number = parseInt(a[k]) + heroValue;
      a[k] = result.toString();
    }
    return a;
  }, stats);
  return res;
};

export function sortPowerStats(a: string[], b: string[]): 1 | -1 | 0 {
  let valueA = parseInt(a[1]);
  let valueB = parseInt(b[1]);

  if (valueA > valueB) {
    return -1;
  } else if (valueA < valueB) {
    return 1;
  }
  return 0;
}
