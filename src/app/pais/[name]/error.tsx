"use client";

import Link from "next/link";
import Image from "next/image";

export default function Error() {
  return (
    <section className="container">
      <h1 className="text-xl my-8 text-center text-gray-800">
        Erro ao carregar o país
      </h1>

      <Link href="/" className="flex items-center my-2">
        <Image src="/arrow-back.svg" width={24} height={24} alt="Voltar" />
        voltar
      </Link>
    </section>
  );
}
