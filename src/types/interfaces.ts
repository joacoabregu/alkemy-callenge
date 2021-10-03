export interface Hero {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    weight: [string, string];
    height: [string, string];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    "work-base": string;
  };
  connections: {};
  image: { url: string };
}

export interface heroSearchResponse {
  response: string;
  "results-for": string;
  results: [];
}

export interface Stats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Appearance {
  weight: string;
  height: string;
}
