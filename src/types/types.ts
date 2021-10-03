import { Hero } from "../types/interfaces";
import { Stats } from "../types/interfaces";


export type Heroes = {
  heroes: Hero[];
  
};

export type HeroesCardsProps = {
  heroes: Hero[];
  setter: React.Dispatch<React.SetStateAction<[] | undefined>>;
};

export type HeroProps = {
  hero: Hero;
};

export type TableProps = {
  stats: Stats;
}

export type FormSearchBarProps = {
  setter: React.Dispatch<React.SetStateAction<[] | undefined>>;
};