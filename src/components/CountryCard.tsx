import Link from "next/link";
import Image from "next/image";
import { ICountry } from "@/app/page";

type CountryCardProps = {
  country: ICountry;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link href={`/pais/${country.name.common}`}>
      <article className="w-72 p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl mb-8">
        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
          <Image
            fill
            src={country.flags.svg}
            alt={country.flags.alt}
            className="object-cover"
          />
        </div>
        <h2 className="font-bold text-md text-center my-4">
          {country.translations.por.common}
        </h2>
      </article>
    </Link>
  );
}
