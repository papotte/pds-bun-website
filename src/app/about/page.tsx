import SectionHead from "@/components/sectionHead";
import Image from "next/image";

const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Janette Lynch",
    title: "Senior Director",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Marcell Ziemann",
    title: "Principal Strategist",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Robert Palmer",
    title: "Marketing Engineer",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
export default function About() {
  return (
    <>
      <SectionHead
        title="About"
        description="We are a small passionate team."
      />

      <div className="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
        <h2 className="font-bold text-3xl text-gray-800">
          Empowering the world with Astro.
        </h2>
        <p className="text-lg leading-relaxed text-slate-500">
          We're a multi-cultural team from around the world! We come from
          diverse backgrounds, bringing different personalities, experiences and
          skills to the job. This is what makes our team so special.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
        {team.map((item) => (
          <div className="group" key={item.name}>
            <div className="w-full aspect-square">
              <Image
                {...item.avatar}
                height={item.avatar.height}
                width={item.avatar.width}
                alt="Team"
                className="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-lg text-gray-800"> {item.name}</h2>
              <h3 className="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
