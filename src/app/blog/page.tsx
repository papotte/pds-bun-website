import SectionHead from "@/components/sectionHead";
import {
  extractPostMetadata,
  filterPosts,
  getPosts,
  sortPosts,
} from "@/lib/notion";

async function getData() {
  const posts = await getPosts(process.env.NOTION_DATABASE_ID as string);
  const publishedPosts = filterPosts(posts);
  const sortedPosts = sortPosts(publishedPosts);

  return {
    posts: sortedPosts,
  };
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <SectionHead title="Blog" description="We are a here to help." />

      {data.posts &&
        data.posts.map((post) => {
          const { slug, title, createdTime, tags, abstract } =
            extractPostMetadata(post);
          const url = `/blog/${slug}`;

          return (
            <article key={post.id}>
              <a href={url}>
                <h3>{title}</h3>
              </a>

              <p>{abstract}</p>

              <ul>
                <li>Published: {createdTime}</li>
                <li>Tags: {tags.join(", ")}</li>
              </ul>
            </article>
          );
        })}
    </>
  );
}
