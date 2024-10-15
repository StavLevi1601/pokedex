export interface Berry {
  name: string;
  firmness: {
    name: string;
  };
  flavors: {
    flavor: {
      name: string;
    };
    potency: number;
  }[];
}

const FETCH_URL = "https://pokeapi.co/api/v2/berry?limit=1000";

export async function fetchBerries(): Promise<Berry[]> {
  const response = await fetch(FETCH_URL);
  const data = await response.json();

  const detailedBerries = await Promise.all(
    data.results.map(async (berry: { url: string }) => {
      const berryResponse = await fetch(berry.url);
      return berryResponse.json();
    })
  );

  return detailedBerries;
}

export function groupBerriesByFirmness(berries: Berry[]): {
  [key: string]: Berry[];
} {
  const groupedBerries: { [key: string]: Berry[] } = {};

  berries.forEach((berry) => {
    const firmness = berry.firmness.name;
    if (!groupedBerries[firmness]) {
      groupedBerries[firmness] = [];
    }
    groupedBerries[firmness].push(berry);
  });

  return groupedBerries;
}
