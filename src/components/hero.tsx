import { Button } from "flowbite-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
      <div className="py-6 md:order-1 hidden md:block">
        <Image
          src="/hero.png"
          alt="Astronaut in the air"
          width="500"
          height="300"
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
          Marketing website done with Astro
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketing websites &
          landing pages.
          <wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can
          quickly create any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="#" target="_blank" rel="noopener">
            Get Started
          </Button>
          <Button size="lg" outline rel="noopener" target="_blank">
            View Repo
          </Button>
        </div>
      </div>
    </main>
  );
}
