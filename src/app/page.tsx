import { CountryCard } from "@/components/CountryCard";

export interface ICountry {
  name: {
    common: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages?: string;
  translations: {
    por: {
      common: string;
    };
  };
  borders?: string[];
  flags: {
    svg: string;
    alt: string;
  };
}

async function getContries(): Promise<ICountry[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const contries = await getContries();

  return (
    <section className="flex flex-wrap w-full container mt-16 justify-between">
      {contries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </section>
  );
}
