import { Appearance, Hero, Stats } from "../types/interfaces";
type AppearanceKeys = keyof Appearance;
type StatsKeys = keyof Stats;

// Calculate mean for a weight and height with a given length
export function teamMean(
  weight: string,
  height: string,
  length: number
): {
  weight: string;
  height: string;
} {
  // Return number in fixed point notation and remove trailing .00
  let meanWeight: string = (parseInt(weight) / length)
    .toFixed(2)
    .replace(/\.00$/, "");
  let meanHeight: string = (parseInt(height) / length)
    .toFixed(2)
    .replace(/\.00$/, "");
  return { weight: meanWeight, height: meanHeight };
}

let baseMean = {
  weight: "0",
  height: "0",
};
// Calculate total sum of weight and height from an array of Heroes. Use "baseMean" variable as initial Value
export const sumHeroesAppearance = (
  objs: Hero[]
): {
  weight: string;
  height: string;
} => {
  const res = objs.reduce((total, hero) => {
    let power = hero.appearance;
    let weight = power.weight[1];
    let height = power.height[1];
    let heroAppearance = { weight, height };
    let k: AppearanceKeys;
    for (k in heroAppearance) {
      let result: number = parseInt(total[k]) + parseInt(heroAppearance[k]);
      total[k] = result.toString();
    }
    return total;
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

// Calculate total sum of powerstats from an array of Heroes. Use "stats" variable as Initial Value
export const sumHeroesPowerStats = (objs: Hero[]) => {
  const res = objs.reduce((total, hero) => {
    let power = hero.powerstats;
    let k: StatsKeys;
    for (k in power) {
      let heroValue = parseInt(power[k]) || 0;
      let result: number = parseInt(total[k]) + heroValue;
      total[k] = result.toString();
    }
    return total;
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
