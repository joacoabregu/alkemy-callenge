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
  biography: {};
  appearance: {};
  work: {};
  connections: {};
  image: { url: string };
}

export interface heroSearchResponse {
  response: string;
  "results-for": string;
  results: [];
}
