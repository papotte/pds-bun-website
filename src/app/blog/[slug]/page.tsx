import { createPosts, filterPosts, getPostData, getPosts } from "@/lib/notion";

import ReactMarkdown from "react-markdown";
import remarkMdx from "remark-mdx";

export async function generateStaticParams() {
  const posts = await getPosts(process.env.NOTION_DATABASE_ID as string);

  const publishedPosts = filterPosts(posts);

  return await createPosts(publishedPosts);
}
async function getData(slug: string) {
  const postData = await getPostData(slug);

  return {
    postData,
  };
}

type PageProps = { params: { slug: string } };
export default async function Page({ params }: PageProps) {
  const data = await getData(params.slug);
  return (
    <article>
      <ReactMarkdown remarkPlugins={[remarkMdx]}>{data.postData}</ReactMarkdown>
    </article>
  );
}
