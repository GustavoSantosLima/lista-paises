import { ICountry } from "@/app/page";
import { CountryCard } from "@/components/CountryCard";
import Image from "next/image";
import Link from "next/link";

async function getCountryByName(name: string): Promise<ICountry> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  return (await response.json())[0];
}

async function getCountryByCodes(
  codes: string[] | undefined
): Promise<ICountry[]> {
  if (codes) {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes}`
    );
    return response.json();
  }

  return [];
}

export default async function Country({
  params: { name }
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(name);
  const borders = await getCountryByCodes(country?.borders);

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="container">
      <h1 className="text-4xl font-bold my-8 text-center text-gray-800">
        {country.translations.por.common}
      </h1>

      <Link href="/" className="flex items-center my-2">
        <Image src="/arrow-back.svg" width={24} height={24} alt="Voltar" />
        voltar
      </Link>

      <article className="flex justify-between bg-white p-4 rounded-xl h-[230px]">
        <section>
          {country.capital && (
            <h2 className="text-md text-gray-800 mt-3">
              <strong>🏙️ Capital: </strong>
              {country.capital}
            </h2>
          )}
          <h2 className="text-md text-gray-800 mt-3">
            <strong>🗺️ Continente: </strong>
            {country.subregion
              ? `${country.region} - ${country.subregion}`
              : country.region}
          </h2>
          <h2 className="text-md text-gray-800 mt-3">
            <strong>👨‍👩‍👧‍👦 População: </strong>
            {formatter.format(country.population)}
          </h2>
          {country.languages && (
            <h2 className="text-md text-gray-800 mt-3">
              <strong>🗣️ Linguas Faladas: </strong>
              <br />
              {Object.values(country.languages || {}).map((language: any) => (
                <span
                  key={language}
                  className="bg-indigo-700 text-white px-2 text-sm rounded-full mr-1"
                >
                  {language}
                </span>
              ))}
            </h2>
          )}
        </section>
        <div className="relative h-auto w-80">
          <Image
            fill
            alt={country.flags.alt}
            src={country.flags.svg}
            className="object-cover"
          />
        </div>
      </article>

      {borders.length > 0 && (
        <section className="my-16">
          <h3 className="text-2xl font-bold mb-2">
            Países que fazem fronteira
          </h3>

          <div className="flex flex-wrap gap-6">
            {borders.map((country: any) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
