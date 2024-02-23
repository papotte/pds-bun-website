import {
  SiAlpinedotjs,
  SiAstro,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export default function Logos() {
  return (
    <div className="mt-24">
      <h2 className="text-center text-slate-500">
        Works with your technologies
      </h2>
      <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
        <SiReact size="2rem" />
        <SiSvelte size="2rem" />
        <SiTailwindcss size="2rem" />
        <SiAlpinedotjs size="2rem" />
        <SiVercel size="2rem" />
        <SiAstro size="2rem" />
      </div>
    </div>
  );
}
