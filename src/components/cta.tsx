import { Button } from "flowbite-react";

export default function Cta() {
  return (
    <div className="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-3xl md:text-6xl">
        Build faster websites.
      </h2>
      <p className="text-slate-500 mt-4 text-lg md:text-xl">
        Pull content from anywhere and serve it fast with next-gen island
        architecture.
      </p>
      <div className="flex mt-5">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
