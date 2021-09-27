import { Hero } from "../types/interfaces";

export type Heroes = {
  heroes: Hero[];
};

export type FormSearchBarProps = {
  setter: React.Dispatch<React.SetStateAction<[] | undefined>>;
};