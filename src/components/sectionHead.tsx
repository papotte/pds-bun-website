export default function SectionHead({
  title,
  description,
  align = "center",
}: Readonly<{
  title: string;
  description: string;
  align?: "center" | "right" | "left";
}>) {
  return (
    <div className={`mt-16 text-${align}`}>
      <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        <slot name="title">{title}</slot>
      </h1>
      <p className="text-lg mt-4 text-slate-600">
        <slot name="desc">{description}</slot>
      </p>
    </div>
  );
}
