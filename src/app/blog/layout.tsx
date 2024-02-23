export default function BlogLayout({
  params,
  children,
}: Readonly<{
  params: any;
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="mx-auto max-w-[735px] mt-14">
        <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
          {params.category}
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
          {params.title}
        </h1>
        <div className="flex gap-2 mt-3 items-center">
          <span className="text-gray-400">{params.author}</span>
          <span className="text-gray-400">•</span>
          <time className="text-gray-400">{params.publishDate}</time>
          <span className="text-gray-400">•</span>
          <div className="flex gap-3">
            {params.tags.map((tag: string) => (
              <span key={tag} className="text-sm text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto prose prose-lg mt-6">{children}</div>
      <div className="text-center mt-8">
        <a
          href="/blog"
          className="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition"
        >
          ← Back to Blog
        </a>
      </div>
    </section>
  );
}
